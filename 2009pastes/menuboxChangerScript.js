/*
 HOW TO USE THIS SCRIPT:

 Step 1: Put the script where you need it
 Step 2: Set "replaceMenuBox" string to the right path (find and replace the number of ./../../'s)
 Step 3: Make sure the files are being read from the right path based on the function below

 Always use git. You will mess up your work first try.
*/

let fs = require('fs');
files = fs.readdirSync(__dirname + '/guid/');

let replaceMenubox = `<div id="menubox">
<ul id="menus">
    <li class="top"><a href="./../../../site/index.html" id="home" class="tl"><span class="ts">Home</span></a></li>

    <li class="top"><a id="play" class="tl"
            href="https://github.com/2009scape/2009Scape/releases/latest/download/2009Scape.jar"
            onclick="if(!this.j){this.href+='?j=1';this.j=true;}"><span class="ts">Play Now</span></a>
        <ul>
            <li><a href="./../../../secure.runescape.com/m=create/index.html" class="fly"><span>New Users</span></a></li>
            <li><a href="https://github.com/2009scape/2009Scape/releases/latest/download/2009Scape.jar"
                    onclick="if(!this.j){this.href+='?j=1';this.j=true;}" class="fly"><span>Existing
                        Users</span></a></li>
        </ul>
    </li>

    <li class="top"><a id="account" class="tl" href="./../../../site/404.html"><span class="ts">Account</span></a>
        <ul>
            <li><a href="./../../../site/404.html" class="fly"><span>Upgrade Your Account</span></a></li>
            <li><a href="./../../../secure.runescape.com/m=create/index.html" class="fly"><span>Create New
                        Account</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Account Management</span></a></li>
        </ul>
    </li>

    <li class="top"><a id="guide" class="tl" href="./../../../site/404.html"><span class="ts">Game
                Guide</span></a>
        <ul>
            <li><a href="./../../../site/404.html" class="fly"><span>Manual</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>QuestHelp</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Grand Exchange</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Rules</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Lores</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>What is RuneScape?</span></a></li>
        </ul>
    </li>

    <li class="top"><a id="community" class="tl" href="./../../../site/404.html"><span class="ts">Community</span></a>
        <ul>
            <li><a href="./../../../site/404.html" class="fly"><span>Forums</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Hiscores</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Player Submissions</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Adventurer's Log</span></a></li>

            <li><a href="./../../../site/404.html" class="fly"><span>Polls</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Downloads &
                        Wallpapers</span></a></li>
        </ul>
    </li>

    <li class="top"><a id="help" class="tl" href="./../../../site/404.html"><span class="ts">Help</span></a>
        <ul>
            <li><a href="./../../../site/404.html" class="fly"><span>Customer Support</span></a></li>
            <li><a href="./../../../site/404.html"
                    class="fly"><span>Password Recovery</span></a></li>
            <li><a href="./../../../site/404.html"
                    class="fly"><span>Locked Account Recovery</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Appeal Bans & Mutes</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Submit a Bug Report</span></a></li>
            <li><a href="./../../../site/404.html" class="fly"><span>Parents' Guide</span></a></li>
        </ul>
    </li>

    <li class="top"><a href="https://github.com/2009scape/" id="login" class="tl"><span class="ts">Source
                Code</span></a></li>
</ul>
<br class="clear" />
</div>

<div id="scroll">
`

files.forEach(function (file) {
    var contents = fs.readFileSync(__dirname + '/guid/' + file, 'utf8');
    const regex = /<div id="menubox">[\s\S]*<div id="scroll">/i;
    fs.writeFileSync(__dirname + "/guid/" + file, contents.replace(regex, replaceMenubox));
})