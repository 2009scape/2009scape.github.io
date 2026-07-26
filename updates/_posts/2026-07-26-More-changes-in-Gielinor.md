---
title: More changes in Gielinor
tags: news
layout: newspost
date: 2026-07-26 00:00:00 +0000
authors: "Update Bot"
excerpt: "There have been some more changes in Gielinor..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

There have been some more changes in Gielinor:


- Agility arena fixes<br />
<br />
Fixed looping when a player attempted dart trap, spinning blades, floor spikes and pressure pads<br />
Fixed direction player faces when traversing hand holds<br />
Fixed animation for walking across planks
- Added admin command ::infinitespecialmove [true|false] for infinite summoning familiar special move energy<br />
<br />
Providing no argument to admin commands ::infinitespecial and ::allowaggro now toggles the value instead of rejecting
- Fixed dream spell animation loop
- Removed inauthentic fight caves heal
- Fixed mithril grappling tip smithing UI binding
- Rewrote ring of stone and easter ring, which also fixes a teleblock bug
- Corrected implementation of dragon halberd special attack
- Implemented berserker necklace effect
- Implemented mounted cockatrice head dialogue
- Corrected zamorak brew/mix behaviour
- Improved combat level brackets for hostile random events
- Corrected kidnap location for Quiz Master
- Modernised some location/pathing architecture
- Added support for websocket connections (disabled by default)
- Item respawn time logic now handles unset min/max times
- Made the Stronghold of Player Safety crevice shortcut persist between logins
- Fixed bug causing null or corrupt players/bots
- The summoning orb no longer disappears from the minimap on logout/login
- Implemented HP carryover after NPC transform<br />
Fixed goblin cave miners not taking damage on the first hit
- Rewrote world map interface handling (search still not implemented)
- Rewrote boss kill counter<br />
Removed inauthentic slayer tasks and boss pets
- Fixed another soft lock in Dwarf Cannon quest
- NPCs no longer favor the north east corner when walking
- Changed the initial spawn location for new accounts
- Brutal green dragons now drop hard clue scrolls instead of easy
- Can now smelt jewellery at the clay forge on Netiznot
- Made Leaf-bladed spear alchemisable
- Abyssal walkers now drop two abyssal charms
- Added purple dye ground spawn near the Khazard battlefield
- Small Bot Improvements and Fixes<br />
<br />
Fixed bot head item randomisation<br />
Fixed thief NPC bot stuck in bronze outfit<br />
Added outfits for poor/average/rich classes of bots<br />
Changed sex ratio of bots to 1:3 F:M from 1:5 (open to adjustment with era-authentic sources)
- Fixed typos in Tribal Totem crate label dialogue
- Fixed some text display bugs on some interfaces
- Borrokar now drops bones
- Hunter audit and implementation for geckos, raccoons, monkeys, and squirrels
- King Black Dragon breath effects now trigger on impact instead of attack launch
- Black unicorn foals now drop bones
- Fixed Edgar's cave exit teleporting to Saba's cave
- Fixed sex placeholder in Mysterious Ghost dialogue
- Rewrote glider interface
- Ring of dueling and games necklace teleports now use the dedicated jewellery teleport animation
- Added player and free text search to ::quest -p <player> <search>
- Implemented swamp decay
- Added gold ore spawn in the NW part of Karamja
- Fixed typos in Shantay jail dialogue
- Rewrote the hide tanning interface
- Elf warriors now drop hard clue scrolls instead of medium
- ::rolldrops now takes a boolean final argument for depositing into bank instead
- Fixed Thessalia's female makeover UI mixups
- Summoning now counts for claiming a trimmed skill cape<br />
Fixed trimmed smithing cape being awarded with no other 99s
- Added finishTask (for achievement diary) to ContentAPI
- Added examine information to the hide and seek penguins
- Fixed some of the doors not being one-way in the Maze random event
- Corrected Pikkupstix's dialouge to reflect authentic options, text, and expressions
- Added an April Fools event
- Corrected Saradomin Brew effects
- Fixed XP allocation when using the last unit of ranged ammo
- Taking poison damage now stops home teleport<br />
Home teleport now halts player movement<br />
Fixed bug preventing teleport in some cases when being chased by NPC
- Removed grand exchange price from JSON config file and sorted objects within files to reduce future merge conflicts
- Fixed extra animation when trying to cook more items than possible
- Fixed UTF-8 build warning
- Fixed revenants getting stuck
- Cleaned up some core files
- Rewrote the cooking skill, which fixes a number of bugs and broken recipes
- Implemented ::ge mute command for players to mute the global news announcement for GE trades
- Added an additional 37 spawn locations for penguins<br />
Corrected Entrana Penguin to a Barrel<br />
Corrected Observatory Penguin to Crate<br />
Implemented admin command to reset full penguins ::renewpenguins<br />
Implemented admin command to spawn individual penguin ::spawnpenguin
- Fixed quest journal typos in Prince Ali Rescue
- Added chat support for ä/ö/å characters
- Clivet now reappears in Hazeel Cult
- Made it possible to kill the Zombie Champion
- Made it possible to kill the Lesser Demon Champion
- Fixed a bug where depositing the full inventory doesn't work when the bank is full and there's noted items in the player's inventory
- Implemented Varrock medium achievement for using the digsite pendant
- Implemented Varrock hard achievement for getting a spottier cape<br />
Fixed an inauthentic typo in Matthias's falconry dialog
- Implemented Varrock hard achievement for recovering Family Crest gauntlets
- Fixed wild pie Varrock hard achievement
- Implemented "Enter the A Soul's Bane Rift" achievement from the Varrock medium diary when entering the rift
- Fixed teleporting into half-loaded POHs
- Fixed Cyclops defence animation<br />
Fixed Zombie animations in Ardy sewers<br />
Fixed Ghost combat animations in Draynor Manor<br />
Fixed potion drinking animation and add two tick potion text delay<br />
Fixed Gnome death animation in Khazard Battlefield<br />
Fixed Gnome animations in Tree Gnome Village<br />
Removed inauthentic + broken Vinesweeper teleport animation
- Improved bounding box to get Falador diary achievement for lighting a bullseye lantern anywhere in Chemist's house
- Fixed Lumbridge teleport achievement being granted for Miasmic Burst
- Improved authenticity of Father Urhney dialog
- Rewrote wilderness agility course lava stones
- Fixed salamanders and swamp lizard throwing in ranged mode
- Combo runes are now consumed before standard elemental runes if both are present in inventory<br />
1 combo rune can count for 2 elemental runes if the spell requires both
- Make it possible to eat caviar
- Fixed enchanted bolts not working against monsters that cannot be slayer tasks
- Fixed players getting kicked to their POH every time they relog
- Updated update note author to match website

