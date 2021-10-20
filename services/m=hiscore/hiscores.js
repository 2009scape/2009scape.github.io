var hiscores = hiscores || {};

var usersToSquash = [
    "nostalgianon",
    "s",
    "ducky",
    "swiperighttt",
    "f00b",
    "trevor_10x",
    "secktor",
    "moukanubi",
    "perfect",
    "dad",
    "shiver",
    "xexani",
    "greatpeepo",
    "dome_v2",
    "to_the_moon",
    "alex",
    "the_somalian",
    "atla",
    "shay",
    "hc_nix",
    "mewtt",
    "hc_bean",
    "nips",
    "bellful",
    "ryo",
    "bean",
    "luis",
    "jakey_m",
    "sia",
    "chernobyl",
    "von_hresvelg",
    "rokyen",
    "ray73",
    "jamix77",
    "death",
    "nemo125",
    "nobodyclp",
    "skeglord",
    "twistedmindz",
    "daniella",
    "boyd",
    "ancient",
    "lord0zeref",
    "charonchaos",
    "20",
    "findinggmo",
    "goon",
    "nuggles",
    "w_of_ww_only",
    "gman",
    "duck",
    "garoozis",
    "caviel",
    "gernum",
    "verac_obama",
    "cddc",
    "skittles",
    "damian",
    "bumboozler",
    "dudebro",
    "danbi",
    "reaper",
    "matthew",
    "sudoku",
    "carrot182",
    "hanskrebs",
    "stinkyshit",
    "von_kaiser",
    "poopstain",
    "snickerize",
    "mcfeels",
    "annie",
    "generolas121",
    "metaphor",
    "ventuzz",
    "unrealhaze",
    "effie_lyra_w",
    "jack_hack",
    "bodhisattva",
    "kiwi",
    "frogger",
    "notkarl",
    "kalessin",
    "macpoopum",
    "totulotu",
    "toxic",
    "amanitagreen",
    "you",
    "johnson",
    "ima_skiller",
    "piga",
    "powder",
    "annoyedsin",
    "polynesia",
    "zilz",
    "nik2u",
    "dmvox",
    "moonga",
    "mony",
    "iron_pain",
    "partyharder",
    "gracey",
    "superlich",
    "killercat564",
    "ardthesheep",
    "cabbagegod",
    "rabbit_juice",
    "slyyjacob",
    "stepzina4",
    "redsparr0w",
    "flegflog",
    "yrjontr",
    "davis",
    "kashuab",
    "legend",
    "slow_x20_im",
    "stardust",
    "mnms",
    "oneda",
    "mrslayer02",
    "trance",
    "jacklemonade",
    "krethis",
    "ligmardi",
    "justhaze",
    "thejewbear",
    "cap_kouhai",
    "1989",
    "sc0rz",
    "rank_2025",
    "fire_g0d_10",
    "vamz",
    "sangramoire",
    "exodia",
    "trail_blazer",
    "corrupt_emi",
    "ghostboytech",
    "pirie",
    "viskag",
    "test13",
    "don_deco",
    "jazzhand",
    "mycaiah",
    "cooldude0027",
    "dragonslayer",
    "nintendo_swe",
    "emarswish",
    "clickedez",
    "horgh",
    "salt",
    "blake",
    "umbravir",
    "eelis152",
    "mom",
    "orange_cat",
    "rinblade",
    "stopzera",
    "whisper",
    "kitb",
    "zakruise",
    "romaris",
    "pv",
    "cape",
    "avex",
    "trashmane",
    "nausicaa",
    "darkrainnn",
    "nix",
    "gains",
    "sagat",
    "amizez",
    "tbeddict",
    "star_alt3",
    "star_alt2",
    "sloweasymode",
    "shoopidawoop",
    "star_alt",
    "maugel",
    "jacob",
    "funny_rocks",
    "joaquin",
    "thorim608",
    "asembu",
    "nutmeg97",
    "i_skill_i",
    "spicy_mayo",
    "venser",
    "von_haar",
    "tinoforprez",
    "phale",
    "reesespieces",
    "destroy",
    "johnhaul",
    "legtastic",
    "not_a_bot",
    "travesty",
    "althaltariel",
    "druid",
    "clock",
    "wot",
    "pebol_ii",
    "rob_boss",
    "heckler",
    "celty",
    "bossman",
    "speedy_click",
    "real_red_uim",
    "polygoner",
    "escanaba",
    "azzuran",
    "the_frog",
    "smag",
    "iprax23",
    "nordika",
    "fearless",
    "mike_kummer",
    "slow_x10",
    "ontario",
    "odinn",
    "eximalis",
    "colovian",
    "no_u",
    "dansk_mjod",
    "akaprestonn",
    "runey",
    "nice",
    "dark_drift7",
    "bohemia60",
    "silverfish",
    "wildyjoe",
    "crisp",
    "gordie",
    "aluminumpp",
    "jegernorsk63",
    "amber",
    "edd",
    "dark98",
    "brownbricks",
    "dylan",
    "imouto",
    "holy_paladin",
    "bailey",
    "wirvyn",
    "sudds",
    "suitsa",
    "xamotdaor",
    "janglados",
    "happybell",
    "dino",
    "cronic",
    "larabeast",
    "raza",
    "test12",
    "windstryde",
    "luciano",
    "anton",
    "happybellhr",
    "goonv2",
    "undercover",
    "boop",
    "slow_x10_im",
    "mei",
    "trash_comics",
    "danheim",
    "b0om_bo0m",
    "mrbig",
    "nikita",
    "maint",
    "samham",
    "dream_desire",
    "slow_x20_uim",
    "o_valhalla",
    "indicator",
    "bigpengi",
    "nickj",
    "bfunny",
    "hexa408",
    "godwarskills",
    "sanderpro12",
    "hegapm",
    "julien03",
    "von_sirius",
    "not_stonkz",
    "where",
    "pleco",
    "wrekyoas",
    "insanity",
    "oliveoyl",
    "danewolf",
    "bustinanut",
    "aethus",
    "paru",
    "manga",
    "skryllz",
    "scaperman",
    "lovetehpanda",
    "xavim2000",
    "thealtalt2",
    "c0nello",
    "thealtalt",
    "squirrelly",
    "nortan",
    "chlex_superb",
    "mohawkscape",
    "notfishing",
    "camsao",
    "ana_rchy",
    "miuzore",
    "von_karma",
    "stoney",
    "biel1337",
    "forrest",
    "thierry",
    "eddy",
    "beauty",
    "rune_arrow",
    "bakehoven",
    "kaiser",
    "doneforever",
    "lowattacker",
    "zevalt",
    "icthlarin",
    "negus",
    "nostalgia",
    "calamity",
    "johnnyomm",
    "i2legit",
    "poop",
    "k1",
    "normee",
    "pyrrhonius",
    "musaaltariel",
    "carlos1",
    "schnee",
    "skecherrs",
    "amaxroma",
    "dungeon",
    "cuzudo",
    "pakatoke",
    "zorbon",
    "amelia",
    "h2okevin",
    "rynestone",
    "tacomunchies",
    "voxel",
    "cheesyonion",
    "mm",
    "xdbcrazyx",
    "011",
    "yberoqq",
    "iron_skald",
    "arrowhaze",
    "gold_farmer",
    "inject_soap",
    "silverhaze",
    "ptn",
    "ox_gen",
    "rothschild",
    "general",
    "a_stoat",
    "gnome",
    "euphoric",
    "q",
    "peepo",
    "elite_3",
    "tom123",
    "suul",
    "nostalgiaowo",
    "vetrropog",
    "kit_bee",
    "stinkmeaner",
    "lilith",
    "boots_boy",
    "quadzilla",
    "carlos",
    "98_fishing",
    "hunter",
    "markr25",
    "tobyman21",
    "jagex_mod",
    "not_josh",
    "iron_gan",
    "maxmani",
    "hero",
    "seako",
    "van_dyke",
    "nukem_dukem",
    "amina",
    "jonpin",
    "cloudkicker",
    "bigsnakeman1",
    "bridge",
    "tysonkush",
    "h",
    "lolberries",
    "kennakat5",
    "christoph",
    "brohan",
    "turtle",
    "tyhigh",
    "henkfreek",
    "esus",
    "edgewildonly",
    "bilburn",
    "schmittyboi",
    "blastedt",
    "harding",
    "log1legend",
    "nix_wigton",
    "hc_huojin",
    "1001crafter",
    "log_legend",
    "skillers_pr0",
    "xsinner",
    "lycius",
    "influences",
    "pazaz",
    "iron_arrow",
    "scoutpilgrim",
    "magerino",
    "lucaso",
    "testaccount",
    "slayeronly",
    "fig_bar",
    "cb",
    "ed",
    "bean3",
    "2009bush",
    "bean2",
    "kyrathir",
    "shiver2",
    "tatennis",
    "two4one",
    "99problems",
    "95",
    "espartacus_g",
    "gengar",
    "levi",
    "white_phat",
    "gloopster",
    "stephen",
    "kami",
    "cooldude0029",
    "freshpaka",
    "woodtracts",
    "cronky",
    "effie_lyra",
    "kiop",
    "brohans",
    "dodian",
    "bytecode",
    "aurora",
    "yami_yugi",
    "luxio",
    "nemo2",
    "glassy",
    "yio",
    "cat",
    "newmanowns",
    "iamdie",
    "rolling11",
    "chadathan",
    "repka",
    "iron_ragnar",
    "bionicrabbit",
    "huojin",
    "nemo",
    "fatscape",
    "einlanzer",
    "dude",
    "quester",
    "the_chopper",
    "the_cutter",
    "the_chipper",
    "hyplink",
    "alma",
    "paka1",
    "khnum",
    "beez120",
    "mashi2",
    "arwatp1",
    "iron_dog",
    "camdom35",
    "unclemarkush",
    "hetnim",
    "huge_trap",
    "the_splitter",
    "whatdo22",
    "alfadhir",
    "luke",
    "4fun",
    "boink",
    "myskilleracc",
    "smd",
    "vallohr",
    "dexter",
    "luuck2009",
    "wizard",
    "barrowruns",
    "e2hu9rfhu",
    "vanity",
    "daniel",
    "brendon",
    "peacheater",
    "ray_getard",
    "koala",
    "walnut97",
    "nosythsub",
    "winter",
    "advaita",
    "norgg",
    "lil_alt",
    "exi",
    "tyson",
    "smoothpaka",
    "niflheim",
    "rotten_sushi",
    "steelaxepro",
    "mining",
    "basedzore",
    "sudokue",
    "orochimaru",
    "freakthe",
    "nap",
    "ballsack",
    "kuris",
    "soshi",
    "charlie",
    "wendigo",
    "qwerty123",
    "ainsvillain",
    "adelmar",
    "mutimir",
    "ffresh",
    "garak_korgh",
    "r0binxh00d1",
    "ziosky",
    "sarah",
    "red_uim",
    "fishing",
    "contracts",
    "why_banned",
    "o",
    "str99f2p",
    "skill",
    "fork_lickers",
    "lee",
    "one_eye_god",
    "xmckennax",
    "elvryn",
    "smaggy",
    "neymar",
    "shy",
    "rob",
    "scizor",
    "cpfuzzy",
    "matest",
    "jonch",
    "cherry",
    "ggrrr2",
    "ogun",
    "shane",
    "react415",
    "natte_oma",
    "133755",
    "justin",
    "trypta",
    "y_t",
    "jetox",
    "casio",
    "sugma",
    "skiller119",
    "iphone_11",
    "test22",
    "mote_plox",
    "9",
    "chang",
    "autismcure",
    "ardipk",
    "hardcore_btw",
    "jakey",
    "felipe",
    "uim_pure",
    "2020scape",
    "fury",
    "xanxs",
    "devvo",
    "bearstew",
    "assalat3",
    "zerinha",
    "robbo44",
    "pumpkin",
    "4",
    "awwwman55",
    "a_a",
    "darks_bot_1",
    "the_man",
    "metasploit",
    "burry",
    "colby",
    "weed",
    "ardyk",
    "121jiggawatt",
    "irontyguy",
    "tylerbeg",
    "mrmaqic",
    "sslaptnhablh",
    "coreyy",
    "cjzl",
    "rudi",
    "dragonfire",
    "pixies",
    "brapfam",
    "kaymokay",
    "dropgo",
    "marijuanaman",
    "nitrocrate",
    "e",
    "corey",
    "saltyboi",
    "enricks",
    "runeshark",
    "breez",
    "pacatoke",
    "frog_king",
    "alt",
    "relliksar",
    "he_man",
    "necrophiliac",
    "lucky",
    "kebab",
    "rsb",
    "ember_sparks",
    "charmander",
    "manic",
    "lucas",
    "teajae",
    "dickhead",
    "gnomekid",
    "behelit",
    "henkie_v2",
    "the_cunt",
    "mehmet",
    "patrickbuit",
    "tysonbush415",
    "totalnoob",
    "dicksinme",
    "rainer_cx",
    "bepis_man",
    "aphelios",
    "beelax",
    "cole123",
    "draconyx",
    "lomax",
    "mommy",
    "mizery",
    "crime",
    "boots",
    "bobertp",
    "climjark",
    "all_father",
    "roaq",
    "coolguy",
    "daruom",
    "drakan",
    "fagmin2",
    "saradomin",
    "picahuss",
    "rockmunch",
    "cumtown",
    "whosthatpkmn",
    "megaox",
    "killbill42",
    "slayerz554",
    "peter",
    "mans",
    "warning",
    "saints1098",
    "king",
    "zyris_krith",
    "aksls",
    "reniferek",
    "fukinwanker",
    "guibibi",
    "nemural",
    "vitobambino",
    "drewdog",
    "sav",
    "latterdays",
    "plushy",
    "bubz",
    "mistborn",
    "snowdropzzz",
    "whittle91",
    "atsevrot",
    "big_sexy",
    "daddy",
    "thisgocrazy",
    "i3lacklisted",
    "gorilla_nuts",
    "snowy",
    "hehehe",
    "aswan8920",
    "deion",
    "skillerz",
    "player_2568",
    "123456",
    "adeon",
    "aspect",
    "bit_decay",
    "blastys",
    "blue_hween",
    "bored",
    "botscape00",
    "bursts",
    "bush",
    "cam",
    "cccccccv",
    "cheesyboy",
    "chim",
    "deathatlas2",
    "fe_mortem",
    "firstshotrio",
    "future",
    "green_hween",
    "green_phat",
    "half_duck",
    "ifigzz",
    "insertname",
    "iron_clumpsy",
    "iron_man",
    "jawarrior",
    "kaiser_kevin",
    "krillx",
    "kristoff",
    "kz4",
    "lone",
    "mohawk",
    "mr_rogue",
    "nijouh1",
    "pringles",
    "rank_300",
    "ronpaul",
    "rook",
    "rune",
    "sir_vant",
    "smokeda_weed",
    "tevil",
    "therealone",
    "trade",
    "tyson554",
    "varoon20",
    "vonswa",
    "w1cked",
    "woodiea",
    "xileon",
    "yellow_phat",
    "zenarith",
    "zetrunight",
    "zilos",
    "zoey"
]

function proxyUnsquashed(proxyData,result){
    for (let i = 0; i < Object.keys(result).length; i += 1) {
        // If a user logs in they will have their exp_multiplier set to 5.0 so we don't need to proxy them.
        if (usersToSquash.indexOf(result[i].username) != -1 && result[i].exp_multiplier != "5.0") {
            result[i] = proxyData[result[i].username]
        }
    }
    result.sort(function (a, b) {
        return parseFloat(b.level) - parseFloat(a.level);
    })
    return result
}

function proxyUnsquashedExp(proxyData,result){
    for (let i = 0; i < Object.keys(result).length; i += 1) {
        // If a user logs in they will have their exp_multiplier set to 5.0 so we don't need to proxy them.
        if (usersToSquash.indexOf(result[i].username) != -1 && result[i].exp_multiplier != "5.0") {
            result[i] = proxyData[result[i].username]
        }
    }
    result.sort(function (a, b) {
        return parseFloat(b.xp) - parseFloat(a.xp);
    })
    return result
}

hiscores.loadDefaultHSTable = () => {
    fetch(`${hiscores.apiURL}/hiscores/playersByTotal/${hiscores.world}`)
        .then(response => response.json())
        .then(result => {
            if (hiscores.world == 2) {
                fetch("https://downthecrop.github.io/hiscore-proxy/proxies/totallevel.json")
                    .then(response => response.json()).then(
                        proxyData => {
                            result = proxyUnsquashed(proxyData,result)
                            result = hiscores.filter(result);
                            hiscores.tableData = result;
                            hiscores.defaultTableData = result;
                            hiscores.populateDefaultHSTable();
                        })
            }
            else {
                result = hiscores.filter(result);
                hiscores.tableData = result;
                hiscores.defaultTableData = result;
                hiscores.populateDefaultHSTable();
            }
        })
        .catch(error => console.log('error', error));
}

hiscores.populateDefaultHSTable = () => {
    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];
        let playerData = hiscores.tableData[i + 24 * hiscores.page - 1];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = i + 24 * hiscores.page;

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html${playerData ? "?player=" + playerData.username : ""}${hiscores.getFiltersAsURLparams()}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
}

hiscores.loadUserTable = (username) => {
    username = username.split("%20").join(" ");
    if(hiscores.world == 2){
        fetch(`${hiscores.apiURL}/hiscores/playerSkills/${hiscores.world}/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            if (usersToSquash.indexOf(username) != -1 && result.info.exp_multiplier != "5.0"){
                fetch('https://downthecrop.github.io/hiscore-proxy/proxies/players/'+username+'.json')
                .then(response => response.json())
                .then(result => {
                    document.getElementById('search_name').style.color = 'black';
                    hiscores.tableData = result.skills;
                    hiscores.tableInfo = result.info;
                    hiscores.populatePlayerHSTable();
                    hiscores.setHeadSkillText(hiscores.formatName(username, 0, result.info.exp_multiplier, true));
                })
                .then(() => {
                    for(let i = 0; i < 24; i+= 1){
                        //It's slow, but it works!
                        fetch(`${hiscores.apiURL}/hiscores/playersBySkill/${hiscores.world}/${i}`)
                        .then(response => response.json())
                        .then(liveData => {
                            fetch('https://downthecrop.github.io/hiscore-proxy/proxies/skills/'+i+'.json')
                            .then(response => response.json())
                            .then(proxyData => {
                                liveData = proxyUnsquashedExp(proxyData,liveData)
                                console.log("I can find: this user at: "+Number(liveData.findIndex(player => player.username.toLowerCase() === username.toLowerCase())+1))
                                hiscores.populatePlayerRankByIndex(username, liveData, i+1);
                            })
                        })
                    } 
                })
                .catch(error => {
                    document.getElementById('search_name').style.color = 'red';            
                    document.getElementById('search_name').value = 'Player not found!';
                    console.log('error', error);
                });
            }
            else{
                document.getElementById('search_name').style.color = 'black';
                hiscores.tableData = result.skills;
                hiscores.tableInfo = result.info;
                hiscores.populatePlayerHSTable();
                hiscores.setHeadSkillText(hiscores.formatName(username, 0, result.info.exp_multiplier, true));
                for(let i = 0; i < 24; i+= 1){
                    //It's slow, but it works!
                    fetch(`${hiscores.apiURL}/hiscores/playersBySkill/${hiscores.world}/${i}`)
                    .then(response => response.json())
                    .then(liveData => {
                        fetch('https://downthecrop.github.io/hiscore-proxy/proxies/skills/'+i+'.json')
                        .then(response => response.json())
                        .then(proxyData => {
                            liveData = proxyUnsquashedExp(proxyData,liveData)
                            console.log("I can find: this user at: "+Number(liveData.findIndex(player => player.username.toLowerCase() === username.toLowerCase())+1))
                            hiscores.populatePlayerRankByIndex(username, liveData, i+1);
                        })
                        .catch(error => {
                            document.getElementById('search_name').style.color = 'red';            
                            document.getElementById('search_name').value = 'Player not found!';
                            console.log('error', error);
                        });
                    })
                }
            }
        })
    }
    else{
        fetch(`${hiscores.apiURL}/hiscores/playerSkills/${hiscores.world}/${username.toLowerCase()}`)
        .then(response => response.json())
        .then(result => {
            document.getElementById('search_name').style.color = 'black';
            hiscores.tableData = result.skills;
            hiscores.tableInfo = result.info;
            hiscores.populatePlayerHSTable();
            hiscores.setHeadSkillText(hiscores.formatName(username, 0, result.info.exp_multiplier, true));
        })
        .then(() => {
            // Now get the player ranks (done seperately)
            fetch(`${hiscores.apiURL}/hiscores/rankedMap/${hiscores.world}`)
                .then(response => response.json())
                .then(result => {
                    hiscores.populatePlayerRanks(username, result);
                })
        })
        .catch(error => {
            document.getElementById('search_name').style.color = 'red';            
            document.getElementById('search_name').value = 'Player not found!';
            console.log('error', error);
        });
    }
}

hiscores.populatePlayerHSTable = () => {
    switch (Number(hiscores.tableInfo.iron_mode)) {
        case 1:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/ironman.png");
            break;
        case 2:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/hcim.png");
            break;
        case 3:
            hiscores.setHeadSkillIcon("../../site/img/osrsimg/ultimateironman.png");
            break;
        default:
            hiscores.setHeadSkillIcon("Constitution");
    }

    for (let i = 1; i <= 24; i++) {
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        row.childNodes[1].innerHTML = "";

        row.childNodes[3].replaceWith(document.createElement("td"));
        row.childNodes[3].className = "alL";
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?skill=${i - 1}${hiscores.getFiltersAsURLparams()}">${hiscores.sName[i - 1]}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = hiscores.tableData[i - 1].static;

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = Math.floor(hiscores.tableData[i - 1].experience).toLocaleString();
    }
}

hiscores.populatePlayerRanks = (username, result) => {
    username = username.split(" ").join("_");
    for (let i = 1; i <= 24; i++) {
        result[i - 1] = hiscores.filter(result[i - 1]);
        row = document.getElementsByClassName(`row row${i}`)[0];

        row.childNodes[1].replaceWith(document.createElement("td"));
        row.childNodes[1].className = "rankCol";
        let rank = (result[i - 1].findIndex(player => player.username.toLowerCase() === username.toLowerCase()) + 1)
        row.childNodes[1].innerHTML = rank ? rank : `<span style="color: rgba(158, 144, 47, 0.5);">Unranked</span>`;
    }
}

hiscores.populatePlayerRankByIndex = (username, result, i) => {
    username = username.split(" ").join("_");
    result = hiscores.filter(result);
    row = document.getElementsByClassName(`row row${i}`)[0];

    row.childNodes[1].replaceWith(document.createElement("td"));
    row.childNodes[1].className = "rankCol";
    let rank = (result.findIndex(player => player.username.toLowerCase() === username.toLowerCase()) + 1)
    row.childNodes[1].innerHTML = rank ? rank : `<span style="color: rgba(158, 144, 47, 0.5);">Unranked</span>`;
}

hiscores.loadSkillTable = (skillId) => {
    fetch(`${hiscores.apiURL}/hiscores/playersBySkill/${hiscores.world}/${skillId}`)
        .then(response => response.json())
        .then(result => {
            if (hiscores.world == 2) {
                fetch(`https://downthecrop.github.io/hiscore-proxy/proxies/skills/${skillId}.json`)
                    .then(response => response.json()).then(
                        proxyData => {
                            result = hiscores.filter(result);
                            result = proxyUnsquashedExp(proxyData,result)
                            hiscores.tableData = result;
                            hiscores.defaultTableData = result;
                            hiscores.populateDefaultHSTable();
                        })
            }
            else {
                result = hiscores.filter(result);
                hiscores.tableData = result;
                hiscores.currentSkillId = skillId;
                hiscores.populateSkillHSTable();
            }
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
        row.childNodes[3].innerHTML = `<a href="./hiscores.html?player=${playerData.username}${hiscores.getFiltersAsURLparams()}">${playerData ? hiscores.formatName(playerData.username, playerData.iron_mode, playerData.exp_multiplier) : ""}</a>`;

        row.childNodes[5].replaceWith(document.createElement("td"));
        row.childNodes[5].className = "alL";
        row.childNodes[5].innerHTML = playerData ? playerData.level : "";

        row.childNodes[7].replaceWith(document.createElement("td"));
        row.childNodes[7].className = "alL";
        row.childNodes[7].innerHTML = playerData ? Math.floor(playerData.xp).toLocaleString() : "";
    }
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

if (getParam("world")) {
    hiscores.world = Number(getParam("world"));
}
if (getParam("page")) {
    hiscores.page = Number(getParam("page"));
}

if (getParam("skill")) {
    hiscores.loadSkillTable(getParam("skill"));
} else if (getParam("player")) {
    hiscores.loadUserTable(getParam("player"));
} else {
    hiscores.loadDefaultHSTable();
}

if (getParam("iron")) {
    document.getElementById('check_iron').checked = getParam("iron") === "true";

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
    document.getElementById('check_ultiron').checked = getParam("ultiron") === "true";
}
if (getParam("hciron")) {
    document.getElementById('check_hciron').checked = getParam("hciron") === "true";
}
if (getParam("maxXP")) {
    document.getElementById('maxXP').value = getParam("maxXP");
    document.getElementById('maxXPoutput').innerHTML = getParam("maxXP");
}


hiscores.initializePageArrows();
hiscores.initalizeRightsideButtons();
hiscores.linkLeftTabSkillNames();
hiscores.changePlaqueWorld();
hiscores.updateLegendText();
hiscores.addSkillsAndActivityFilters();