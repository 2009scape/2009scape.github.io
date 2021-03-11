var hiscores = hiscores || {};

hiscores.loadDefaultHSTable = () => {
    fetch(`${hiscores.apiURL}/hiscores/playersByTotal/${hiscores.world}`)
        .then(response => response.json())
        .then(result => {
            result = hiscores.filter(result);
            hiscores.tableData = result;
            hiscores.defaultTableData = result;
            hiscores.populateDefaultHSTable();
        })
        .catch(error => console.log('error', error));
}

hiscores.populateDefaultHSTable = () => {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = hiscores.tableData[i + 24 * hiscores.page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * hiscores.page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html${playerData ? "?player=" + playerData.username : ""}${hiscores.getFiltersAsURLparams()}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

hiscores.loadUserTable = (username) => {
    username = username.split("%20").join(" ");
    fetch(`${hiscores.apiURL}/hiscores/playerSkills/${hiscores.world}/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            hiscores.tableData = result.skills;
            hiscores.tableInfo = result.info;
            hiscores.populatePlayerHSTable();
            hiscores.setHeadSkillText(hiscores.formatName(username, 0, result.info.exp_multiplier, true));
        })
        .then(() => {
            // Now get the player ranks (done seperately)
            fetch(`${hiscores.apiURL}/hiscores/rankedMap/${hiscores.world}`)
                .then(response => response.json())
                .then(result => {
                    hiscores.populatePlayerRanks(username, result);
                })
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';            
            document.getElementById('search_name').value = 'Player not found!';
            console.log('error', error);
        });
}

hiscores.populatePlayerHSTable = () => {
    switch (Number(hiscores.tableInfo.iron_mode)) {
        case 1:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/ironman.png");
            break;
        case 2:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/hcim.png");
            break;
        case 3:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/ultimateironman.png");
            break;
        default:
            hiscores.setHeadSkillIcon("Constitution");
    }

    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = "";

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?skill=${i - 1}${hiscores.getFiltersAsURLparams()}">${hiscores.sName[i - 1]}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = hiscores.tableData[i - 1].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(hiscores.tableData[i - 1].experience).toLocaleString();
    }
}

hiscores.populatePlayerRanks = (username, result) => {
    username = username.split(" ").join("_");
    for (let i = 1; i <= 24; i++) {
        result[i - 1] = hiscores.filter(result[i - 1]);
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        let rank = (result[i - 1].findIndex(player => player.username.toLowerCase() === username.toLowerCase()) + 1)
        row.childNodes[1].innerHTML = rank ? rank : `<span style="color: rgba(158, 144, 47, 0.5);">Unranked</span>`;
    }
}

hiscores.loadSkillTable = (skillId) => {
    fetch(`${hiscores.apiURL}/hiscores/playersBySkill/${hiscores.world}/${skillId}`)
        .then(response => response.json())
        .then(result => {
            result = hiscores.filter(result);
            hiscores.tableData = result;
            hiscores.currentSkillId = skillId;
            hiscores.populateSkillHSTable();
        })
        .catch(error => console.log('error', error));
}

hiscores.populateSkillHSTable = () => {
    hiscores.setHeadSkillText(hiscores.sName[hiscores.currentSkillId]);
    hiscores.setHeadSkillIcon(hiscores.sName[hiscores.currentSkillId]);

    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = hiscores.tableData[i + 24 * hiscores.page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * hiscores.page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?player=${playerData.username}${hiscores.getFiltersAsURLparams()}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
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

if (getParam("world")) {
    hiscores.world = Number(getParam("world"));
}
if (getParam("page")) {
    hiscores.page = Number(getParam("page"));
}

if (getParam("skill")) {
    hiscores.loadSkillTable(getParam("skill"));
} else if (getParam("player")) {
    hiscores.loadUserTable(getParam("player"));
} else {
    hiscores.loadDefaultHSTable();
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
hiscores.linkLeftTabSkillNames();
hiscores.changePlaqueWorld();
hiscores.updateLegendText();
hiscores.addSkillsAndActivityFilters();