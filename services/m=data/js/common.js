let debugClass = "debug-hide"
let allNPCs = null
let allItems = null
let allDrops = null
let dropMap = {}

function sortByRarity(table, order) {
    let switching = true;
    let shouldSwitch = false;
    let c = 0;

    while (switching) {
        switching = false
        rows = table.rows;
        let last = rows[0].getElementsByTagName("TD").length - 1

        for (i = 0; i < (rows.length - 1); i++) {
            c += 1
            let x = rows[i].getElementsByTagName("TD")[last];
            let y = rows[i + 1].getElementsByTagName("TD")[last];

            let xval = parseFloat(x.getAttribute("data-value"));
            let yval = parseFloat(y.getAttribute("data-value"));
            
            if (!order) {
                // We are already in order. Just invert the table.
                $(table).each(function(){
                    var list = $(this).children('tr');
                    $(this).html(list.get().reverse())
                });
                break;
            } else {
                if (xval < yval) {
                    shouldSwitch = true
                    break;
                }
            }
            shouldSwitch = false;
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    console.log("Sorted in: ",c," steps")
}

function iconURL(id) {
    switch (parseInt(id)) {
        case 0:
            return ".././img/items/nothing.png"
        case 1:
            //Clue Scroll (easy)
            return ".././img/items/2677.png"
        case 5733:
            //Clue Scroll (medium)
            return ".././img/items/2801.png"
        case 12070:
            //Clue Scroll (hard)
            return ".././img/items/2722.png"
        default:
            return ".././img/items/" + id + ".png"
    }
}

function getItemName(id) {
    return allItems[id]
}

function rarityStyle(percent) {
    if (percent > 99.99)
        return "always"
    if (percent > 4)
        return "common"
    if (percent > 1)
        return "uncommon"
    if (percent > 0.1)
        return "rare"
    return "veryrare"
}

function prettyName(name) {
    let formatted = ""
    let parts = name.split("_")
    let i = 0
    while (i < parts.length) {
        let part = parts[i]
        formatted += part[0].toUpperCase() + part.substring(1)
        i += 1
        if (i < parts.length)
            formatted += " "
    }
    return formatted
}

function removeSpaces(str) {
    return str.replaceAll(' ', '').toLowerCase()
}

window.addEventListener('load', () => {

    async function getNPCIds() {
        const response = await fetch('.././json/npc_config.json');
        return await response.json();
    }
    async function getItemIds() {
        const response = await fetch('.././json/item_config.json');
        return await response.json();
    }
    async function getDrops() {
        // Mirror fetches changes every 15 minutes from Gitlab
        const response = await fetch('https://downthecrop.github.io/2009scape-mirror/Server/data/configs/drop_tables.json');
        return await response.json();
    }

    // Fetch JSONS
    getItemIds().then(j => {
        // Edge cases
        j["0"] = "Nothing"
        j["12070"] = "Clue Scroll (hard)"
        j["5733"] = "Clue Scroll (medium)"
        j["1"] = "Clue Scroll (easy)"
        allItems = j
    })
    getNPCIds().then(j => allNPCs = j)
    getDrops().then(j => allDrops = j)

    // Restore Debug option
    if (localStorage.getItem('debug') === 'true') {
        document.getElementById("debug-toggle").checked = true;
        debugClass = "debug-show"
    }

    // Toggle Item and NPC ids
    document.getElementById("debug-toggle").addEventListener("change", function () {
        if (this.checked) {
            const debug = document.querySelectorAll('.debug-hide');
            debugClass = "debug-show"
            debug.forEach(element => {
                element.className = debugClass;
            });
        }
        else {
            const debug = document.querySelectorAll('.debug-show');
            debugClass = "debug-hide"
            debug.forEach(element => {
                element.className = debugClass;
            });
        }
        localStorage.setItem('debug', this.checked);
    })
})


function checkTimeout(sec) {
    // If loading JSONs takes longer than 600ms, show 'Loading JSON' message 
    // refresh the page on a 10 second timeout.
    if (sec > 6) {
        document.getElementsByClassName("loading")[0].setAttribute("style", "display:block;")
    } else if (sec > 60) {
        window.location.reload
    }
}

function searchURLString() {
    // Clear loading JSON message
    document.getElementsByClassName("loading")[0].setAttribute("style", "display:none;")

    // Load directly linked monster/item if there is a search
    if (window.location.search) {
        document.getElementsByTagName("input")[0].value = window.location.search.substring(1).replaceAll("%20", " ").replace(/%27/g, "'")
        search(document.getElementsByTagName("input")[0])
    }
}