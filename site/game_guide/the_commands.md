---
title: Commands
tags: game_guide
layout: guide
---
<div class="headings">
  <span class="headertitleleft"><span class="headertitleright">Commands</span></span>
</div>

### Players

- ::highscores - launches the highscores for the world you are logged into
- ::discord - launches a link to for the invite to our discord
- ::resetpassword - resets your password
- ::stats - shows cool stats
-  ::quests - display currently implemented quests
- ::playsong - Plays a specific song
- ::shop - Opens the credit shop
- ::ge buying - Opens up the section of what players are buying on the ge.
- ::ge selling - Opens up the section of what players are selling on the ge.
- ::ge search - Allows you to search for an item that possibly could be being sold or bought on the ge.
- ::ge bots - Opens up the section of what bots are selling on the ge.
- ::ge botsearch - Allows you to search for an item that a bot could be possibly selling on the ge.
- ::reply - similar to tab where you can respond right away to someone.
- ::loc - prints the player's location
- ::togglexp - toggles the xp drop interface on or off.
- ::xpconfig - used for configuring the xp drop interface
    - ::xpconfig track recent/total - choose whether to track most recent or total xp
    - ::xpconfig mode increment/instant - whether the total xp updates incrementally (when the xp drops reach it) or instantly (when the xp is gained) only applies to when total xp is being tracked
- ::toggleslayer - While you have a task you can toggle the slayer counter!
- ::debug - enable debug info
- ::fpson - shows the fps overlay (overwrites the xp drop interface until client is restarted)

### Moderators

**Can use Player Commands too**
- ::pnpc - Transforms player in an npc
- ::jail - Jails a player in Varrock's Jail cell
- ::players - Shows what players are online
- ::kick - Kicks a player
- ::mute - Mutes a player

### Admins

**Can use Moderator & Player Commands too**
<ul>
  <b>Animation Commands </b>
  <br>
  <br>
  <ul>
    <li> ::anim - Forces the player to play an animation. </li>
    <li> ::loopanim - Forces the player to loop an animation. ::loopanim i.d amount </li>
    <li> ::ranim - Forces the player to render an animation </li>
    <li> ::ranimreset - Resets player's render animation to default. </li>
    <li> ::npcareaanim - Forces animation + messages on all npcs in a radius of 10. </li>
  </ul>
  <br>
  <br>
  <b>Spawn Commands</b>
  <br>
  <br>
  <ul>
    <li> ::npc - Spawns an npc with given i.d </li>
    <li> ::item - spawns an item with given i.d </li>
    <li> ::object - spawns object with given i.d at player's location. </li>
  </ul>
  <br>
  <br>

  <b>Teleport Commands </b>
  <br>
  <br>
  <ul>
    <li> ::to - teleports you to a specific place. EX: ::to varrock </li>
    <li> ::tele - teleports you to a location. EX ::tele x y z </li>
    <li> ::teleto - teleports you to a player </li>
    <li> ::teletome - teleports a player to you </li>
    <li> ::home - teleports you to lumbridge </li>
    <li> ::tostar - teleports you to shooting star </li>
  </ul>
  <br>
  <br>
  <b>Developer Commands</b>
  <br>
  <br>
  <ul>
    <li> ::farmkit - gives the items you'll need for farming.</li>
    <li> ::spellbook - swaps your spellbook between normal, ancient and lunar.</li>
    <li> ::killme - kills your player</li>
    <li> ::1hit - Kills any monsters with 1 hit.</li>
    <li> ::god - gives you overly boosted stats.</li>
    <li> ::max - gives max stats.</li>
    <li> ::bank - opens your bank</li>
    <li> ::finishtask - Finishe's a player's slayer task.</li>
    <li> ::rolltrawlerloot - gets random fishing trawler loot sent to your bank.</li>
    <li> ::allmusic - Unlocks all music.</li>
    <li> ::allquest - Unlocks all quests.</li>
    <li> ::setslayerpoints : Sets the player's slayer points.</li>
    <li> ::submit - Creates a new shooting star</li>
    <li> ::resetsprite - Resets the timer in which the sprite stays waiting.</li>
    <li> ::setlevel - sets a skill to a specific level</li>
    <li> ::update - updates the server </li>
    <li> ::cancelupdate - cancels the update before the timner counts all the way down.</li>
    <li> ::announce - creates an announcement in chat </li>
  </ul>

  <br>
  <br>

  <b>Moderation Commands for Admins</b>
  <br>
  <br>
  <ul>
    <li>::empty - empties a player's inventory</li>
    <li>::emptybank - removes everything from your bank </li>
    <li>::setpasswordother - sets another player's password for them.</li>
    <li>::removeitem - removes an item from a player's inventory. ::removeitem user_name item_id item_amount</li>
    <li>::ban - bans a user for a set amount of time. ex: ::ban 500.</li>
  </ul>
  <br>
  <br>
  <b>Fun Commands</b>
  <ul>
    <li>::mrboneswildride - Plays a funny animation off a player in a minecart repeating "I want to get off Mr. Bones Wild Ride" over and over again.</li>
    <li>::invis - makes you invisible to other players.</li>
    <li>::potato - gives a rotten potato</li>
  </ul>
</ul>

### Singleplayer Exclusive Commands
(**Scripts must be set to true in your default.config**)

- ::scripts - gives a list of botting scripts you can use.</li>
- ::stopscript - stops the script you are running.</li>

{% include further-help.html %}