var REQUIRE = REQUIRE || {};
REQUIRE.sName = [
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

REQUIRE.linkLeftTabSkillNames = () => {
    REQUIRE.sName.forEach((skill, index) => {
        row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
            e.preventDefault();
            console.log(skill, index);
            loadSkillTable(index);
        });
    });
}