---
title: Commands
tags: game_guide
layout: guide
---
<div class="headings">
  <span class="headertitleleft"><span class="headertitleright">Commands</span></span>
</div>

### Players

- ::resetpassword - Resets your password.
- ::stats - Opens the statistics book for you or the specified player.
- ::quests - Opens the quests interface listing current implementations.
- ::playsong - Plays a specific music track.
- ::playjingle - Plays a sound effect by ID.
- ::playid - Plays a music track by music ID.
- ::shop - Opens the credit shop.
- ::ge buying - Opens the list of Grand Exchange buy offers from players.
- ::ge selling - Opens the list of Grand Exchange sell offers from players.
- ::ge search - Searches player Grand Exchange offers for an item.
- ::ge bots - Opens the list of items sold by GE bots.
- ::ge botsearch - Searches GE bot offers for an item.
- ::ge mute - Toggles Grand Exchange news announcements on or off.
- ::reply - Opens a reply prompt to your last DM. Same as pressing tab.
- ::loc - Prints detailed information about your current location.
- ::pos - Prints your current position.
- ::coords - Prints your current coordinates.
- ::region - Prints your current region ID.
- ::debug - Toggles debug mode.
- ::calcaccuracy - Calculates your current chance to hit a given NPC.
- ::calcmaxhit - Calculates your current maximum hit.
- ::calcdefence - Calculates your current raw defence values against a given NPC.
- ::botinfo - Prints debug information about a bot.
- ::npcsearch - Searches for NPCs by name.
- ::itemsearch - Searches for items by name.
- ::commands - Lists available commands.
- ::commandsearch - Searches available commands by keyword.
- ::muteglobal - Toggles global chat on or off.
- ::rules - Shows the game rules.
- ::confirmrules - Confirms that you have read the rules.
- ::fpson - shows the fps overlay
- ::fpsoff - removes the fps overlay

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
