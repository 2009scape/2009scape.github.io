let fs = require('fs');
files = fs.readdirSync(__dirname + '/guid/');

let replaceMenubox = `Feel free to join our Discord for further help:
<ul class="further">
    <li><a href="https://discord.gg/43YPGND">Discord</a></li>
</ul>
`

files.forEach(function (file) {
    var contents = fs.readFileSync(__dirname + '/guid/' + file, 'utf8');
    const regex = /                                    <div class="brown_box">[\s\S]*?                                    <\/div>/i;
    fs.writeFileSync(__dirname + "/guid/" + file, contents.replace(regex, replaceMenubox));
})