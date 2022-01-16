let itemData
let duplicates = []
let filteredKeys = ["durability", "remove_head", "absorb", "bonuses", "archery_ticket_price",
    "attack_anims", "attack_audios", "weapon_interface",
    "walk_anim", "turn90cw_anim", "turn90ccw_anim", "run_anim", "stand_turn_anim", "turn180_anim",
    "stand_anim", "stand_turn_anim", "render_anim","defence_anim"]

function newDisplayItem(itemObj) {
    let debugState = (debugClass == "debug-show") ? true : false;
    let row = $("<tr>")
    let icon = $("<img>").attr('src', iconURL(itemObj.id))
    let itemName = $("<td>").text(itemObj.name).append(icon)



    let about = $("<td style='text-align:left;'>")


    for (const [key, value] of Object.entries(itemObj)) {
        // Filter some known values we don't care about
        if (debugState) {
            about.append($("<tr>").append(`<b>${key}</b>: ${value}`))
        } else if (!filteredKeys.includes(key)) {
            about.append($("<tr>").append(`<b>${key}</b>: ${value}`))
        }
    }


    // Bonuses Order
    // Attack: Stab, Slash, Crush, Magic, Ranged
    // Defensive: Stab, Slash, Crush, Magic, Ranged, Summoning
    // Other: Strength, Prayer
    if (itemObj.bonuses) {
        let stats = itemObj.bonuses.split(",")
        let aStab = stats[0]
        let aSlash = stats[1]
        let aCrush = stats[2]
        let aMagic = stats[3]
        let aRanged = stats[4]
        let dStab = stats[5]
        let dSlash = stats[6]
        let dCrush = stats[7]
        let dMagic = stats[8]
        let dRanged = stats[9]
        let dSummoning = stats[10]
        let strength = stats[11]
        let prayer = stats[12]
        let magicStr = stats[13]
        let rangedStr = stats[14]


        let attackBonusIcons = $("<tbody>").append($("<tr>"))
            .append($("<td>").append($("<img>").attr('src', iconURL(1207))))
            .append($("<td>").append($("<img>").attr('src', iconURL(1325))))
            .append($("<td>").append($("<img>").attr('src', iconURL(1339))))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/magic.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/ranged.png")))

        let defenseBonusIcons = $("<tbody>").append($("<tr>"))
            .append($("<td>").append($("<img>").attr('src', iconURL(1207))))
            .append($("<td>").append($("<img>").attr('src', iconURL(1325))))
            .append($("<td>").append($("<img>").attr('src', iconURL(1339))))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/magic.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/ranged.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/summoning.png")))

        let otherBonusIcons = $("<tbody>").append($("<tr>"))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/Strength_icon.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/RangedStrength.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/MagicStrength.png")))
            .append($("<td>").append($("<img>").attr('src', ".././img/alt/Prayer_icon.png")))

        let attackBonus = $("<tr>")
            .append($("<td>").append(aStab))
            .append($("<td>").append(aSlash))
            .append($("<td>").append(aCrush))
            .append($("<td>").append(aMagic))
            .append($("<td>").append(aRanged))

        let defenseBonus = $("<tr>")
            .append($("<td>").append(dStab))
            .append($("<td>").append(dSlash))
            .append($("<td>").append(dCrush))
            .append($("<td>").append(dMagic))
            .append($("<td>").append(dRanged))
            .append($("<td>").append(dSummoning))

        let otherBonus = $("<tr>")
            .append($("<td>").append(strength))
            .append($("<td>").append(rangedStr))
            .append($("<td>").append(magicStr))
            .append($("<td>").append(prayer))

        row.append($("<div>").text("Attack bonuses").attr('class', 'stat-data'))
        row.append(attackBonusIcons.append(attackBonus))
        row.append($("<div>").text("Defense bonuses").attr('class', 'stat-data'))
        row.append(defenseBonusIcons.append(defenseBonus))
        row.append($("<div>").text("Other bonuses").attr('class', 'stat-data'))
        row.append(otherBonusIcons.append(otherBonus))

    }
    return row.append(itemName).append(about)[0]
}

function spaceToUnder(str) {
    return str.replaceAll(' ', '_').toLowerCase()
}


function search(e) {
    let input = spaceToUnder(e.value)
    let table = document.getElementById("dcontent")
    table.innerHTML = ""
    console.log(input)
    for (const item of itemData) {
        let itemDisplay = $("<tbody>")
        if (input.length > 3 && spaceToUnder(item.name).includes(input)) {
            console.log(input + " is like " + item.name)
            if (duplicates.indexOf(item.id) == -1)
                itemDisplay.append(newDisplayItem(item))

            let h1 = $("<h1>").addClass("hover-link").append($("<div>").text(prettyName(item.name)))
                .on('mouseenter', function () {
                    $(this).text(prettyName(item.name)).append($("<img>").attr('src', ".././img/items/link.png"))
                })
                .on('click', function () {
                    window.location = window.location.toString().split('?')[0] + "?" + this.innerText
                })
                .on('mouseleave', function () {
                    $(this).find($("img")).remove()
                })
            if (itemDisplay[0].innerHTML != "") {
                table.appendChild($("<div>").append(h1)[0])
                table.append(itemDisplay[0])
            }
        }
    }
}

window.addEventListener('load', () => {
    let timeout = 0;
    async function getItems() {
        // Mirror fetches changes every 15 minutes from Gitlab
        const response = await fetch('https://downthecrop.github.io/2009scape-mirror/Server/data/configs/item_configs.json');
        itemData = await response.json();
    }
    getItems();
    let checkExist = setInterval(function () {
        if (itemData != undefined) {
            let checked = []
            for (item of itemData) {
                if (checked.indexOf(item.name) != -1) {
                    duplicates.push(item.id)
                }
                checked.push(item.name)
            }
            clearInterval(checkExist);
            searchURLString()
        }
        checkTimeout(timeout++)
    }, 100);
});