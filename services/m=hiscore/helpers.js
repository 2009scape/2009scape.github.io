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


hiscores.page = 0;
hiscores.currentSkillId = "";

hiscores.apiURL = "http://api.2009scape.org:3000";

hiscores.tableData = [];
hiscores.defaultTableData = [];

hiscores.linkLeftTabSkillNames = () => {
    hiscores.sName.forEach((skill, index) => {
        row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
            hiscores.page = 0;
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
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/)[0];
        window.location.replace(`./hiscores.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
    document.getElementById("button-down").addEventListener("click", function (e) {
        e.preventDefault();
        hiscores.page++;
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/)[0];
        window.location.replace(`./hiscores.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
}

hiscores.initalizeRightsideButtons = () => {
    document.getElementById("search_button").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./hiscores.html?player=${document.getElementById('search_name').value}`);
    });

    document.getElementById("search_rank_submit").addEventListener("click", function (e) {
        e.preventDefault();
        if (document.getElementById('search_rank').value) {
            hiscores.loadUserTable(hiscores.defaultTableData[document.getElementById('search_rank').value - 1].username)
            hiscores.setHeadSkillText(hiscores.defaultTableData[document.getElementById('search_rank').value - 1].username + "'s ");
        }
        else {
            hiscores.loadDefaultHSTable();
        }
    });
}

hiscores.formatName = (name, ironStatus = 0, xpRate = 10, aposS = false,) => {
    name = name.replaceAll("_", " ");
    name = name.replace(/(^\w|\s\w)/g, match => match.toUpperCase()); // Capitalize first letter of each word
    if (aposS) {
        if (!name.endsWith('s')) {
            name += "'s";
        } else {
            name += "'";
        }
    }

    name = hiscores.getIronIcon(ironStatus) + name;
    if (xpRate != 10) {
        return name + ` <span style="color: rgba(${Math.max(0, 50 - Math.pow(xpRate, 1.7) * 10)}, 0, 0, 0.4);">${xpRate > 10 ? Math.round(xpRate) : xpRate}x</span>`;
    }
    return name;
}

hiscores.setHeadSkillIcon = (icon) => {
    if (icon.includes(".")) {
        document.getElementById("scores_head_icon").src = icon;
    } else {
        document.getElementById("scores_head_icon").src = `../../site/img/hiscores/skill_icon_${icon.toLowerCase()}1eccb.gif`;
    }
}

hiscores.setHeadSkillText = (text) => {
    document.getElementById("scores_head_skill").innerHTML = text;
}

hiscores.getIronIcon = (ironStatus) => {
    switch (ironStatus) {
        case "1":
        case 1:
            return `<img src="../../site/img/osrsimg/ironman.png" style="height: 11px"> `;
        case "2":
        case 2:
            return `<img src="../../site/img/osrsimg/hcim.png" style="height: 11px"> `;
        case "3":
        case 3:
            return `<img src="../../site/img/osrsimg/ultimateironman.png" style="height: 11px"> `;
        default:
            return "";
    }
}
