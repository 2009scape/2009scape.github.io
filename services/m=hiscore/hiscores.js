let page = 0;

function populateHSTable() {
    for (let i = 1; i <= 22; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = "PlayerName";

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = "Level";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = "XP,XP";
    }
}


// Handle page arrows
document.getElementById("button-up").addEventListener("click", function (e) {
    e.preventDefault();
    if (page > 0) {
        page--;
    }
    populateHSTable();
});
document.getElementById("button-down").addEventListener("click", function (e) {
    e.preventDefault();
    page++;
    populateHSTable();
});

populateHSTable();