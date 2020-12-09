let page = 0;
let currentSkillId = "";

const apiURL = "http://localhost:3000";
const sName = [
    "Attack",
    "Defence",
    "Strength",
    "Constitution",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecrafting",
    "Hunter",
    "Construction",
    "Summoning"
]

let tableData = [];

function loadDefaultHSTable() {
    fetch(`${apiURL}/highscores/getPlayersByTotal`)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]);
            tableData = result;
            populateDefaultHSTable();
        })
        .catch(error => console.log('error', error));
}

function populateDefaultHSTable() {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = tableData[i + 24 * page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html">${playerData ? playerData.username : ""}</a>`;
        row.childNodes[3].addEventListener("click", function (e) {
            e.preventDefault();
            loadUserTable(playerData.username);
        });

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

function loadUserTable(username) {
    fetch(`${apiURL}/highscores/playerSkills/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            console.log(result[0]);
            tableData = result;
            populatePlayerHSTable();
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';
            console.log('error', error)
        });
}

function populatePlayerHSTable() {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = "0";

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = sName[i + 24 * page - 1];

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = tableData[i - 1].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(tableData[i - 1].experience).toLocaleString();
    }
}

function loadSkillTable(skillId) {
    fetch(`${apiURL}/highscores/playersBySkill/${skillId}`)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]);
            tableData = result;
            currentSkillId = skillId;
            populateSkillHSTable();
        })
        .catch(error => console.log('error', error));
}

function populateSkillHSTable() {
    document.getElementById("scores_head_skill").innerText = sName[currentSkillId];
    document.getElementById("scores_head_icon").src = `../../site/img/hiscores/skill_icon_${sName[currentSkillId].toLowerCase()}1eccb.gif`;
    
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = tableData[i + 24 * page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html">${playerData ? playerData.username : ""}</a>`;
        row.childNodes[3].addEventListener("click", function (e) {
            e.preventDefault();
            loadUserTable(playerData.username);
        });

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

// Handle page arrows
document.getElementById("button-up").addEventListener("click", function (e) {
    e.preventDefault();
    if (page > 0) {
        page--;
    }
    populateDefaultHSTable();
});
document.getElementById("button-down").addEventListener("click", function (e) {
    e.preventDefault();
    page++;
    populateDefaultHSTable();
});

// Handle text field buttons
document.getElementById("search_button").addEventListener("click", function (e) {
    e.preventDefault();
    if (document.getElementById('search_name').value) {
        loadUserTable(document.getElementById('search_name').value)
    }
    else {
        loadDefaultHSTable();
    }
});

// Handle Skill Names
sName.forEach((skill, index) => {
    row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        console.log(skill, index);
        loadSkillTable(index);
    });
});


loadDefaultHSTable();
