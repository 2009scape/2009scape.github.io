/*
 HOW TO USE THIS SCRIPT:

 Step 1: Put the script where you need it
 Step 2: Set "replaceMenuBox" string to the right path (find and replace the number of ./../../'s)
 Step 3: Make sure the files are being read from the right path based on the function below

 Always use git. You will mess up your work first try.
*/

let fs = require('fs');
const dir = __dirname + '/m=news/'
files = fs.readdirSync(dir);

let replaceMenubox = `<div id="langAndLogin">`

files.forEach(function (fileName) {
    if (fs.lstatSync(dir + fileName).isFile()) {
        let contents = fs.readFileSync(dir + fileName, 'utf8');
        const regex = /<div id="langAndLogin">[\s\S]*?<\/div>/i;
        fs.writeFileSync(dir + fileName, contents.replace(regex, replaceMenubox));    
    }
})