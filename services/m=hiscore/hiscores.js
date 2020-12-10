var hiscores = hiscores || {};

hiscores.loadDefaultHSTable = () => {
    fetch(`${hiscores.apiURL}/highscores/playersByTotal`)
        .then(response => response.json())
        .then(result => {
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
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?player=${playerData.username}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

hiscores.loadUserTable = (username) => {
    fetch(`${hiscores.apiURL}/highscores/playerSkills/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            hiscores.tableData = result.skills;
            hiscores.tableInfo = result.info;
            hiscores.populatePlayerHSTable();
            hiscores.setHeadSkillText(hiscores.formatName(username, 0, result.info.exp_multiplier, true));
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';
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
        row.childNodes[1].innerHTML = "0";

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?skill=${i - 1}">${hiscores.sName[i - 1]}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = hiscores.tableData[i - 1].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(hiscores.tableData[i - 1].experience).toLocaleString();
    }
}

hiscores.loadSkillTable = (skillId) => {
    fetch(`${hiscores.apiURL}/highscores/playersBySkill/${skillId}`)
        .then(response => response.json())
        .then(result => {
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
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?player=${playerData.username}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

hiscores.initializePageArrows();
hiscores.initalizeRightsideButtons();
hiscores.linkLeftTabSkillNames();

/**
 * In URL ?player=guthix, passing param "player" will return "guthix"
 * In same example, passing param "page" will return null
 */
function getParam(param) {
    console.log("Looking for param " + param);
    param = window.location.search.split("?").find(p => {
        console.log("Returning " + p.startsWith(`?${param}`) + " for " + p);
        return p.startsWith(`${param}`);
    })
    return param ? param.split("=")[1] : null;
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