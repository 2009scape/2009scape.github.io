let fs = require('fs');
files = fs.readdirSync(__dirname + '/guid/');

let replaceMenubox = ``

files.forEach(function (file) {
    var contents = fs.readFileSync(__dirname + '/guid/' + file, 'utf8');
    const regex = /<div class="brown_box"><div class="inner_brown_box">[\s\S]*?<\/div><\/div>/i;
    fs.writeFileSync(__dirname + "/guid/" + file, contents.replace(regex, replaceMenubox));
})