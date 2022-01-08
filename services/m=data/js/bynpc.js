function genDropMap(dropTable) {
    for (let i = 0; i < dropTable.length; i += 1) {
        dropTable[i]['ids'].split(",").forEach(id => {
            dropMap[id] = i
        })
    }
}

function newDisplayItem(id, min, max, weight, totalWeight) {
    let row = $("<tr></tr>")
    let icon = $("<img>").attr('src', iconURL(id))
    let itemName = $("<td>").text(getItemName(id))
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
    return row.append($("<td>").append(icon)).append(itemName.append(debug)).append(amount).append(rarity)[0]
}

function search(input) {
    let searchStr = removeSpaces(input.value)
    let table = document.getElementById("dcontent")
    table.innerHTML = ""

    //Search for matching ID
    Object.keys(allNPCs).forEach(npcName => {
        if (searchStr.length > 2 && removeSpaces(npcName).includes(searchStr)) {

            console.log(searchStr + " is like " + npcName)

            let npcEntry = $("<tbody>")
            let npcIds = allNPCs[npcName].split(",")
            let dropGIndex = null

            let matched = false;
            for(const id of npcIds){
                if (!matched && dropMap[id]) {

                    dropGIndex = dropMap[id]

                    // Guaranteed / 'default' drops
                    for (let j = 0; j < allDrops[dropGIndex]['default'].length; j += 1) {
                        let id = allDrops[dropGIndex]['default'][j]["id"]
                        let min = allDrops[dropGIndex]['default'][j]["minAmount"]
                        let max = allDrops[dropGIndex]['default'][j]["maxAmount"]
                        npcEntry.append(newDisplayItem(id, min, max, -1, -1))
                    }

                    // Calculate combined/total weight of all normal drops
                    let totalWeight = 0.0
                    for (let j = 0; j < allDrops[dropGIndex]['main'].length; j += 1) {
                        totalWeight += parseFloat(allDrops[dropGIndex]['main'][j]["weight"])
                    }

                    // Normal drops
                    for (let j = 0; j < allDrops[dropGIndex]['main'].length; j += 1) {
                        let id = allDrops[dropGIndex]['main'][j]["id"]
                        let min = allDrops[dropGIndex]['main'][j]["minAmount"]
                        let max = allDrops[dropGIndex]['main'][j]["maxAmount"]
                        let weight = parseFloat(allDrops[dropGIndex]['main'][j]["weight"])
                        npcEntry.append(newDisplayItem(id, min, max, weight, totalWeight))
                    }
                    matched = true;
                }
            }
            if (npcEntry[0].childElementCount > 0) {
                let h1 = $("<h1>").addClass("hover-link").append($("<div>").text(npcName))
                    .on('mouseenter', function () {
                        $(this).text(npcName).append($("<img>").attr('src', ".././img/items/link.png"))
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
                            .text("ids: " + allNPCs[npcName])))[0])

                npcEntry.on('click', function (e) {
                    e = e.currentTarget
                    // Classname is used to track the sorting direction
                    let sortOrder = (e.className === 'true');
                    e.className = 'true'
                    sortByRarity(e, !sortOrder)
                })
                table.appendChild(npcEntry[0])
            }
        }
    })
}

window.addEventListener('load', () => {
    let timeout = 0
    let load = setInterval(function () {
        if (allDrops && allNPCs && allItems) {
            clearInterval(load)
            genDropMap(allDrops)
            searchURLString()
        }
        checkTimeout(timeout++)
    }, 100)
})