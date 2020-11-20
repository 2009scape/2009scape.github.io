var stockticker = new ticker();
var time
function mouseOut(event)
{
 var e = event;
 if(!e)e=window.event;
 var nodeTo = e.relatedTarget;
 var nodeFrom = e.currentTarget;
 if(!nodeTo){ticker.updateTicker();return;}
 try{
  while(nodeTo.nodeType != nodeTo.ELEMENT_NODE){
   if(nodeTo.parentnode)nodeTo = nodeTo.parentNode;
   else {
    break;
   }
  }
  if(!nodeFrom){
   if(nodeTo.id.match("ticker") || nodeTo.id.match("")){
    ticker.updateTicker();return;
   }
  }
  if(nodeTo.id.match("ticker")){
   return;
  }
  if(nodeFrom.id.match("ticker")||nodeFrom.parentNode.id.match("ticker")){
   if(nodeTo.id.match("ticker")||nodeTo.parentNode.id.match("ticker")){
    return;
   }
  }
  ticker.updateTicker();
 }
 catch(err){
  if(nodeTo.tagName.match("HTML")){
   ticker.updateTicker();
  }
 }
}
function ticker()
 {
  //Define width constant
  ticker_width=120;
  //How many characters we are displaying at the moment
  this.count=ticker_width;
  //Create blank text for ticker
  this.text= '';
  //The text to be displayed in the ticker. Filled up with spaces to start with
  for (i=0; i<this.count; ++i) {
   this.text = this.text + '&nbsp;';
  }
  //Buffer for text to be displayed
  this.buffer=' ';
  //Buffer for incoming link tags
  this.intag='';
  //Buffer for outgoing link tags
  this.outtag='';
  //Where the text will be displayed
  this.out=document.getElementById("ticker");
  //is there an active request to the server for more text? if so don't send any more.
  this.sent_request=false;
  //How many cycles have we been waiting for a reply from the server? If too many, send another request
  this.cycles_empty=0;
 }
//remove a character (or image) from the front of the ticker, and add one to the end of it
ticker.updateTicker=function()
{
   stockticker.out=document.getElementById("ticker");
   if(stockticker.buffer.length<50)
   {
    //we need some more text for the buffer
    if(!stockticker.sent_request || stockticker.cycles_empty>20){
     stockticker.cycles_empty=0;
     stockticker.sent_request=true;
     callback_request("./ticker.ws",function(newbuff){stockticker.buffer = stockticker.buffer + newbuff});
    }
   }
   else{
    stockticker.sent_request=false;
   }
 if(stockticker.buffer.length>0)
 {
  //if there are characters left in the buffer...
  while(stockticker.count>=ticker_width)
  {
   //take off a character from the front of the ticker...
   ticker.removeChar();
  }
  stockticker.cycles_empty=0;
  //and add another one to the end
  ticker.getNextChar();
 }
 else{
  //don't take a character off if there is nothing to replace it
  stockticker.cycles_empty++;
 }
 //update the ticker on the page
 stockticker.out.innerHTML=stockticker.outtag+stockticker.text+stockticker.intag;
 if(stockticker.text.substring(0,1)==" ")
 {
  stockticker.out.innerHTML = "&nbsp;"+stockticker.out.innerHTML;
 }
 time = setTimeout("ticker.updateTicker()",150)
}
ticker.removeChar=function()
{
 //the character to try to remove
 var endChar = stockticker.text.substring(0,1);
 if(endChar=="<"){
  //if the first character is opening a tag, treat it differently
  if(stockticker.text.substring(1,2)=="s")
  {
   //in here, we've got a text span, changing the colour of the text
   //keep the tag separate from the rest of the text, and remove a character from the text
   var i=stockticker.text.indexOf(">");
   stockticker.outtag = stockticker.text.substring(0,i+1);
   stockticker.text=stockticker.text.substr(i+2);
  }
  else if (stockticker.text.substring(1,3)=="/s")
  {
   //closing the span tag. get rid of the opening tag as well
   stockticker.text=stockticker.text.substr(8);
   stockticker.outtag="";
  }
  else{
   //If we get here, we have a link tag. We need to keep the open and close tags
   // while there is still text between them, then we need to remove both tags.
   if(stockticker.text.substring(1,2)=="a"){
    var close=stockticker.text.indexOf(">");
    stockticker.outtag=stockticker.text.substring(0,close+1);
    stockticker.text=stockticker.text.substr(close+2);
   }
   else if(stockticker.text.substring(1,4)=="/a>")
   {
    stockticker.text=stockticker.text.substr(5);
    stockticker.outtag="";
   }
  }
 }
 else if(endChar=="&")
 {
  if(stockticker.text.substring(1,2)=="n"){
   //remove a space (&nbsp;)
   stockticker.text=stockticker.text.substr(6);
  }
  else if(stockticker.text.substring(1,2)=="m"){
   //remove a minus sign (&minus;)
   stockticker.text=stockticker.text.substr(7);
  }
  else{
   //remove an ampersand
   stockticker.text=stockticker.text.substr(1);
  }
 }
 else
 {
  stockticker.text=stockticker.text.substr(1);
 }
 stockticker.count=stockticker.count-1;
}
ticker.getNextChar=function()
{
 var startChar=stockticker.buffer.substring(0,1);
 stockticker.buffer=stockticker.buffer.substr(1);
 if(startChar=="<"){
  var first2Chars=stockticker.buffer.substring(0,2);
  if(first2Chars=="/a")
  {
   stockticker.text=stockticker.text+stockticker.intag;
   stockticker.intag="";
   stockticker.buffer=stockticker.buffer.substr(3);
   startChar=stockticker.buffer.substring(0,1);
   stockticker.buffer=stockticker.buffer.substr(1);
  }
  if(first2Chars=="a ")
  {
   //set the 'incoming' tag to close this new one
   stockticker.intag="</a>"
   //set s to be the next character to be displayed normally
   var i=stockticker.buffer.indexOf(">");
   startChar=startChar+stockticker.buffer.substring(0,i+2);
   stockticker.buffer=stockticker.buffer.substr(i+2);
  }
  if(first2Chars=="/s")
  {
   stockticker.text=stockticker.text+stockticker.intag;
   stockticker.intag="";
   stockticker.buffer=stockticker.buffer.substr(6);
   startChar=stockticker.buffer.substring(0,1);
   stockticker.buffer=stockticker.buffer.substr(1);
  }
  if(first2Chars=="sp")
  {
   //set the 'incoming' tag to close this new one
   stockticker.intag="</span>"
   //set startChar to be the next character to be displayed normally
   var i=stockticker.buffer.indexOf(">");
   startChar=startChar+stockticker.buffer.substring(0,i+2);
   stockticker.buffer=stockticker.buffer.substr(i+2);
  }
 }
 if(startChar==" "){
  startChar="&nbsp;";
 }
 if(startChar=="-"){
  startChar="&minus;";
 }
 stockticker.text=stockticker.text+startChar;
 stockticker.count=stockticker.count+1;
}
ticker.stop=function(){
 clearTimeout(time);
}
function ajax_debug(text) {
 if(document.getElementById("javascript-debug-pane")) document.getElementById("javascript-debug-pane").value+=text + "\n";
}
function httpRequest() {
 // Create the requestHandler
 try {
  this.requestHandler=new ActiveXObject("Msxml2.XMLHTTP");
 }
 catch(e1) {
  try {
   this.requestHandler=new ActiveXObject("Microsoft.XMLHTTP");
  }
  catch(e2) {
   this.requestHandler=false;
  }
 }
 if(!this.requestHandler && window.createRequest) {
  try {
   this.requestHandler=window.createRequest();
  }
  catch(e) {
   this.requestHandler=false;
  }
 }
 if(!this.requestHandler && typeof(XMLHttpRequest)!='undefined') {
  try {
   this.requestHandler=new XMLHttpRequest();
  }
  catch(e) {
   this.requestHandler=false;
  }
 }
 ajax_debug("New httpRequest created");
}
httpRequest.prototype.handleChange=function() {
 //ajax_debug("ReadyState changed to " + this.requestHandler.readyState);
 if(this.requestHandler.readyState==4 && this.callback) this.callback(this.requestHandler.responseText);
}
httpRequest.prototype.get=function(url, callback) {
 ajax_debug("GET " + url + (callback==null ? " (no callback)" : " (with callback)"));
 var copy=this;
 this.requestHandler.onreadystatechange=function() {copy.handleChange();}
 if(callback) this.callback=callback;
 else this.callback=null;
 this.requestHandler.open("GET", url, true);
 this.requestHandler.send(null);
}
function ajax_describe(what) {
 a="";
 for(part in what) try{a+=part + "=" + what[part] + "\n";} catch(e) {}
 return a;
}
function throwaway_request(url) {
 var req=new httpRequest();
 req.get(url);
}
function callback_request(url, callback) {
 var req=new httpRequest();
 req.get(url, callback);
}
