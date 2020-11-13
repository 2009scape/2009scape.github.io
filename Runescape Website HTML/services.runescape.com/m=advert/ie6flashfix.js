function RunIE6FixFlashBanner(address,filename,clicktagname,clicktagloc,width,height)
{
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + width + '" height="' + height + '" id="' + filename + '" align="middle">');
document.write('<param name="allowScriptAccess" value="sameDomain" />');
document.write('<param name="movie" value="' + address + '/' + filename + '.swf?' + clicktagname + '=' + clicktagloc + '" />');
document.write('<param name="quality" value="high" />');
document.write('<param name="bgcolor" value="#000000" />');
document.write('<embed src="' + address + '/' + filename + '.swf?' + clicktagname + '=' + clicktagloc + '" quality="high" bgcolor="#000000" width="' + width + '" height="' + height + '" name="' + filename + '" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>');
}
