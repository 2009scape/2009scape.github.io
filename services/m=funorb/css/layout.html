
//Sebs Hack
Function.prototype.apply = function(thisArg, argArray) {
    if (typeof this != "function") {
        throw new Error("apply called on incompatible " +
                    "object (not a function)");
    }
    if (argArray != null && !(argArray instanceof Array)
        && typeof argArray.callee != "function") {
        throw new Error("The 2nd argument to apply must " +
                    "be an array or arguments object");
    }

    thisArg = (thisArg == null) ? window : Object(thisArg);
    thisArg.__applyTemp__ = this;

    // youngpup's hack
    var parameters = [],
        length = (argArray || "").length >>> 0;
    for (var i = 0; i < length; i++) {
        parameters[i] = "argArray[" + i + "]";
    };
    var functionCall =
            "thisArg.__applyTemp__(" + parameters + ")";

    try {
        return eval(functionCall)
    } finally {
        try {
            delete thisArg.__applyTemp__
        } catch (e) {
            /* ignore */
        }
    }
}
//Sebs Hack
Function.prototype.call = function(thisArg) {
    return this.apply(thisArg,
            Array.prototype.slice.apply(arguments, [1]));
}
// Array.shift() - Remove and return the first element
if( typeof Array.prototype.shift==='undefined' ) {
 Array.prototype.shift = function() {
  for( var i = 0, b = this[0], l = this.length-1; i<l; i++ ) {
   this[i] = this[i+1];
  }
  this.length--;
  return b;
 };
}
//Sebs Hack
Function.prototype.fixThis = function() {
  var func=this;
  var args=Util.as_array(arguments);
  var new_this=args.shift();
 return function(event) {
  return func.apply(new_this, [(event || window.event)].concat(args).concat(Util.as_array(arguments)));
 }
};
Function.prototype.fixDropEvt = function() {
  var func=this;
  var args=Util.as_array(arguments);
  var new_this=args.shift();
 return function() {
  return func.apply(new_this, args);
 }
};
// Util functions 
var Util = {
 as_array: function (some_vars) {
  if (!some_vars) return [];
  var ret=[];
  for (var i=0; i<some_vars.length; i++) ret[ret.length]=(some_vars[i]);
  return ret;
 },
 // addEvent function from http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
 addEvent : function(obj, type, fn) {
  if (obj.addEventListener)
   obj.addEventListener(type, fn.fixThis(this), false);
  else if (obj.attachEvent) {
   obj["e"+type+fn] = fn.fixThis(this);
   obj[type+fn] = function() { obj["e"+type+fn]( window.event ); };
   obj.attachEvent("on"+type, obj[type+fn]);
  }
 }
}
// Animated text at top of document
var TeleText = {
 //set Position to start typing from
 pos : 1,
 
 //initilise and check for cookie
 init : function(message) {
  typer =  document.getElementById('teleText');
  if (typer) {
   //hide Content
   typer.innerHTML = '';
   //Run Typeout
   TeleText.shellType = window.setTimeout('TeleText.typeOut("'+message+'")', 100);
  }
 },

 // The typer function
 typeOut : function(typeText) {
  //check to see when typer can end setInterval.
  if(this.pos == typeText.length) {
    //stop typing. remove setInterval.
    typer.innerHTML = typeText.slice(0, this.pos);
  } else {
   this.pos += 1;
   //Choose which part of the two-part animation to display:
   switch(this.pos % 4) {
    case 0:
     typer.innerHTML = typeText.slice(0, this.pos) + ' -';
     break;
    case 1:
     typer.innerHTML = typeText.slice(0, this.pos) + ' \\';
     break;
    case 2:
     typer.innerHTML = typeText.slice(0, this.pos) + ' |';
     break;
    case 3:
     typer.innerHTML = typeText.slice(0, this.pos) + ' /';
     break;
   }
   window.setTimeout('TeleText.typeOut("'+typeText+'")', 100);
  }
 }
};
