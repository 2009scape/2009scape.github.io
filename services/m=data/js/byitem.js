let npcNameMap = {}
let items = {}

class npcObject {
    constructor(ids, name) {
        this.ids = ids;
        this.name = name;
        this.totalWeight = 0
        this.default = []
        this.main = []
    }
}

function newDisplayItem(name, id, min, max, weight, totalWeight) {
    let row = $("<tr>")
    let icon = $("<img>").attr('src', iconURL(id))
    let itemName = $("<td>").text(getItemName(id))
    let npcName = $("<td>").text(name)
    let amount = $("<td>").text((min != max) ? min + "-" + max : min)
    let debug = $("<div>").text("id: " + id).addClass(debugClass)
    let rarity = ""

    // Weights
    if (weight != -1) {
        let percent = (weight / totalWeight) * 100
        rarity = $("<td>").text("1/" + (+parseFloat(100 / percent).toFixed(2).replace(/(\.0+|0+)$/, '')))
            .prop('title', parseFloat((percent).toFixed(2)) + "%")
            .attr('data-value', parseFloat((percent).toFixed(2)))
            .addClass(rarityStyle(percent))
    } else {
        rarity = $("<td>").text("Always").addClass(rarityStyle(100))
            .attr('data-value', parseFloat(100))
    }
    return row.append(npcName).append($("<td>").append(icon)).append(itemName.append(debug)).append(amount).append(rarity)[0]
}

function spaceToUnder(str) {
    return str.replaceAll(' ', '_').toLowerCase()
}

function mapNPCItem(drops) {
    for (const npc of drops) {

        let name = npcNameMap[npc.ids.split(",")[0]]
        let npcObj = new npcObject(npc.ids, name)

        // Add default drops
        npc['default'].forEach(drop => {
            let name = spaceToUnder(getItemName(drop.id))
            if (items[name])
                items[name] += ("," + npc['ids'])
            else
                items[name] = npc['ids']

            drop.weight = -1
            npcObj.default.push(drop)
            npcObj[name] = [drop]
        })

        // Normal drops
        npc['main'].forEach(drop => {
            let name = spaceToUnder(getItemName(drop.id))
            npcObj.totalWeight += parseFloat(drop.weight)
            if (items[name])
                items[name] += ("," + npc['ids'])
            else
                items[name] = npc['ids']

            npcObj.main.push(drop)
            if (npcObj[name])
                npcObj[name].push(drop)
            else
                npcObj[name] = [drop]
        })
        allNPCs[name] = npcObj
    }
}

function mapNPCNames(npcs) {
    Object.keys(npcs).forEach(npcName => {
        npcs[npcName].split(",").every(id => npcNameMap[id] = npcName)
    })
}

function search(e) {
    let input = spaceToUnder(e.value)
    let table = document.getElementById("dcontent")
    table.innerHTML = ""

    Object.keys(items).forEach(itemName => {
        let itemDisplay = $("<tbody>")
        if (input.length > 3 && itemName.includes(input)) {

            console.log(input + " is like " + itemName)

            let npcName = ""
            let npcIDs = items[spaceToUnder(itemName)].split(",")

            for (const npc of npcIDs) {
                if (npcNameMap[npc] && npcNameMap[npc] != npcName) {
                    npcName = npcNameMap[npc]
                    if (allNPCs[npcName][itemName]) {
                        // For monsters dropping the same ID in different ways (count) increment index
                        try {
                            for (const item of allNPCs[npcName][itemName]) {
                                itemDisplay.append(newDisplayItem(npcName, item.id, item.minAmount, item.maxAmount, item.weight, allNPCs[npcName].totalWeight))
                            }
                        } catch (e) {
                            console.log("error in" + e)
                        }
                    }
                }
            }
            if (itemDisplay[0].childElementCount > 0) {
                let h1 = $("<h1>").addClass("hover-link").append($("<div>").text(prettyName(itemName)))
                    .on('mouseenter', function () {
                        $(this).text(prettyName(itemName)).append($("<img>").attr('src', ".././img/items/link.png"))
                    })
                    .on('click', function () {
                        window.location = window.location.toString().split('?')[0] + "?" + this.innerText
                    })
                    .on('mouseleave', function () {
                        $(this).find($("img")).remove()
                    })

                table.appendChild($("<div>").append(h1)
                    .append($("<div>")
                        .addClass(debugClass)
                        .append($("<p>")
                            .text("NPC ids: " + npcIDs)))[0])

                itemDisplay.on('click', function (e) {
                    e = e.currentTarget
                    // Classname is used to track the sorting direction
                    let sortOrder = (e.className === 'true');
                    e.className = 'true'
                    sortByRarity(e, !sortOrder)
                })
                table.append(itemDisplay[0])
            }
        }
    });
}

window.addEventListener('load', () => {
    let timeout = 0;
    let checkExist = setInterval(function () {
        if (allDrops != undefined && allNPCs != undefined && allItems != undefined) {
            clearInterval(checkExist);
            mapNPCNames(allNPCs)
            mapNPCItem(allDrops)
            searchURLString()
        }
        checkTimeout(timeout++)
    }, 100);
});