
var currentIdx = 1;
var fadetime=80;
var waittime=6000;
function changetele(currentStep){
 var teletxt = document.getElementById("teletext_inner");
 if(currentStep<5){
  if(currentStep==0){
   setcolor("#636363","#777777");
  }
  else if(currentStep==1){
   setcolor("#333333","#444444");
  }
  else if(currentStep==2){
   setcolor("#131313","#131313");
   if(currentIdx==numofoptions)currentIdx=0;
   teletxt.innerHTML = testArr[currentIdx++];
  }
  else if(currentStep==3){
   setcolor("#333333","#444444");
  }
  else if(currentStep==4){
   setcolor("#636363","#777777");
  }
  setTimeout("changetele("+(currentStep+1)+")",fadetime);
 }
 else{
  setcolor("#999999","#DDDDDD");
  setTimeout("changetele(0)",waittime);
 }
}
function setcolor(maincol,detailcol){
 var teletxt = document.getElementById("teletext_inner");
 var detail0 = document.getElementById("teledetail0");
 var detail1 = document.getElementById("teledetail1");
 var detail2 = document.getElementById("teledetail2");
 teletxt.style.color=maincol;
 if(detail0!=null)detail0.style.color=detailcol;
 if(detail1!=null)detail1.style.color=detailcol;
 if(detail2!=null)detail2.style.color=detailcol;
}
// Comment
