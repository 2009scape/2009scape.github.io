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
    row(1).childNodes[5].innerHTML = `<span style="color: rgba(186, 128, 63, 0.4);">Loading..</span>`;
    fetch(`${hiscores.apiURL}/hiscores/getServerTotalXp/${restrictions}`)
        .then(response => response.json())
        .then(result => {
            row(1).childNodes[5].innerHTML = Math.floor(result.total_xp).toLocaleString();
        })
        .catch(error => console.log('error', error));

    row(2).childNodes[3].innerHTML = "Total Slayer Tasks Completed";
    row(2).childNodes[5].innerHTML = `<span style="color: rgba(186, 128, 63, 0.4);">Loading..</span>`;
    fetch(`${hiscores.apiURL}/hiscores/getServerTotalSlayerTasks/${restrictions}`)
        .then(response => response.json())
        .then(result => {
            row(2).childNodes[5].innerHTML = Math.floor(result.total_tasks).toLocaleString();
        })
        .catch(error => console.log('error', error));

    row(3).childNodes[3].innerHTML = "Total Deaths";
    row(3).childNodes[5].innerHTML = `<span style="color: rgba(186, 128, 63, 0.4);">Loading..</span>`;
    fetch(`${hiscores.apiURL}/hiscores/getServerTotalAttribute/deaths/${restrictions}`)
        .then(response => response.json())
        .then(result => {
            row(3).childNodes[5].innerHTML = Math.floor(result.sum).toLocaleString();
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

let restrictions = { ironManMode: [], exp_multiplier: 10 };

if (getParam("page")) {
    hiscores.page = Number(getParam("page"));
}

if (getParam("iron")) {
    document.getElementById('check_iron').checked = getParam("iron") === "true";
    restrictions.ironManMode.push(getParam("iron") === "true" ? "1" : "0");

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
    restrictions.ironManMode.push(getParam("ultiron") === "true" ? "3" : "0");
    document.getElementById('check_ultiron').checked = getParam("ultiron") === "true";
}
if (getParam("hciron")) {
    restrictions.ironManMode.push(getParam("hciron") === "true" ? "2" : "0");
    document.getElementById('check_hciron').checked = getParam("hciron") === "true";
}
if (getParam("maxXP")) {
    restrictions.exp_multiplier = Number(getParam("maxXP"));

    document.getElementById('maxXP').value = getParam("maxXP");
    document.getElementById('maxXPoutput').innerHTML = getParam("maxXP");
}

restrictions = JSON.stringify(restrictions);

hiscores.initializePageArrows("activity");
hiscores.initalizeRightsideButtons("activity");
hiscores.populateActivityTable("activity");