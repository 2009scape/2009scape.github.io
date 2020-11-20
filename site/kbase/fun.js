let fs = require('fs');
files = fs.readdirSync(__dirname + '/guid/');

let replaceMenubox = `<p style="text-align: center;font-size:11px;font-weight:bold; margin-bottom: 0px;">LOLBACKTODO</p>`

files.forEach(function (file) {
    var contents = fs.readFileSync(__dirname + '/guid/' + file, 'utf8');
    const regex = /<form method="get" action="[\s\S]*?<\/form>/i;
    fs.writeFileSync(__dirname + "/guid/" + file, contents.replace(`</p><img src="https://runescape.wiki/images/f/f4/Red_partyhat.png?7ed30">`, `<img src="https://runescape.wiki/images/f/f4/Red_partyhat.png?7ed30"></p>`));
})