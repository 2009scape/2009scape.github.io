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

let replaceMenubox = `<div id="langAndLogin">

<div id="lang">
<a href="../../index.html"><img alt="English" title="English" src="../../site/img/main/layout/en.gif" /></a>
<a href="../../site/l%3d1/title.html"><img alt="Deutsch" title="Deutsch" src="../../site/img/main/layout/de.gif" /></a>
<a href="../../site/l%3d2/title.html"><img alt="Fran&ccedil;ais" title="Fran&ccedil;ais" src="../../site/img/main/layout/fr.gif" /></a>
<a href="../../site/l%3d3/title.html"><img alt="Portugu&ecirc;s (BR)" title="Portugu&ecirc;s (BR)" src="../../site/img/main/layout/br.gif" /></a>
</div>


</div>

<div class="navigation">`

files.forEach(function (fileName) {
    if (fs.lstatSync(dir + fileName).isFile()) {
        let contents = fs.readFileSync(dir + fileName, 'utf8');
        const regex = /<div id="langAndLogin">[\s\S]*<div class="navigation">/i;
        fs.writeFileSync(dir + fileName, contents.replace("../../site/title.html", "../../index.html"));    
    }
})