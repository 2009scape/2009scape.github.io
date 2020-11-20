/** XHConn - Simple XMLHTTP Interface - bfults@gmail.com - 2005-04-08        **
 ** Code licensed under Creative Commons Attribution-ShareAlike License      **
 ** http://creativecommons.org/licenses/by-sa/2.0/                           **/
function XHConn()
{
  var xmlhttp, bComplete = false;
  try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); }
  catch (e) { try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
  catch (e) { try { xmlhttp = new XMLHttpRequest(); }
  catch (e) { xmlhttp = false; }}}
  if (!xmlhttp) return null;
  this.connect = function(sURL, sMethod, sVars, fnDone)
  {
    if (!xmlhttp) return false;
    bComplete = false;
    sMethod = sMethod.toUpperCase();

    try {
      if (sMethod == "GET")
      {
        xmlhttp.open(sMethod, sURL+"?"+sVars, true);
        sVars = "";
      }
      else
      {
        xmlhttp.open(sMethod, sURL, true);
        xmlhttp.setRequestHeader("Method", "POST "+sURL+" HTTP/1.1");
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      }
      xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4 && !bComplete)
      {
		  
		try {
			if(xmlhttp.status !== undefined && xmlhttp.status != 0) {
					xmlhttpStatus = xmlhttp.status;
				} else {
					xmlhttpStatus = 0;
				}
			} catch(e){

			xmlhttpStatus = 0;
		}
		  
	  if (xmlhttpStatus == 200)
		{
			bComplete = true;
			fnDone(xmlhttp);
		}
	  else
	  {
	    return null;
	  }
        }};
      xmlhttp.send(sVars);
    }
    catch(z) { return false; }
    return true;
  };
  return this;
}