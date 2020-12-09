var hiscores = hiscores || {};
hiscores.sName = [
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

hiscores.linkLeftTabSkillNames = () => {
    hiscores.sName.forEach((skill, index) => {
        row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
            e.preventDefault();
            console.log(skill, index);
            hiscores.loadSkillTable(index);
        });
    });
}

hiscores.initializePageArrows = () => {
    document.getElementById("button-up").addEventListener("click", function (e) {
        e.preventDefault();
        if (hiscores.page > 0) {
            hiscores.page--;
        }
        hiscores.populateDefaultHSTable();
    });
    document.getElementById("button-down").addEventListener("click", function (e) {
        e.preventDefault();
        hiscores.page++;
        hiscores.populateDefaultHSTable();
    });
}

hiscores.initalizeRightsideButtons = () => {
    document.getElementById("search_button").addEventListener("click", function (e) {
        e.preventDefault();
        if (document.getElementById('search_name').value) {
            hiscores.loadUserTable(document.getElementById('search_name').value)
        }
        else {
            hiscores.loadDefaultHSTable();
        }
    });

    document.getElementById("search_rank_submit").addEventListener("click", function (e) {
        e.preventDefault();
        if (document.getElementById('search_rank').value) {
            hiscores.loadUserTable(defaultTableData[document.getElementById('search_rank').value - 1].username)
            document.getElementById("scores_head_skill").innerText = defaultTableData[document.getElementById('search_rank').value - 1].username + "'s ";
        }
        else {
            hiscores.loadDefaultHSTable();
        }
    });
}