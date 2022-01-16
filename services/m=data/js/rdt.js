/*
 * This file doesn't use the common.js functions
 * which makes it a mess. Tread carefully.
*/

var dropG
var itemG
var debugClass = "debug"

function sortTable(t){
    for (i in t.path){
        if(t.path[i].tagName == "TBODY"){
            let sortOrder = true
            if(t.path[i].className != undefined){
                sortOrder = (t.path[i].className === 'true');
            }
            sortByRarity(t.path[i],!sortOrder)
        }
    }
}

function sortByRarity(table,order){
    table.className = order
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];

            // Splt at '/' and divide
            let xEval = x.innerText.split('/')
            xEval = parseFloat(xEval[0]/xEval[1])
            let yEval = y.innerText.split('/')
            yEval = parseFloat(yEval[0]/yEval[1])

            if (order>0){
                // Rarest LAST
                if (xEval < yEval) {
                    shouldSwitch = true;
                    break;
                }
            } 
            else {
                // Rarest FIRST
                if (xEval > yEval) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function fillRDT(){
    // creates a <table> element and a <tbody> element
    var tblBody = document.createElement("tbody");

    // Get the combined weight of everything for later
    // Iterating the loop 2 times.. maybe don't do this at home.
    let totalWeight = 0.0;
    for (let j = 0; j < dropG.length; j += 1){
        totalWeight += parseFloat(dropG[j]["weight"])
    }
    
    // Droptable Items
    for (let j = 0; j < dropG.length; j += 1){
        var row = document.createElement("tr");
        var cell = document.createElement("td");

        // Icon Cell
        const itemIcon = document.createElement("img");
        itemIcon.src = "./img/items/" + dropG[j]["id"] + ".png"
        cell.appendChild(itemIcon);
        row.appendChild(cell)

        // Item Name Cell
        var cell = document.createElement("td");
        var cellText = document.createTextNode(itemG[dropG[j]["id"]]);
        var debugDiv = document.createElement('div');
        var debugText = document.createTextNode("id: "+dropG[j]["id"]);
        debugDiv.className = debugClass
        debugDiv.appendChild(debugText)
        cell.appendChild(cellText);
        cell.appendChild(debugDiv);
        row.append(cell)

        // Quantity
        var cell = document.createElement("td");
        if (dropG[j]["minAmt"] != dropG[j]["maxAmt"]){
            amount = dropG[j]["minAmt"] + "-" + dropG[j]["maxAmt"]
        } else {
            amount = dropG[j]["minAmt"]
        }
        var cellText = document.createTextNode(amount);
        cell.appendChild(cellText);
        row.append(cell)

        // Rarity
        let weight = parseFloat(dropG[j]["weight"])
        var cell = document.createElement("td");
        var chance = (weight/totalWeight)*100
        // Remove trailing zeros (Tried a bunch of stuff and couldn't get it out without)
        var cellText = document.createTextNode("1/"+(+parseFloat(100/chance).toFixed(2).replace(/(\.0+|0+)$/, '')));
        if (chance > 99.99){
            cell.className = "always"
        } else if (chance > 4){
            cell.className = "common"
        } else if (chance > 1) {
            cell.className = "uncommon"
        } else if (chance > 0.1){
            cell.className = "rare"
        } else {
            cell.className = "veryrare"
        }
        cell.title = parseFloat((chance).toFixed(2)) + "%"
        cell.appendChild(cellText);
        row.append(cell)

        // Append the TD items to the Row
        tblBody.appendChild(row);
    }
    if (tblBody.innerText){
        let h1 = document.createElement("h1")
        let debugDiv = document.createElement('div')
        debugDiv.className = debugClass
        var debugText = document.createElement('p');
        debugDiv.appendChild(debugText)
        table.appendChild(h1)
        table.appendChild(debugDiv)

        sortByRarity(tblBody,true)
        tblBody.addEventListener('click', function(e){
            sortTable(e)
        })

        document.getElementById("table").appendChild(tblBody)
    }
}

window.addEventListener('load', (event) => {
    async function getItemIds() {
        const response = await fetch('./json/item_config.json');
        return await response.json();
    }
    async function getDrops() {
        const response = await fetch('./json/rdt.json');
        return await response.json();
    }

    // Fetch JSONS
    function main(){
        getItemIds().then(itemJ => {itemG = itemJ})
        getDrops().then(dropJ => {dropG = dropJ})
    }
    main();

    //Loading GUI
    let counter = 0;
    let checkExist = setInterval(function () {
        if (dropG != undefined && itemG != undefined) {
            clearInterval(checkExist);
            document.getElementsByClassName("loading")[0].setAttribute("style","display:none;")
            fillRDT();
        }
        if (counter > 6)
            document.getElementsByClassName("loading")[0].setAttribute("style","display:block;")
        counter += 1;
    }, 100);

});