let page = 0;

const apiURL = "http://localhost:3000";

let tableData = [];

fetch(`${apiURL}/highscores/getPlayersByTotal`)
    .then(response => response.json())
    .then(result => {
        console.log(result[0]);
        tableData = result;
        populateDefaultHSTable();
    })
    .catch(error => console.log('error', error));

function populateDefaultHSTable() {
    for (let i = 1; i <= 22; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        const playerData = tableData[i + 22 * page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 22 * page;

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
    fetch(`${apiURL}/highscores/playerSkills/${username}`)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]);
            tableData = result;
            populatePlayerHSTable();
        })
        .catch(error => console.log('error', error));
}

function populatePlayerHSTable() {
    for (let i = 1; i <= 22; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = 0; //`sName[${i + 22 * page}]`;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `rankCompared`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = tableData[i].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(tableData[i].experience).toLocaleString();
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

populateDefaultHSTable();