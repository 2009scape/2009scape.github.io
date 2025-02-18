---
title: Temple of Ikov and The Dig Site (and more)
tags: news
layout: newspost
date: 2024-03-17 00:00:00 +0000
authors: Update Bot
excerpt: "There have been lots of changes in Gielinor, including two new quests! Temple of Ikov and The Dig Site have been implemented..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

There have been lots of changes in Gielinor, including two new quests! Temple of Ikov and The Dig Site have been implemented. Full list of changes follows:


- Fixed Family Crest getting stuck when the drop from Chronozon is not picked up (fight is now repeatable if item is lost)
- Fixed crafting guild tanning interface<br />
Rewrote master crafter dialogue<br />
Added missing master crafter dialogues<br />
Fixed issue preventing crafting guild entry with trimmed crafting cape
- Fixed line that should be spoken by player in Philop dialogue
- Fixed the organ animation in Lumbridge
- Changed ::allow_aggro admin command to ::allowaggro true/false for consistency with other commands<br />
Added message for ::allowaggro activation<br />
Can now check ::allowaggro without toggling it by running it without a trailing true/false
- Fixed unnoting items failing to unnote correctly when quantity is equal to free slots
- Al Kharid warriors now help each other in combat
- Fixed level 25 black guard stats and animations
- Implemented The Dig Site quest
- Improved ::ge interface handling
- Bats now only drop bat wings during Rag and Bone Man quest
- Corrected contents of Varrock newspaper and refactored related code
- Added teleblock message for ancient magicks
- Rewrote bone burying and corrected xp rates
- Fixed rock crab spawns on Waterbirth island
- Reverted Askeladden's spawn to the previous location
- Added docker-compose file
- Karamja bug fixes and improvements<br />
<br />
Improved Brimhaven NPC interactions<br />
Both NPCs right click options now function<br />
Dialogue converted to Kotlin for both NPCs<br />
Minor dialogue modifications<br />
Converted the Karamja Option Plugin to a Karamja Listener and Brimhaven Listener<br />
Removed some duplicated handlers such at the ship yard gate and cart<br />
Corrected the coins shown when paying to enter the Brimhaven dungeon<br />
The palm tree now drops the leaf to the ground when shaken and has an animation
- Cleaned up more server name references and related strings
- Fletching now checks for inventory space before fletching darts, headless arrows, and arrows
- Fixed bank guard dialog typo
- Added Zanaris Evil Chicken Lair
- Fixed issue with Man (ID 1086) not being able to be pick pocketed
- Stronghold of Player Safety now checks if inventory is full before awarding lamp rewards
- Fixed issue where some scripts weren't cleared when the player moves
- Ported Peksa from Java to Kotlin
- Music fixes<br />
<br />
Corrected music locations for Tolna's rift<br />
The Digsite and Exam Centre now correctly play Lullaby and Venture all the time<br />
Corrected borders for Venture 2, which now correctly plays in the dungeons underneath the Digsite<br />
Corrected borders for Chain of Command, which now correctly plays in all of the Temple of Ikov dungeon (and the two versions of the boots of lightness dungeon)<br />
Added a new track, the brine rat cave now plays Rising Damp
- Fixed issue where the player could be given stacks of 0 items
- Fixed fletching blurite c'bow
- Making sets of bolts, arrows and headless arrows no longer continues indefinitely
- Replaced item IDs in construction code with constants
- Implemented pet shoo-away
- Implemented auto splitting of excessively long dialogue lines<br />
Many new farming-related player messages added, and some existing messages updated<br />
Raking animation updated<br />
Herb picking animation updated<br />
Digging up farming patch animation updated<br />
Plant cure animation updated<br />
A scarecrow can be retrieved from a flower patch by digging it up with a spade<br />
Picking fruit/berries stops when running out of inventory space<br />
The player can no longer dig up a tree they have planted before chopping it down
- Implemented Temple of Ikov quest
- Failing to clean herb message is now authentic
- Updated release script to use new website update post layout
- Fixed fish caught statistic not saving
- Fixed Santa giving 0 coal
- Removed unused bosses from boss kill counter
- Fixed the Death Plateau quest log<br />
Fixed Druidic Ritual completion message
- Fixed issue preventing some dragonstone jewellery teleports working at level 30 wilderness
- Fixed text for quest cape removal<br />
Quest cape can now be retrieved from the wise old man if both inventory and bank are full when quests are implemented
- Fixed inconsistent and inauthentic messages for fishing<br />
Fixed item grinding consuming the whole stack sometimes<br />
Fixed incorrect Fremennik diary cheese task<br />
Fixed Seer's diary candle task
- Adjusted Varrock armour bonus to be more authentic - 4% for ores up to coal, 3% for ores gold to mithril with tier 2 or 3 and 2% for adamantite with tier 3
- Corrected slayer hint text message formatting
- Corrected typo in Grand Tree quest
- Fixed music for Zanaris, Puro Puro, Lunar Isle and little cave of horrors
- Rewrote Lilly dialogue<br />
Rewrote Eadburg dialogue<br />
Added examine texts for Achietties, Wizard Cromperty and Obli<br />
Corrected seaweed spawn
- Rewrote molten glass blowing<br />
<br />
Fixed animations<br />
Timing has been corrected, now takes 2 ticks instead of 3
- Improved authenticity of many messages<br />
Fixed explorer's ring using a charge when already at 100% energy
- Added message when running out of prayer points<br />
Improved handling of running out of prayer points
- Added some missing XTEA keys
- Fixed bug that could result in players losing Christmas event rewards if their inventory is full
- Implemented news message for achieving max level in all skills
- Replaced current rune kite (h#) shield hard clue rewards with the correct shield items
- Corrected typo in Tree Gnome Village quest
- Corrected examine for dragon bones
- Refactored battlestaff crafting to follow authentic interfaces and timing
- Improved pet handling and fixed some bugs<br />
Players with merged pets will have the merge resolved next time they are dropped
- Fixed Bogrog spirit shard pouch exchange rounding
- Fixed stairs around Castle Wars
- Fixed pack yak scroll deleting items when bank is full
- Corrected music for Tolna's rift and Sorceress's Garden
- Bot dialogue now always starts with uppercase character<br />
Fixed hard-coded server name references<br />
Replaced incorrect use of "Keldagrim" with "Gielinor"
- Fixed issue where Halgrive does not replace lost poisoned feed
- Players now kicked out of unimplemented werewolf agility course
- Authenticity improvements for the dramen tree<br />
<br />
The dramen tree now has the highest possible chop speed<br />
Chopping the dramen tree now aborts once the branch has been obtained<br />
The tree spirit no longer uses the rare seed drop table, instead drops nothing<br />
The tree spirit can now be attacked by other players
- Pet rock animations & fixes<br />
<br />
Made the Pet rock two-handed<br />
Changed Pet rock weight to 1 kg<br />
Edited dialogue for the Talk option to be more authentic<br />
Added animation for the Stroke option & a delay for the second message to wait for the animation to finish<br />
Edited dialogue for the Fetch option to be more authentic, added animations & graphics, and added the projectile with graphics<br />
Added animations & graphics for the Stay option
- NPC fixes at:<br />
<br />
Mountain Camp (next to Troll Stronghold)<br />
Jiggig<br />
Gu'Tanoth<br />
Oo'glog
- Dialogue and examine fixes<br />
<br />
Converted Lidio dialogue to Kotlin<br />
Converted Anton dialogue to Kotlin<br />
Added Achietties and updated dialogue file<br />
Updated servant dialogue<br />
Updated Wistan dialogue<br />
Changed examine text of Scrying orb, uncharged & charged<br />
Added examine text to wizard Cromperty<br />
Changed bucket examine text<br />
Updated Unferth dialogue
- Added missing Zanaris examines<br />
Fixed temple, north staircase interaction
- Corrected examine for Dagannoth Bonemeal
- Added music for Chaos Tunnels & Tunnel of Chaos
- Abyss obstacle success rate is now 100% at level 99 (instead of 99%)
- Skillcape dailies reset with other dailies at midnight server time
- Bug fixes for getting stuck in Creature of Fenkenstrain

