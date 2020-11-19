/***********************************************
* Cool DHTML tooltip script II- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
* Modified by Early Impact LLC in January of 2006 for use with its ProductCart
* shopping cart software under written approval by Dynamic Drive.
***********************************************/

var offsetfromcursorX=10
var offsetfromcursorY=0

var offsetdivfrompointerX=54
var offsetdivfrompointerY=101

var ie=document.all
var ns6=document.getElementById && !document.all

var curX
var curY

var winheight
var winwidth

var leftedge
var rightedge

var bottomedge
var topedge

if (ie)
{
	document.write('<IMG class="dpointer" id=dhtmlpointer style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/up-left-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/pngfix.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer1 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/lower-left-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/pngfix.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer2 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/up-right-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/pngfix.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer3 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/lower-right-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/pngfix.png">')
	document.write('<DIV id="dhtmltooltip">')
	document.write('<DIV><IMG id="topbox" style="FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/topcap.png\'); WIDTH: 285px; HEIGHT: 21px" src="images/pngfix.png"></DIV>')
	document.write('<DIV id="titlebox" style="background-image:none; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/titlemiddle.png\');"><div id="tcontent" style="position:relative; padding:5px 0px 7px 20px; width: 245px; text-align: left;"></div></DIV>')
	document.write('<DIV id="boxcontent" style="background-image:none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/contentmiddle.png\'); POSITION: relative"><div id="mcontent" style="position:relative; padding:5px 0px 7px 20px; width: 245px; text-align: justify;"></div></DIV>')
	document.write('<DIV><IMG id="bottombox" style="FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/bottomcap.png\'); WIDTH: 285px; HEIGHT: 25px" src="images/pngfix.png"></DIV>')
	document.write('</DIV>')
	document.write('<STYLE>')
	document.write('#boxcontent{width:285px; background-image:url(\'images/contentmiddle.png\');}')
	document.write('#titlebox{width:285px; background-image:url(\'images/titlemiddle.png\');}')
	document.write('</style>')
}
else
{
	document.write('<IMG class="dpointer" id=dhtmlpointer style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/up-left-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/up-left-combo.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer1 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/lower-left-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/lower-left-combo.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer2 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/up-right-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/up-right-combo.png">')
	document.write('<IMG class="dpointer" id=dhtmlpointer3 style="DISPLAY: none; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/lower-right-combo.png\'); WIDTH: 55px; HEIGHT: 101px" src="images/lower-right-combo.png">')	
	document.write('<DIV id="dhtmltooltip">')
	document.write('<DIV><IMG id="topbox" style="FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/topcap.png\'); WIDTH: 285px; HEIGHT: 21px" src="images/topcap.png"></DIV>')
	document.write('<DIV id="titlebox" style="background-image:url(\'images/titlemiddle.png\'); width:285px; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/titlemiddle.png\')"><div id="tcontent" style="position:relative; padding:5px 0px 7px 20px; width: 245px; text-align: left;"></div></DIV>')
	document.write('<DIV id="boxcontent" style="background-image:url(\'images/contentmiddle.png\'); width:285px; FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/contentmiddle.png\'); POSITION: relative"><div id="mcontent" style="position:relative; padding:5px 0px 7px 20px; width: 245px; text-align: justify;"></div></DIV>')
	document.write('<DIV><IMG id="bottombox" style="FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=\'scale\', src=\'images/bottomcap.png\'); WIDTH: 285px; HEIGHT: 25px" src="images/bottomcap.png"></DIV>')
	document.write('</DIV>')
}

var enabletip=false
var showfirsttime=true

if (ie||ns6)
	var tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""

	var boxcontentobj=document.all? document.all["boxcontent"] : document.getElementById? document.getElementById("boxcontent") : ""

	var btitleobj=document.all? document.all["tcontent"] : document.getElementById? document.getElementById("tcontent") : ""

	var mcontentobj=document.all? document.all["mcontent"] : document.getElementById? document.getElementById("mcontent") : ""

	var pointerobj=document.all? document.all["dhtmlpointer"] : document.getElementById? document.getElementById("dhtmlpointer") : ""

	var pointerobj1=document.all? document.all["dhtmlpointer1"] : document.getElementById? document.getElementById("dhtmlpointer1") : ""

	var pointerobj2=document.all? document.all["dhtmlpointer2"] : document.getElementById? document.getElementById("dhtmlpointer2") : ""

	var pointerobj3=document.all? document.all["dhtmlpointer3"] : document.getElementById? document.getElementById("dhtmlpointer3") : ""


function ietruebody()
{
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function showtip(title,thetext)
{
	if (ns6||ie)
	{
		btitleobj.innerHTML=title
		mcontentobj.innerHTML=thetext
		if (boxcontentobj.offsetHeight<offsetdivfrompointerY)
		{
			mcontentobj.innerHTML=mcontentobj.innerHTML + "<br><br><br>"
		}
		enabletip=true
		showfirsttime=true
		displaytip()
		return true;
	}
}

function positiontip(e)
{
	curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
	curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;

	winheight=ie&&!window.opera? ietruebody().clientHeight : window.innerHeight
	winwidth=ie&&!window.opera? ietruebody().clientWidth : window.innerWidth-20

	leftedge=ie&&!window.opera? event.clientX-offsetfromcursorX : e.clientX-offsetfromcursorX
	rightedge=ie&&!window.opera? winwidth-event.clientX-offsetfromcursorX : winwidth-e.clientX-offsetfromcursorX
	
	bottomedge=ie&&!window.opera? winheight-event.clientY-offsetfromcursorY : winheight-e.clientY-offsetfromcursorY
	topedge=ie&&!window.opera? event.clientY+offsetfromcursorY : e.clientY+offsetfromcursorY
	displaytip()
}
function displaytip()
{
	if ((enabletip))
	{
		showfirsttime=false;
		var nondefaultpos=false
		var nondefaultYpos=false
		
		var tiptop=0
		
		var testpos=false;
		
		var tippos=(curY+offsetfromcursorY-(tipobj.offsetHeight/3))
		
		if ((tippos>=curY-topedge-7) && (tippos+tipobj.offsetHeight-10<=curY+bottomedge))
		{testpos=true;}
		else
		{
			tippos=(curY+offsetfromcursorY-(tipobj.offsetHeight/2))
			if ((tippos>=curY-topedge-7) && (tippos+tipobj.offsetHeight-10<=curY+bottomedge))
			{testpos=true;}
			else
			{
				tippos=(curY+offsetfromcursorY-(tipobj.offsetHeight*2/3))
				if ((tippos>=curY-topedge-7) && (tippos+tipobj.offsetHeight-10<=curY+bottomedge))
				{testpos=true;}
			}
		
		}
		
		if (testpos)
		{
			tipobj.style.top=tippos+"px"
			tiptop=tippos
		}
		else
		{
			if (topedge<tipobj.offsetHeight-25)
			{
				tipobj.style.top=curY-topedge-7+"px"
				tiptop=curY-topedge-7
			}
			else
			{
				if (bottomedge<tipobj.offsetHeight-10)
				{
					tipobj.style.top=curY+bottomedge-tipobj.offsetHeight+10+"px"
					tiptop=curY+bottomedge-tipobj.offsetHeight+10
					nondefaultYpos=true
				}
				else
				{
					tippos=(curY+offsetfromcursorY-(tipobj.offsetHeight/3))
					tipobj.style.top=tippos+"px"
					tiptop=tippos
					nondefaultYpos=true
				}
			}
		}
		if ((rightedge<tipobj.offsetWidth+offsetdivfrompointerX-25) && (leftedge>=tipobj.offsetWidth+offsetdivfrompointerX+offsetfromcursorX-5))
		{
			tipobj.style.left=curX-offsetfromcursorX-offsetdivfrompointerX-tipobj.offsetWidth+10+8+"px"
			nondefaultpos=true
		}
		else
		{
			tipobj.style.left=curX+offsetfromcursorX+offsetdivfrompointerX-10+"px"
		}

		if (nondefaultYpos)
		{
			var testpoint=true;
			if (bottomedge<=offsetdivfrompointerY)
			{
				var pointtop=curY+offsetfromcursorY-offsetdivfrompointerY+16
				pointerobj1.style.top=curY+offsetfromcursorY-offsetdivfrompointerY+16+"px"
				pointerobj3.style.top=curY+offsetfromcursorY-offsetdivfrompointerY+16+"px"
				if (nondefaultpos)
				{
					pointerobj3.style.left=curX-offsetfromcursorX-offsetdivfrompointerX+"px"
				}
				else
				{
					pointerobj1.style.left=curX+offsetfromcursorX+"px"
				}

				if (pointtop>=tiptop)
				{
					if (nondefaultpos)
					{
						pointerobj3.style.visibility="visible"
						pointerobj3.style.display="block"
						pointerobj1.style.visibility="hidden"
					}
					else
					{
						pointerobj1.style.visibility="visible"
						pointerobj1.style.display="block"
						pointerobj3.style.visibility="hidden"
					}
					pointerobj.style.visibility="hidden"
					pointerobj2.style.visibility="hidden"
					testpoint=false;
				}
			}
			if (testpoint)
			{
				if (nondefaultpos)
				{
					pointerobj2.style.top=curY+offsetfromcursorY-12+"px"
					pointerobj2.style.left=curX-offsetfromcursorX-offsetdivfrompointerX+"px"
					pointerobj2.style.visibility="visible"
					pointerobj2.style.display="block"
					pointerobj.style.visibility="hidden"
					pointerobj1.style.visibility="hidden"
					pointerobj3.style.visibility="hidden"
				}
				else
				{
					pointerobj.style.top=curY+offsetfromcursorY-12+"px"
					pointerobj.style.left=curX+offsetfromcursorX+"px"
					pointerobj.style.visibility="visible"
					pointerobj.style.display="block"
					pointerobj1.style.visibility="hidden"
					pointerobj2.style.visibility="hidden"
					pointerobj3.style.visibility="hidden"
				}
			}
		}
		else
		{
			var testpoint=true;
			var pointtop=curY+offsetfromcursorY-10
			pointerobj.style.top=curY+offsetfromcursorY-10+"px"
			pointerobj2.style.top=curY+offsetfromcursorY-10+"px"
			if (nondefaultpos)
			{
				pointerobj2.style.left=curX-offsetfromcursorX-offsetdivfrompointerX+"px"
			}
			else
			{
				pointerobj.style.left=curX+offsetfromcursorX+"px"
			}
			if (pointtop+offsetdivfrompointerY<tiptop+tipobj.offsetHeight)
			{
				if (nondefaultpos)
				{
					pointerobj2.style.visibility="visible"
					pointerobj2.style.display="block"
					pointerobj.style.visibility="hidden"
				}
				else
				{
					pointerobj.style.visibility="visible"
					pointerobj.style.display="block"
					pointerobj2.style.visibility="hidden"
				}
				pointerobj1.style.visibility="hidden"
				pointerobj3.style.visibility="hidden"
				testpoint=false;
			}
			if (testpoint)
			{
				if (nondefaultpos)
				{
				pointerobj3.style.top=curY+offsetfromcursorY-offsetdivfrompointerY+17+"px"
				pointerobj3.style.left=curX-offsetfromcursorX-offsetdivfrompointerX+"px"
				pointerobj3.style.visibility="visible"
				pointerobj3.style.display="block"
				pointerobj.style.visibility="hidden"
				pointerobj1.style.visibility="hidden"
				pointerobj2.style.visibility="hidden"

				}
				else
				{
				pointerobj1.style.top=curY+offsetfromcursorY-offsetdivfrompointerY+17+"px"
				pointerobj1.style.left=curX+offsetfromcursorX+"px"
				pointerobj1.style.visibility="visible"
				pointerobj1.style.display="block"
				pointerobj.style.visibility="hidden"
				pointerobj2.style.visibility="hidden"
				pointerobj3.style.visibility="hidden"
				}
			}
		}
		
		//Hide Select Boxes on IE
		if (ie)
		{
			var boxl=0
			var boxt=0
			var boxw=0
			var boxh=0
		
			if (pointerobj.style.visibility=="visible") {boxl=getIntPoint(pointerobj.style.left); boxw=tipobj.offsetWidth + pointerobj.offsetWidth;}
			if (pointerobj1.style.visibility=="visible") {boxl=getIntPoint(pointerobj1.style.left); boxw=tipobj.offsetWidth + pointerobj1.offsetWidth;}
			if (pointerobj2.style.visibility=="visible") {boxl=getIntPoint(tipobj.style.left); boxw=tipobj.offsetWidth + pointerobj2.offsetWidth;}
			if (pointerobj3.style.visibility=="visible") {boxl=getIntPoint(tipobj.style.left); boxw=tipobj.offsetWidth + pointerobj3.offsetWidth;}

			boxt=getIntPoint(tipobj.style.top);
			boxh=tipobj.offsetHeight;
		
			HideSelectBoxes(boxt,boxl,boxw,boxh);
		}
		
		tipobj.style.visibility="visible"
	}
}

function getIntPoint(tmpstr)
{
	var tmp1=tmpstr.split("px")
	return(parseInt(tmp1[0]));
}

function HideSelectBoxes(boxt,boxl,boxw,boxh)
{
	var i=0;
	var objElems = document.getElementsByTagName("SELECT");
	var j=objElems.length;
	if (j>0)
	do
	{
		i=j-1;
		var oSelect=objElems[i];
		var selx=0; var sely=0; var selp;
		if(oSelect.offsetParent){selp=oSelect; while(selp.offsetParent){selp=selp.offsetParent; selx+=selp.offsetLeft; sely+=selp.offsetTop;}}
		selx+=oSelect.offsetLeft; sely+=oSelect.offsetTop
		selw=oSelect.offsetWidth; selh=oSelect.offsetHeight
		if (((selx>=boxl) && (selx<=boxl+boxw) && (sely>=boxt) && (sely<=boxt+boxh)) || ((selx+selw>=boxl) && (selx+selw<=boxl+boxw) && (sely+selh>=boxt) && (sely+selh<=boxt+boxh)))
		{
			oSelect.style.visibility="hidden"
		}
		else
		{
			oSelect.style.visibility="visible"
		}
	}
	while (--j);
}

function ShowSelectBoxes()
{
	var i=0;
	var objElems = document.getElementsByTagName("SELECT");
	var j=objElems.length;
	if (j>0)
	do
	{
		i=j-1;
		objElems[i].style.visibility="visible"
	}
	while (--j);
}

function hidetip()
{
	if (ns6||ie)
	{
		enabletip=false
		tipobj.style.visibility="hidden"
		pointerobj.style.visibility="hidden"
		pointerobj1.style.visibility="hidden"
		pointerobj2.style.visibility="hidden"
		pointerobj3.style.visibility="hidden"
		tipobj.style.left="-300"
		tipobj.style.top="-100"
		pointerobj.style.left="-300"
		pointerobj.style.top="-100"
		pointerobj1.style.left="-300"
		pointerobj1.style.top="-100"
		pointerobj2.style.left="-300"
		pointerobj2.style.top="-100"
		pointerobj3.style.left="-300"
		pointerobj3.style.top="-100"
		if (ie) ShowSelectBoxes();
	}
}

document.onmousemove=positiontip