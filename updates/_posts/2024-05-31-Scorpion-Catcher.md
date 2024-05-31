---
title: Scorpion Catcher
tags: news
layout: newspost
date: 2024-05-31 00:00:00 +0000
authors: ryannathans
excerpt: "Scorpion Catcher quest has been implemented... and much more..."
modtype: "Lead Developer"
avatar: avatar8fa9.gif
---
Greetings Explorers

There is a new quest! Scorpion Catcher is now available.

Other changes in Gielinor:


- Added drop announcement for dragon platelegs, skirt and black mask (10)
- Refactored bank logic<br />
<br />
Removed some unnecessary complexity from bank logic<br />
Improved handling of banking actions<br />
Now correctly tracks the active bank tab
- Fixed Draynor fishing bots not interacting
- Fixed animations and stats for an ogre<br />
Fixed bone club and butterfly net animations<br />
Fixed black halberd requirements<br />
Fixed stats on unobtainable corrupted pvp equipment
- Implemented save file versioning<br />
Players who likely bought their crafting capes back when the hood was not obtainable will be given the complementary hood<br />
Unlocked Surok's Theme for players who are eligible<br />
Fixed some bugs relating to the handling of edge cases for random events<br />
Fixed tutorial island quest completion<br />
Made it possible to collapse interface stones in resizable HD
- Added the basement area of Tutorial 2 (Learning the Ropes) for the lore
- POH room rotation now correctly updates clipping flags
- Fixed duplicated runecrafting messages
- Fixed issue where vodka was called wine<br />
Fixed drinking wine<br />
Fixed stealing wine in Draynor
- Swapped kalphite guardians for soldiers in side room
- Implemented Scorpion Catcher quest
- Converted tanners to Kotlin<br />
Fixed snake hide tanning<br />
Fixed interaction with Canifis tanner
- Fixed Vinesweeper exploit<br />
Fixed Vinesweeper server crash
- Switching interface tabs no longer closes dialogue
- Fixed Family Crest Chronozon Spawn issue
- Fixed ironman mode being stuck after permadeath
- Removed slayer tasks from NPC config file<br />
Fixed tutorial island text showing for level 3 skills
- Fixed slayer task bugs<br />
<br />
Fixed Elvarg not counting as a green dragon<br />
Fixed some trolls not counting<br />
Fixed some ogres not counting<br />
Fixed some turoths not counting<br />
Fixed kalphite queen not counting correctly
- Fixed bug at end of Fremennik Trials requiring 10 free inventory slots<br />
Fixed typos
- Added jungle tree to the list of 1 chop trees
- Fixed Bork/Surok instanced area music
- Corrected ammo usable on each crossbow
- Corrected NPC IDs for the Keldagrim carts
- Fixed granite lobster foraging
- Corrected music varps, fixes some music unlocks
- Fixed all fired up quest log
- Refactored the Player Safety Stronghold
- Fixed an off-by-one error that made cooking brawlers unobtainable<br />
Reworked the ::npc admin command to take an optional amount argument. Usage: ::npc id [amount] [shouldWalk]<br />
Summoning points now no longer regenerate automatically<br />
Rewrote the ring of life<br />
Reverting a slayer ring to an enchanted gem no longer destroys the item if inventory is full<br />
The inauthentic mounted glory in a POH now respects teleblock<br />
Fixed revenents infinite healing<br />
Winkins' farm exit message is now split correctly<br />
Added egg spawn in front of the chicken shrine in Zanaris and added its authentic use handler to the shrine
- Rewrote grappling, fixes Yanille south shortcut, Catherby skill check and requirements text getting cut off
- Refactored Seer NPC
- Red feedback text is now used when issued commands are invalid<br />
Yellow feedback text is now used when legacy commands are issued
- Improved handling of achievement diary rewards
- Fixed issue where eggs would occasionally spawn out-of-bounds<br />
Added admin command to test egg spawning ::eggspawntest

