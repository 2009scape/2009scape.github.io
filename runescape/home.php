<?php
define('PAGE_TAB', 1);
define('PAGE_TITLE', 'Homepage');

require_once("global.php");
require_once("header.php");

 $_SESSION['came_from'] = $_SERVER['REQUEST_URI'];
?>

<style type="text/css">/*\*/@import url(<?php echo WWW; ?>/css/<?php echo $skin; ?>/home-28.css);/**/</style>
<div id="content">
<div id="left">
    <a href="<?php echo WWW; ?>/create" class="createbutton" onmouseover="h(this)" onmouseout="u(this)">
        <img src="<?php echo WWW; ?>/img/main/skins/<?php echo $skin; ?>/create.jpg" alt="Create a Free Account - Start your adventure today!" />
        <span class="shim"></span>
    </a>
    <div id="features">
        <div class="narrowHeader"><img src="<?php echo WWW; ?>/img/main/titles/websitefeatures.png" alt="Website Features" /></div>
        <div class="section">
		<div class="feature">
		<img src="<?php echo WWW; ?>/img/main/home/feature_kbsearch_icon.jpg" alt="" />
        <div class="featureTitle">Search RuneScape.com</div>
        <div class="featureDesc" style="PADDING-RIGHT: 2px; PADDING-LEFT: 2px; PADDING-BOTTOM: 0px; PADDING-TOP: 2px">
		<form action=<?php echo WWW; ?>/kbase/search.ws>
		<input type=hidden value=1 name=keywords_chk> 
		<input type=hidden value=1 name=body_chk> 
		<input type=hidden value=1 name=title_chk> 
		<input type=hidden value=1 name=description_chk> 
        <div class=searchbar>
		<input id=kbsearch_in maxLength=300 name=search_query> 
		<input id=kbsearch_button type=submit value=Go> 
		</div></form></div>
		</div>
		
            <div class="feature">
                <img src="<?php echo WWW; ?>/img/main/home/feature_poll_icon.jpg" alt="" />
                <div class="featureTitle">Latest Poll - 17-Oct-2013 </div>
                <div class="featureDesc">Authentication Server Maintenance - (Free/Member)<A 
                href="<?php echo WWW; ?>/poll">Vote Here...</A></div>
            </div>

            <div class="feature">
                <img src="<?php echo WWW; ?>/img/main/home/feature_upgrade_icon.jpg" alt="Upgrade Your Account" />
                <div class="featureTitle">Upgrade Your Account</div>
                <div class="featureDesc">Find out about members? benefits and <A 
                href="members">Upgrade Here...</A></DIV>
            </div>

			
			
            <div class="feature" style="background-image: url(<?php echo WWW; ?>/img/main/home/featured_feature_bg.png)">
                <img src="<?php echo WWW; ?>/img/main/home/feature_gamebar_icon.jpg" alt="Old School Runescape" />
                <div class="featureTitle">Old School Runescape</div>
                <div class="featureDesc">Experience RuneScape as it was back in 2007.<A 
                href="oldschool/playoldschool.php">Click here to play...</A></div>
            </div>

            <div class="feature">
                <img src="<?php echo WWW; ?>/img/main/home/feature_rsc.jpg" alt="RuneScape Classic" />
                <div class="featureTitle">RuneScape Classic</div>
                <div class="featureDesc">Experience RuneScape in its original glory.<A 
                href="classicapplet/playclassic.php">Click here to play...</A></div>
            </div>            
           

			
			
        </div>
    </div>

	
<DIV id=articles>
<DIV class=narrowHeader><IMG alt="RuneScape Articles" src="<?php echo WWW; ?>/img/main/titles/runescapearticles.png"></DIV>
<DIV class=section>
<DIV class=articlesBody>
<DIV class=articlesTitle><IMG alt="Article of the Week" 
src="<?php echo WWW; ?>/img/main/home/aow_title.png"></DIV>

<DIV class=aowBody>
<DIV class=aowHeight>
<DIV class=aowImage><A 
href="<?php echo WWW; ?>/kbase/guid/herblore_the_potions"><IMG alt="" 
src="<?php echo WWW; ?>/img/main/kbase/aow_icons/minigames.jpg"></A></DIV>
<P class=aowTitle>Herblore - The Potions</P>
<P>There are advantages in using the overload potion - as long as you can 
survive the disadvantages! <A 
href="<?php echo WWW; ?>/kbase/guid/herblore_the_potions">More...</A></P>
</DIV>
  </DIV>
      </DIV>
<DIV class=articlesFooter></DIV></DIV>
   </DIV>
</DIV>
	
	
	
	
	
	
<div id="right">
    <a href="<?php echo WWW; ?>/game" id="playbutton" onmouseover="h(this)" onmouseout="u(this)" onclick="if(!this.j){this.href+='?j=1';this.j=true;}">
        <img src="<?php echo WWW; ?>/img/main/skins/<?php echo $skin; ?>/play.jpg" alt="Play RuneScape - Continue Your Adventure" />
        <span class="shim"></span>
    </a>
    <div id="recentnews">
        <div class="sectionHeader">
            <div class="left">
                <div class="right">
                    <div class="plaque">
                        <img src="<?php echo WWW; ?>/img/main/titles/recentnews.png" alt="Recent News" />
                    </div>
                </div>
            </div>
        </div>
        <div class="section">

           <div class='sectionBody'>
<div class='sectionHeight'>
            <?php
            $news_qry = dbquery("SELECT * FROM web_news WHERE main_news='1' ORDER BY date DESC LIMIT 1");
			
            if ($news_qry->num_rows > 0) {
                while ($news = $news_qry->fetch_assoc()) {
                    echo "
                        
                            <div class='recentNews'>
                                <div class='newsTitle'>
                                    <h3>" . $news['title'] . " </h3>
                                    <span>" . date('d-M-Y', strtotime($news['date'])) . " </span>
                                </div>		
                                   <A class=newsImage href='viewnews/id/" . $news['id'] . "'>
								   <img alt='' src='img/news/icons/large/".$news['pic_big'] .".jpg'></A>
								   <p>" . $news['description'] . " <a href='viewnews/id/" . $news['id'] . "'>Read more...</a></p></div>
                            ";
                }
            }
            ?>
			
			</div>
</div>
			<?php
            $news_qry = dbquery("SELECT * FROM web_news WHERE main_news='0' ORDER BY date DESC LIMIT 0,3");

            if ($news_qry->num_rows > 0) {
                while ($news = $news_qry->fetch_assoc()) {
                    echo '
                        <div class="sectionBody">
                            <div class="recentNews">
                                <div class="newsTitle">
                                    <h3>' . $news['title'] . ' </h3>
                                    <span>' . date('d-M-Y', strtotime($news['date'])) . '</span>
                                </div>							
								   <img src="img/news/icons/'.$news['pic'] .'.jpg"/img>
                                <p>' . $news['description'] . ' <a href="viewnews/id/' . $news['id'] . '">Read more...</a></p>
                            </div>
                        </div>';
                }
            }
            ?>

            <div class="moreArchive"><a href="listnews">Browse our news archive</a></div>
        </div>
    </div>
</div>

<?php
include_once("./footer.php");
?>
