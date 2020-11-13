







 
$(function(){

  $("#news").fanTabulous();
  
  $("#gameslistBody a.play").css({textDecoration: 'none'});

  
  
 $("#pageform input").keypress(function(e){
  if ((e.which && e.which == 13 )|| (e.keyCode && e.keyCode==13)){
   $('#pageform .submit').click();
   return false;
  }else{
   return true;
  }
 });


 $("a.Tab").click(function(ev){
   ev.preventDefault();
   
   var $this = $(this);

   $this.parent().children("a.Tab").removeClass("TabSelected");

   $this.addClass("TabSelected");

   switch($this.attr("id")){
    case 'allgamesTab':
     changeTab(iAllGamesTab);
     break;
    case 'gameslistTab':
     changeTab(iTopGamesTab);
     break;
    case 'iphonegamesTab':
     changeTab(iIphoneGamesTab);
     break;
   }
  }
 );


 $("#genreFilter a.Button").click(function(ev){
   ev.preventDefault();
   var $this = $(this);
   var strGenre = $this.find("b").attr("innerHTML");
   
   changeFilter(genreIdFromString(strGenre))
  }
 );

 setGenreButtons();


 $("a.PageControl").click(function(ev){

  ev.preventDefault();

  var $this = $(this);

  var $pagecontrol = $("#PageControl");
  var $currentpageinput = $("#PageControl #pageform input.currentpage");
  var $numpagesinput = $("#PageControl #pageform input.numpages");

  var numpages = Number($numpagesinput.val());

  var currentpage = Number($currentpageinput.val());

  

  if ($this.hasClass("next")){
    
    if ( currentpage < numpages ) changePage($pagecontrol,currentpage+1);
  }else if ($this.hasClass("previous")){
    
    if ( currentpage > 1 ) changePage($pagecontrol,currentpage-1);
  }else if ($this.hasClass("first")){
    
    changePage($pagecontrol,1);
  }else if ($this.hasClass("last")){
    
    changePage($pagecontrol,numpages);
  }
  return false;
 });

 })



 function genreStringFromId(id){

  var i;
  for ( i=0 ; i<genres.length ; i++){
   if ( genres[i][iGenreId] == id )return genres[i][iGenreName];
  }
 }



 function genreIdFromString(strGenre){

  var i;
  for ( i=0 ; i<genres.length ; i++){
   if ( genres[i][iGenreName] == strGenre )return genres[i][iGenreId];
  }
 }



 function gameDirName(game){

  return game[iDirIndex];
 }



 function gameName(game){

  return game[iNameIndex];
 }



 function bJava(game){

  return game[iJavaIndex];
 }



 function bIphone(game){

  return game[iIphoneIndex];
 }



 function gameGenre(game){

  return genreStringFromId(game[iGenreIndex][0]);
 }



 function gameMatchesGenre(game,iGenre){

  if (iGenre==0)return true; //All!
  
  
  var i=0;
  if (game[iGenreIndex][i]==iGenre )return true;
  return false;
 }



 function validatePageNum(){

  var val=$("#PageControl .changepage").val();
  if (isNaN(val)){
   
   alert("Invalid Page Number");
   return false;
  }else{
   iP=Number(val);
   
   
   
   if (iP>nPages){
    alert("You selected page "+iP+" there are only "+nPages+" pages");
    return false;
   }
   if (iP<1){
    
    alert("Page number must be greater than zero");
    return false;
   }
   changePage($("PageControl"),iP);
  }
  return false;
 }



 function changePage(oPageControl,newpage){

  page=newpage;

  updateGames();
 }



 function changeTab(newtab){

  
  tab=newtab;
  page=1;
  updateGames();
 }



 function changeFilter(genre){

  
  filter=genre;
  page=1;
  updateGames();
 }



 function updateGames(){


  var i;
  var nMatched=0;
  var strReport="";
  var panelNum=0;

  switch(tab){
   case iTopGamesTab:
    $("#iphoneintro").hide();
    $("#genreFilter").hide('fast');
     
    for (i=0;i<top_games.length;i++){
     nMatched++;
     if ( nMatched>(page-1)*game_per_page_list[tab] && nMatched<=(page)*game_per_page_list[tab] ){
      panelNum++;
      updateGamePanel(panelNum,top_games[i]);
     }
    }
    break;
   case iAllGamesTab:
    $("#iphoneintro").hide();
    $("#genreFilter").show('fast');

    for (i=0;i<games.length;i++){
     if (gameMatchesGenre(games[i],filter)){
      nMatched++;

      if ( nMatched>(page-1)*game_per_page_list[tab] && nMatched<=(page)*game_per_page_list[tab] ){
       panelNum++;
       updateGamePanel(panelNum,games[i]);
      }
     }
    }
    break;
   case iIphoneGamesTab:
    $("#genreFilter").hide('fast');
    for (i=0;i<games.length;i++){
     if (bIphone(games[i])){
      nMatched++;

      if ( nMatched>(page-1)*game_per_page_list[tab] && nMatched<=(page)*game_per_page_list[tab] ){
       panelNum++;
       updateGamePanel(panelNum,games[i]);
      }
     }
    }
    break;
  }

  setGenreButtons();

  
  for (i=panelNum+1;i<=game_per_page_list[0];i++){
   $("#game"+i).hide();
  }

  if (tab==iIphoneGamesTab)
   $("#iphoneintro").show();

  

  nPages=Math.floor((nMatched-1)/game_per_page_list[tab]+1); 

  
  $("#genreFilter a.Button").removeClass("Button14Selected").removeClass("Button14").addClass("Button14");
  $("#genre"+genreStringFromId(filter)).addClass("Button14Selected");

  
  setPageControl(page,nPages);
 }



 function setGenreButtons(){

  $(".game .gameTitle a.Button14,.iphonegame .gameTitle a.Button14").unbind("click").click(function(ev){
    ev.preventDefault();
    var $this = $(this);
    var strGenre = $this.find("b").attr("innerHTML");
    if ( strGenre == "iPhone" ){
     if ( tab == iIphoneGamesTab)return false;
     tab=iIphoneGamesTab;
     $("#games a.Tab").removeClass("TabSelected");
     $("#iphonegamesTab").addClass("TabSelected");
     page=1;
     updateGames();
    }else{
     tab=iAllGamesTab;
     $("#games a.Tab").removeClass("TabSelected");
     $("#allgamesTab").addClass("TabSelected");

     changeFilter(genreIdFromString(strGenre))
    }
   }
  );
 }



 function updateGamePanel(panelNum,game){

  
  var strName=gameName(game);
  if (tab==iTopGamesTab)strName = panelNum+". "+strName

  var $gamePanel = $("#game"+panelNum);

  var strGenre=gameGenre(game);
  var href2="http://www.jagex.com/?list="+tab+"&amp;page="+page+"&amp;genre="+strGenre;
  
  var href4="http://www.jagex.com/downloadapp_fixme";
  


  switch (gameDirName(game)){
   case "starcannon":
    var href4="http://itunes.apple.com/us/app/starcannon/id365714186?mt=8";
    break;
   case "bouncedown":
    var href4="http://itunes.apple.com/us/app/bouncedown/id338544816?mt=8";
    break;
   case "minerdisturbance":
    var href4="http://itunes.apple.com/us/app/miner-disturbance/id374275550?mt=8";
    break;
  }

  var info_url = game[iPlayURLIndex];
  if(gameDirName(game) != 'runescape' && gameDirName(game) != 'arcanistsmulti' && gameDirName(game) != 'waroflegends'){
   var info_url = game[iPlayURLIndex]+'info.ws';
  }
  var play_url = game[iPlayURLIndex]+'play.ws';
  if(gameDirName(game) == 'runescape' || gameDirName(game) == 'waroflegends'){
   var play_url = info_url;
  }

  var image="http://www.jagex.com/img/jgs/index/games/"+gameDirName(game)+".jpg";

  
  var strHTML ="<div class='gameTitle'><h4>"+strName+"</h4>";

  
  strHTML = strHTML+"<a title='"+strGenre+"' style='margin: 7px 7px 0pt 0pt; vertical-align: middle; float: right; position: relative; display: inline;' class='Button Button14 "+genreColour(strGenre)+"back LightGrey' href='"+href2+"'><span><span><span><b>"+strGenre+"</b></span></span></span></a>"

  
  
  if (tab==iIphoneGamesTab || gameDirName(game)=="starcannon"|| gameDirName(game)=="minerdisturbance" || gameDirName(game)=="bouncedown")strHTML = strHTML+"<a title='iPhone' style='margin: 7px 7px 0pt 0pt; vertical-align: middle; float: right; position: relative; display: inline;' class='Button Button14 blackback LightGrey' href='http://www.jagex.com?list=2&amp;amp;genre=iphone'><span><span><span><b>iPhone</b></span></span></span></a>"

  
  strHTML = strHTML + "</div>";

  
  
  

  
  if (tab==iIphoneGamesTab){
   strHTML = strHTML+"<a class='play' href='" + info_url + "'><img src='" + image + "?2' alt='" + strName + "' title='" + strName + "' /><span class='gameInfo'>?</span></a><a href='" + href4 + "' class='gamePlay'>download now</a>";
  }else{
   strHTML = strHTML+"<a class='play' href='" + info_url + "'><img src='" + image + "?2' alt='" + strName + "' title='" + strName + "' /><span class='gameInfo'>?</span></a><a href='" + play_url + "' class='gamePlay'>play now</a>";
  }

  
  $gamePanel.html(strHTML).show();
 }





  function setPageControl(page,nPages){

   
    $("#PageControl #pageform input#page").val(page);
  $("#PageControl #pageform input.numpages").val(nPages);
  $("#PageControl #pageform input.currentpage").val(page);
    $("#PageControl #pageform span.numpages").html(nPages);
   if (nPages>1){
     
     if (page>1){
      $("#PageControl .leftButtons .PageControl").css({display:"inline-block"});
    }else{
      $("#PageControl .leftButtons .PageControl").hide();
    }
    if (page<nPages){
      $("#PageControl .rightButtons .PageControl").css({display:"inline-block"});
     }else{
      $("#PageControl .rightButtons .PageControl").hide();
     }
     $("#PageControl").show();
   }else{
     $("#PageControl").hide();
   }
  }


