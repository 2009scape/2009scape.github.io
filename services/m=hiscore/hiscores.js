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
        row.childNodes[3].innerHTML = `${hiscores.getIronIcon(playerData.iron_mode)}<a href="./hiscores.html">${playerData ? hiscores.formatName(playerData.username) : ""}</a>`;
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
    fetch(`${hiscores.apiURL}/highscores/playerSkills/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            hiscores.tableData = result.skills;
            hiscores.tableInfo = result.info;
            hiscores.populatePlayerHSTable();
            hiscores.setHeadSkillText(hiscores.formatName(username, true));
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';
            console.log('error', error)
        });
}

hiscores.populatePlayerHSTable = () => {
    hiscores.setHeadSkillIcon(hiscores.tableInfo.iron_mode === "0" ? "Constitution" : "../../site/img/osrsimg/ironman.png");
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
        row.childNodes[3].innerHTML = `${hiscores.getIronIcon(playerData.iron_mode)}<a href="./hiscores.html">${playerData ? hiscores.formatName(playerData.username) : ""}</a>`;
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
