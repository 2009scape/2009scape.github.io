var hiscores = hiscores || {};

hiscores.apiURL = "https://4c636f485c67.ngrok.io";

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
hiscores.world = 1;
hiscores.currentSkillId = "";

hiscores.tableData = [];
hiscores.defaultTableData = [];

hiscores.linkLeftTabSkillNames = (loc = "hiscores") => {
    hiscores.sName.forEach((skill, index) => {
        row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
            e.preventDefault();
            window.location.replace(`./${loc}.html?skill=${index}${hiscores.getFiltersAsURLparams()}`);
        });
    });
    document.getElementsByClassName(`   Overall    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.linkLeftTabActivityNames = (loc = "activities") => {
    document.getElementsByClassName(`   Overall    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementsByClassName(`   Slayer    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?filter=combat${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementsByClassName(`   Summoning    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?filter=miscellaneous${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.initializePageArrows = (loc = "hiscores") => {
    document.getElementById("button-up").addEventListener("click", function (e) {
        e.preventDefault();
        if (hiscores.page > 0) {
            hiscores.page--;
        }
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/).join('');
        window.location.replace(`./${loc}.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
    document.getElementById("button-down").addEventListener("click", function (e) {
        e.preventDefault();
        hiscores.page++;
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/).join('');
        window.location.replace(`./${loc}.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
}

hiscores.initalizeRightsideButtons = (loc = "hiscores") => {
    document.getElementById("search_button").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?player=${document.getElementById('search_name').value}${hiscores.getFiltersAsURLparams()}`);
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

    document.getElementById("filter_submit").addEventListener("click", function (e) {
        e.preventDefault();
        const ironparam = `?iron=${document.getElementById('check_iron').checked}`;
        const ultironparam = `?ultiron=${document.getElementById('check_ultiron').checked}`;
        const hcironparam = `?hciron=${document.getElementById('check_hciron').checked}`;
        const maxXP = `?maxXP=${document.getElementById("maxXP").value}`;
        const world = `?world=${getParam("world")}`;
        window.location.replace(`./${loc}.html${ironparam}${ultironparam}${hcironparam}${maxXP}${world}`);
    });

    if (document.getElementById("filter_clear")) {
        // Filter clear only appears when filters are present 
        document.getElementById("filter_clear").addEventListener("click", function (e) {
            e.preventDefault();
            let pageRemovedFiltersLocation = window.location.search.split(/\?iron=[A-z]+|\?ultiron=[A-z]+|\?hciron=[A-z]+|\?maxXP=[\d\.]+/).join('');
            window.location.replace(`./${loc}.html${pageRemovedFiltersLocation}`);
        })
    }
}

hiscores.changePlaqueWorld = () => {
    document.getElementById("worldplaqueid").innerText = `World ${hiscores.world} Hiscores`;
}

hiscores.updateLegendText = () => {
    document.getElementById("worldxprate").innerText = `World ${hiscores.world} default XP rate: ${hiscores.world === 1 ? 1 : 5}x`;
}

hiscores.addSkillsAndActivityFilters = () => {
    document.getElementById("button-left").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./hiscores.html${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementById("button-right").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./activity.html${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.filter = (result) => {
    return result.filter(result => {
        // No filters
        if (!getParam("iron")) {
            return true;
        }

        if (Number(result.exp_multiplier) > Number(getParam("maxXP"))) {
            return false;
        }

        // If all ironman filters are false, show everyone (only filter by exp)
        if (getParam("iron") === "false" && getParam("ultiron") === "false" && getParam("hciron") === "false") {
            return true;
        }

        // If some ironman filters are true, only show those
        if (getParam("iron") === "true" && result.iron_mode == 1) {
            return true;
        }
        if (getParam("hciron") === "true" && result.iron_mode == 2) {
            return true;
        }
        if (getParam("ultiron") === "true" && result.iron_mode == 3) {
            return true;
        }

        return false;
    });
}

hiscores.getFiltersAsURLparams = () => {
    let params = getParam("iron") ? `?iron=${getParam("iron")}?hciron=${getParam("hciron")}?ultiron=${getParam("ultiron")}?maxXP=${getParam("maxXP")}` : "";
    params += getParam("world") ? `?world=${getParam("world")}` : "";
    return params;
}

hiscores.formatName = (name, ironStatus = 0, xpRate, aposS = false,) => {
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
    if ((getParam("world") === "1" && xpRate != 1) || (getParam("world") === "2" && xpRate != 5)) {
        return name + ` <span style="color: rgba(${Math.max(0, 80 - Math.pow(xpRate, 1.7) * 10)}, 0, 0, 0.4);">${xpRate >= 10 ? Math.round(xpRate) : xpRate}x</span>`;
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
