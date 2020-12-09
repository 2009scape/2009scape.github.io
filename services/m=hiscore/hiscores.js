var hiscores = hiscores || {};

hiscores.page = 0;
let currentSkillId = "";

const apiURL = "http://localhost:3000";

let tableData = [];
let defaultTableData = [];

hiscores.loadDefaultHSTable = () => {
    fetch(`${apiURL}/highscores/getPlayersByTotal`)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]);
            tableData = result;
            defaultTableData = result;
            hiscores.populateDefaultHSTable();
        })
        .catch(error => console.log('error', error));
}

hiscores.populateDefaultHSTable = () => {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = tableData[i + 24 * hiscores.page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * hiscores.page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html">${playerData ? playerData.username : ""}</a>`;
        row.childNodes[3].addEventListener("click", function (e) {
            e.preventDefault();
            hiscores.loadUserTable(playerData.username);
        });

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

hiscores.loadUserTable = (username) => {
    fetch(`${apiURL}/highscores/playerSkills/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            console.log(result[0]);
            tableData = result;
            hiscores.populatePlayerHSTable();
            document.getElementById("scores_head_skill").innerText = username + "'s ";
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';
            console.log('error', error)
        });
}

hiscores.populatePlayerHSTable = () => {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = "0";

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html">${hiscores.sName[i - 1]}</a>`;
        row.childNodes[3].addEventListener("click", e => {
            e.preventDefault();
            hiscores.loadSkillTable(i - 1);
        })

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = tableData[i - 1].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(tableData[i - 1].experience).toLocaleString();
    }
}

hiscores.loadSkillTable = (skillId) => {
    fetch(`${apiURL}/highscores/playersBySkill/${skillId}`)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]);
            tableData = result;
            currentSkillId = skillId;
            hiscores.populateSkillHSTable();
        })
        .catch(error => console.log('error', error));
}

hiscores.populateSkillHSTable = () => {
    document.getElementById("scores_head_skill").innerText = hiscores.sName[currentSkillId];
    document.getElementById("scores_head_icon").src = `../../site/img/hiscores/skill_icon_${hiscores.sName[currentSkillId].toLowerCase()}1eccb.gif`;

    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = tableData[i + 24 * hiscores.page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * hiscores.page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html">${playerData ? playerData.username : ""}</a>`;
        row.childNodes[3].addEventListener("click", function (e) {
            e.preventDefault();
            hiscores.loadUserTable(playerData.username);
        });

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

hiscores.loadDefaultHSTable();
