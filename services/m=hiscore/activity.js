var hiscores = hiscores || {};

hiscores.populateActivityTable = () => {
    row = (num) => document.getElementsByClassName(`row row${num}`)[0]; // Small wrapper that gets a row by just the row # 

    // Clear it
    for (let i = 1; i <= 24; i++) { 
        row(i).childNodes[1].replaceWith(document.createElement("td"));
        row(i).childNodes[1].className = "rankCol";
        row(i).childNodes[1].innerHTML = i;    

        row(i).childNodes[3].replaceWith(document.createElement("td"));
        row(i).childNodes[3].className = "alL";
        row(i).childNodes[3].innerHTML = "";

        row(i).childNodes[5].replaceWith(document.createElement("td"));
        row(i).childNodes[5].className = "alL";
        row(i).childNodes[5].innerHTML = "";
    }

    row(1).childNodes[3].innerHTML = "Total XP";
    fetch(`${hiscores.apiURL}/hiscores/getServerTotalXp`)
    .then(response => response.json())
    .then(result => {
        // Todo: Make the API differentiate between ironmen types and stof
        row(1).childNodes[5].innerHTML = result.total_xp;
    })
    .catch(error => console.log('error', error));

    row(2).childNodes[3].innerHTML = "Total Slayer Tasks Completed";
    fetch(`${hiscores.apiURL}/hiscores/getServerTotalSlayerTasks`)
    .then(response => response.json())
    .then(result => {
        // Todo: Make the API differentiate between ironmen types and stof
        row(1).childNodes[5].innerHTML = result.total_tasks;
    })
    .catch(error => console.log('error', error));
}

/**
 * In URL ?player=guthix, passing param "player" will return "guthix"
 * In same example, passing param "page" will return null
 */
function getParam(param) {
    param = window.location.search.split("?").find(p => {
        return p.startsWith(`${param}`);
    })
    return param ? param.split("=")[1] : null;
}

if (getParam("page")) {
    hiscores.page = Number(getParam("page"));
}

if (getParam("iron")) {
    document.getElementById('check_iron').checked = getParam("iron") === "true";

    document.getElementById("filter_submit").value = "Filter";
    document.getElementById("filter_div").style.height = "134px";
    // Add disable button
    document.getElementById("filter_clear_div").innerHTML = `<input id="filter_clear" type="submit" name="submit" class="buttonmedium" value="Clear" style="margin-top: 2px;">`
} else {
    document.getElementById("filter_clear_div").innerHTML = "";
    // Change width to 134 minus button size
    document.getElementById("filter_div").style.height = "110px";
}
if (getParam("ultiron")) {
    document.getElementById('check_ultiron').checked = getParam("ultiron") === "true";
}
if (getParam("hciron")) {
    document.getElementById('check_hciron').checked = getParam("hciron") === "true";
}
if (getParam("maxXP")) {
    document.getElementById('maxXP').value = getParam("maxXP");
    document.getElementById('maxXPoutput').innerHTML = getParam("maxXP");
}


hiscores.initializePageArrows();
hiscores.initalizeRightsideButtons();
hiscores.populateActivityTable();