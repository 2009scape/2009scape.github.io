var URCHINFIELD = "analyticsdata";
function encode64(input) {
 var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 var out = "",c1,c2,c3,e1,e2,e3,e4,i=0;
 do {
  c1=input.charCodeAt(i++);c2=input.charCodeAt(i++);c3=input.charCodeAt(i++);
  e1=c1>>2; e2=((c1&3)<<4)|(c2>>4); e3=((c2&15)<<2)|(c3>>6); e4=c3&63;
  if (isNaN(c2)) {
   e3=e4=64;
  } else if (isNaN(c3)) {
   e4=64;
  }
  out=out+k.charAt(e1)+k.charAt(e2)+k.charAt(e3) + k.charAt(e4);
 } while (i < input.length);
 return out;
}
function getUrchinFieldValue() {
 var s="__uacct="+_uacct+";";
 s+="__userv="+_userv+";";
 if (_userv == 0 || _userv == 2) {
  var i,l=document.location;
  s+="__ugifpath="+l.protocol+"//"+l.host+_ugifpath+";";
 }
 if (typeof _uwv != "undefined") s+="__uwv="+_uwv+";";
 if (typeof _ufsc != "undefined") s+="__ufsc="+_ufsc+";";
 if (typeof _utitle != "undefined") s+="__utitle="+_utitle+";";
 if (typeof _uflash != "undefined") s+="__uflash="+_uflash+";";
 var dc=document.cookie,t,umcval="";
 if ((t=_uGC(dc,"__utma="+_udh,";"))!="-") umcval+="__utma="+t+";";
 if ((t=_uGC(dc,"__utmb="+_udh,";"))!="-") umcval+="__utmb="+t+";";
 if ((t=_uGC(dc,"__utmc="+_udh,";"))!="-") umcval+="__utmc="+t+";";
 if ((t=_uGC(dc,"__utmx="+_udh,";"))!="-") umcval+="__utmx="+t+";";
 if ((t=_uGC(dc,"__utmxx="+_udh,";"))!="-") umcval+="__utmxx="+t+";";
 if ((t=_uGC(dc,"__utmz="+_udh,";"))!="-") umcval+="__utmz="+t+";";
 if ((t=_uGC(dc,"__utmv="+_udh,";"))!="-") umcval+="__utmv="+t+";";
 s+="__umcval="+escape(umcval)+";";
 return encode64(s);
}
function getUrchinInputCode(){
 return "<input type=\"hidden\" name=\"" + URCHINFIELD + "\" value=\"" + getUrchinFieldValue() + "\">";
}
function setUrchinInputCode(){
 if (typeof _uacct == "undefined") return;
 for (var i=0;i<document.forms.length;i++) {
  if (document.forms[i].urchindata)
   document.forms[i].urchindata.value=getUrchinFieldValue();
  if (document.forms[i].analyticsdata)
   document.forms[i].analyticsdata.value=getUrchinFieldValue();
 }
}
setUrchinInputCode();
