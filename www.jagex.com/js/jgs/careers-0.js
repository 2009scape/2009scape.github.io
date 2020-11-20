




$(function(){


 
  $("a.Tab").click(function(ev){

    ev.preventDefault();
    changeTab($(this),-1,false);

   }
  );
 
 
 
  $("#NewJobList a").click(function(ev){

    ev.preventDefault();
    if(currentPage == 2){
     JobEvent($(this));
    }
    else {
     changeTab($(this),2,true);
    }

   }
  );
 

 SetupEvents();

})



 function changeTab(object,tid,callback){

  
  if(tid >= 0){
   var $this = $("a.Tab:eq("+tid+")");
  }
  else {
   var $this = object;
  }
  $this.parent().children("a.Tab").removeClass("TabSelected");
  $this.addClass("TabSelected");
  tid = $("a.Tab").index($this);
  currentPage = tid;
  
  $.ajax({
   url: '/careers/ajax/content.ws?t='+tid,
   success: function(data) {
    $('.BoxBody').html(data);
    
    tb_init("a.thickbox");
    SetupEvents();
    if(callback){
     JobEvent(object);
    }
   },
   error: function() {
    alert('Ajax Failed');
   }
  });

 }



 function changePicture(pictureid){

  
  if(!$("#PicturePrimary:visible").size()) {
   
   ObjectIn = $("#PicturePrimary");
   ObjectOut = $("#PictureSecondary");
  }
  else {
   
   ObjectIn = $("#PictureSecondary");
   ObjectOut = $("#PicturePrimary");
  }
  
  ObjectIn.attr('src', '/img/jgs/careers/pictures/'+pictures[pictureid][pFilename]+'.jpg');
  setTimeout(function(){pictureFade(ObjectIn,ObjectOut,pictureid)}, 250)

 }



 function pictureFade(ObjectIn,ObjectOut,pictureid){

  
  ObjectOut.fadeOut(500);
  ObjectIn.fadeIn(500);
  
  
  textTimeout = (((500/2)+(500/2))/2).toFixed(0);
  setTimeout(function(){pictureText(ObjectIn,pictureid)}, textTimeout)

 }



 function pictureText(ObjectIn,pictureid){


  $("#ViewerInfo").text(pictures[pictureid][pCaption]);
  ObjectIn.attr('alt', pictures[pictureid][pName]);
  ObjectIn.attr('title', pictures[pictureid][pName]);
  
 }



 function changeJob(internal){

  
  try{pageTracker._trackPageview('/careers/vacancies.ws?j='+internal+'')}catch(x){}; try{_pageTracker._trackPageview('/careers/vacancies.ws?j='+internal+'')}catch(x){}


  $.ajax({
   url: '/careers/ajax/job.ws?j='+internal,
   success: function(data) {
    $('#ContentDisplay').html(data);
    $('#JobNav a').removeClass('NavSelected');
    $('#JobNav a[class='+internal+']').addClass('NavSelected');
   },
   error: function() {
    alert('Ajax Failed');
   }
  });

 }



 function changeLifeTab(internal){

  
  try{pageTracker._trackPageview('/careers/life.ws?lt='+internal+'')}catch(x){}; try{_pageTracker._trackPageview('/careers/life.ws?lt='+internal+'')}catch(x){}


  $.ajax({
   url: '/careers/ajax/life.ws?lt='+internal,
   success: function(data) {
    $('#ContentDisplay').html(data);
    $('#LifeNav a').removeClass('NavSelected');
    $('#LifeNav a[class='+internal+']').addClass('NavSelected');
   },
   error: function() {
    alert('Ajax Failed');
   }
  });

 }



 function splitClass(inputClass){

  
  newClass = inputClass.split(/ /);
  return newClass;

 }



 function SetupEvents(){

  
  
  
  $("#JobNav a").click(function(ev){

    ev.preventDefault();
    JobEvent($(this));

   }
  );
  
  $("#LifeNav a").click(function(ev){

    ev.preventDefault();
    LifeEvent($(this));

   }
  );

  $("a.PicSelect").click(function(ev){

    ev.preventDefault();
    if(!$("#PictureViewer:visible").size()) {
     $("#PictureViewer").css('display', 'block');
     $("#VideoViewer").css('display', 'none');
    }
    pictureid = $("a.PicSelect").index($(this));
    changePicture(pictureid);

   }
  );

  $("a.VidSelect").click(function(ev){

    ev.preventDefault();
    videoid = $("a.VidSelect").index($(this));
    

    swfobject.embedSWF(
     "http://www.jagex.com/img/jgs/careers/videos/mark_gerhard.swf",
     "VideoViewer",
     "568",
     "378",
     flashVer,
     "",
     {
      trailerPath: "http://www.jagex.com/img/jgs/careers/videos/",
      skinPath: "http://www.jagex.com/img/jgs/careers/videos/player/"
     },
     {allowScriptAccess: "always"}
    );
    
    if(!$("#VideoViewer:visible").size()) {
     $("#PictureViewer").css('display', 'none');
     $("#VideoViewer").css('display', 'block');
    }

   }
  );
  
  $(".BoxBody a[href$=careers/faq.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers/faq.ws')}catch(x){}; try{_pageTracker._trackPageview('/careers/faq.ws')}catch(x){}


    changeTab($(this),4,false);

   }
  );
  
  $(".BoxBody a[href$=careers/agencies.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers/agencies.ws')}catch(x){}; try{_pageTracker._trackPageview('/careers/agencies.ws')}catch(x){}


    changeTab($(this),3,false);

   }
  );
  
  $(".BoxBody a[href$=careers/guidance.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers/guidance.ws')}catch(x){}; try{_pageTracker._trackPageview('/careers/guidance.ws')}catch(x){}


    changeTab($(this),3,false);

   }
  );
  
  $(".BoxBody a[href$=careers/life.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers/life.ws')}catch(x){}; try{_pageTracker._trackPageview('/careers/life.ws')}catch(x){}


    changeTab($(this),1,false);

   }
  );
  
  $(".BoxBody a[href$=careers/vacancies.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers/vacancies.ws')}catch(x){}; try{_pageTracker._trackPageview('/careers/vacancies.ws')}catch(x){}


    changeTab($(this),2,false);

   }
  );
  
  $(".BoxBody a[href$=careers/index.ws]").click(function(ev){

    ev.preventDefault();
    try{pageTracker._trackPageview('/careers')}catch(x){}; try{_pageTracker._trackPageview('/careers')}catch(x){}


    changeTab($(this),0,false);

   }
  );
 
 }



 function JobEvent(object){

  
  var $this = object;
  internal = splitClass($this.attr("class"));
  internal = internal[0];
  if(internal != ""){
   changeJob(internal);
  }
  else {
   changeTab(object,2,false);
  }

 }



 function LifeEvent(object){

  
  var $this = object;
  internal = splitClass($this.attr("class"));
  internal = internal[0];
  if(internal != ""){
   changeLifeTab(internal);
  }
  else {
   changeLifeTab(object,1,false);
  }

 }



 function enableVideos(){


  if (swfobject.hasFlashPlayerVersion(flashVer)){
  
   var vidHTML="<h4>Videos</h4>";
    
   for (i=0;i<videos.length;i++){
    var vidHTML=vidHTML+"<a href='?v="+i+"' class='VidSelect'><img src='http://www.jagex.com/img/jgs/careers/videos/"+videos[i][vFilename]+"_thumb.jpg' alt='"+videos[i][vName]+"' title='"+videos[i][vName]+"' /></a>";
   }
    
   var vidHTML=vidHTML+"<br class='clear'/>";
   
   var conHTML="<span id='VideoViewer'> </span>";
 
   $('#Selector').prepend(vidHTML);
   $('#Viewer').append(conHTML);
  
  }
  
 }
