var hiscores = hiscores || {};

let activityInfo = [];

hiscores.populateActivityTable = () => {
    row = (num) => document.getElementsByClassName(`row row${num}`)[0]; // Small wrapper that gets a row by just the row # 

    // Clear it
    for (let i = 1; i <= 24; i++) {
        row(i).childNodes[1].replaceWith(document.createElement("td"));
        row(i).childNodes[1].className = "rankCol";
        row(i).childNodes[1].innerHTML = i;

        row(i).childNodes[3].replaceWith(document.createElement("td"));
        row(i).childNodes[3].className = "alL";
        row(i).childNodes[3].innerHTML = "";

        row(i).childNodes[5].replaceWith(document.createElement("td"));
        row(i).childNodes[5].className = "alL";
        row(i).childNodes[5].innerHTML = "";
    }

    // (Used to make all the amounts update at once)
    let leftToLoad = activityInfo.length;
    let toAppear = [];
    function syncAppear(element, value) {
        leftToLoad --;
        toAppear.push([element, value]);
        console.log(leftToLoad);
        if (leftToLoad === 0) {
            toAppear.forEach(([e, value]) => {
                e.innerHTML = value;
            });
        }
    }

    // For everything on this page (see the filter? in URL)
    activityInfo.forEach(([title, endpoint, resultAttr], index) => {
        row(index + 1).childNodes[3].innerHTML = title;
        row(index + 1).childNodes[5].innerHTML = `<span style="color: rgba(186, 128, 63, 0.4);">Loading..</span>`;
        // Fetch it, then put it in our synchronous appearance function
        fetch(`${hiscores.apiURL}/hiscores/${endpoint}/${restrictions}`)
            .then(response => response.json())
            .then(result => { 
                syncAppear(row(index + 1).childNodes[5], Math.floor(result[`${resultAttr}`]).toLocaleString());
            })
            .catch(error => console.log('error', error));
    });
}

hiscores.enterTotalXp = () => {
    fetch(`${hiscores.apiURL}/hiscores/getWorldTotalXp/${hiscores.world}/${restrictions}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById("total_xp").innerText = "Server Total XP: " + Math.round(result.total_xp).toLocaleString();
            document.getElementById("total_xp").style.opacity = "1";
        })
        .catch(error => console.log('error', error));
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

let restrictions = { ironManMode: [], exp_multiplier: 10 };

if (getParam("world")) {
    hiscores.world = Number(getParam("world"));
}
if (getParam("page")) {
    hiscores.page = Number(getParam("page"));
}

if (getParam("iron")) {
    document.getElementById('check_iron').checked = getParam("iron") === "true";
    restrictions.ironManMode.push(getParam("iron") === "true" ? "1" : "0");

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
    restrictions.ironManMode.push(getParam("ultiron") === "true" ? "3" : "0");
    document.getElementById('check_ultiron').checked = getParam("ultiron") === "true";
}
if (getParam("hciron")) {
    restrictions.ironManMode.push(getParam("hciron") === "true" ? "2" : "0");
    document.getElementById('check_hciron').checked = getParam("hciron") === "true";
}
if (getParam("maxXP")) {
    restrictions.exp_multiplier = Number(getParam("maxXP"));

    document.getElementById('maxXP').value = getParam("maxXP");
    document.getElementById('maxXPoutput').innerHTML = getParam("maxXP");
}
switch (getParam("filter")) {
    case "combat":
        document.getElementById("scores_head_skill").innerText = "Combat";
        activityInfo.push(["Total Slayer Tasks Completed", `getWorldTotalSlayerTasks/${hiscores.world}`, "total_tasks"]);
        activityInfo.push(["Total Enemies Killed", `getWorldTotalAttribute/${hiscores.world}/enemies_killed`, "sum"]);
        activityInfo.push(["Total Deaths", `getWorldTotalAttribute/${hiscores.world}/deaths`, "sum"]);
        break;
    case "miscellaneous":
        document.getElementById("scores_head_skill").innerText = "Miscellaneous";
        activityInfo.push(["Total Al Kharid Gate Tax", `getWorldTotalAttribute/${hiscores.world}/alkharid_gate`, "sum"]);
        break;
    default: // Skilling
        activityInfo.push(["Total Logs Chopped", `getWorldTotalAttribute/${hiscores.world}/logs_chopped`, "sum"]);
        activityInfo.push(["Total Fish Caught", `getWorldTotalAttribute/${hiscores.world}/fish_caught`, "sum"]);
        activityInfo.push(["Total Rocks Mined", `getWorldTotalAttribute/${hiscores.world}/rocks_mined`, "sum"]);
        break;
}


restrictions = JSON.stringify(restrictions);

hiscores.linkLeftTabActivityNames("activity");
hiscores.initializePageArrows("activity");
hiscores.initalizeRightsideButtons("activity");
hiscores.populateActivityTable("activity");
hiscores.enterTotalXp();
hiscores.changePlaqueWorld();
hiscores.updateLegendText();
hiscores.addSkillsAndActivityFilters();