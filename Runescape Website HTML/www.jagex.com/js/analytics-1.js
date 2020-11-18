var __utm = function(options){

 
 
 

 var that = this;
 var timer;
 var maxScroll = 0;

 var settings = $.extend({
  
  label: document.location.toString(),
  load: true,
  scroll: true,
  viewport: true
 }, options);

 if(typeof(__utmStart) == "undefined"){
  settings.load = false;
 }
 else{
  timer = __utmStart;
 }


 
 
 


 
 function trackTimerEvent(c,e){

  var v = new Date().getTime() - timer;
  
  trackEvent(c,e,v);
  
  trackEvent(c,e+" ("+(Math.round(v/250)/4)+")"); 

 }


 
 
 

 
 this.trackEvent = function(c,e,v){

  if(typeof(v)=="undefined") v=null;
  try{pageTracker._trackEvent(c, e, settings.label, v)}catch(x){}


 }


 
 
 

 
 if(settings.load){

  
  $(function(){ trackTimerEvent('PageLoads', 'DOMContentLoaded') })

  
  $(window).load(function(){ trackTimerEvent('PageLoads', 'Loaded'); })

 }

 
 if(settings.viewport){

  
  $(window).load(function(){
   var w = $(window).width();
   var h = $(window).height();
   
   trackEvent('Viewport', 'Width', w);
   trackEvent('Viewport', 'Height', h);
   
   trackEvent('Viewport', 'Width ('+(Math.round(w/25)*25)+')'); 
   trackEvent('Viewport', 'Height ('+(Math.round(h/25)*25)+')');
  });

 }

 
 if(settings.scroll){

  $("a").click(function(e){
   if(e.currentTarget.pathname != window.location.pathname && !e.isDefaultPrevented()){
    $().scroll(); 
    var v = maxScroll + $(window).height(); 
    
    trackEvent('Scroll', 'Vertical', v);
    
    trackEvent('Scroll', 'Vertical ('+Math.round(v / 25) * 25+')'); 
   }
  });

  $().scroll(function(){
   var h = $().scrollTop();
   if(h > maxScroll){
    maxScroll = h;
   }
  });

 }

}