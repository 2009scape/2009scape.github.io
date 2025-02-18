---
title: Deep Wilderness Changes
tags: news
layout: newspost
date: 2024-08-03 00:00:00 +0000
authors: Update Bot
excerpt: "Wilderness updates, new sounds, and a ton of other improvements..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

Please note the changes to the deep wilderness.

Full list of changes:

- Rewrote the music system to use regions
- Rewrote Lumbridge swamp hole handling
- Trimmed crafting cape can now be used to enter the crafting guild
- Rewrote (un)holy symbol blessing handling
- Corrected granite crab pouch crafting experience from 31.6 to 21.6
- Removed slayer staff from H.A.M. drop tables
- Added frogspawn and cave eel fishing spots in Lumbridge swamp cave
- Corrected option handling on GE interface
- Fixed issue where green dragons are called Elvargs in slayer tasks
- Implemented ground guam as a tar recipe
- Changed the script processor code to no longer incorrectly close interfaces on SOFT queue scripts<br />
Rewrote Jarvald
- Halt tick processing if the server isn't able to reach the internet when watchdog is enabled (configurable via server config options connectivity_check_url and connectivity_timeout)
- Rewrote Canifis warewolf handling, fixed stats<br />
Fixed bandit aggression
- Added missing sounds<br />
<br />
Added equipping sounds to all Kitesheilds & sq shields that are currently available <br />
Added equipping sounds to combat Melee Boots that are currently available <br />
Added equipping sounds to combat Melee Gloves that are currently available <br />
Added equipping sounds to all Coifs that are currently available <br />
Added equipping sounds to all D'hide bodies that are currently available <br />
Added equipping sounds to all D'hide chaps that are currently available <br />
Added equipping sounds to all D'hide vambracers that are currently available <br />
Added equipping sounds to all Bows that are currently available <br />
Added equipping sounds to all Cross bows that are currently available <br />
Added equipping sounds to all Javelins that are currently available <br />
Added equipping sounds to all Knifes that are currently available <br />
Added equipping sounds to all Darts that are currently available <br />
Added equipping sounds to all Throwing axes that are currently available <br />
Added equipping sounds to all Arrows that are currently available <br />
Added equipping sounds to all Claws that are currently available <br />
Added equipping sounds to all Halbergs that are currently available <br />
Added equipping sounds to all Hastae that are currently available <br />
Added equiping sounds to all Daggers that are currently available <br />
Added equipping sounds to all Swords that are currently available <br />
Added equipping sounds to all Longswords that are currently available <br />
Added equipping sounds to all Scimitars that are currently available <br />
Added equipping sounds to all 2H swords that are currently available <br />
Added equipping sounds to all War-hammers that are currently available <br />
Corrected the incorrect equipping sounds to all staves to the correct sound<br />
Added equipping sound to the Easter ring<br />
Added equipping sound to the Jack lantern mask<br />
Added the correct red nose light animation to the Reindeer hat<br />
Corrected the Chocatrice cape to be the real one in game with the logo in the back and also added the emote to it<br />
Added sounds to the Scythe and corrected its combat animations<br />
Added the Rubber chicken emote "dance" with its music jingle and the chicken "bawk" sound<br />
Added the Ice amulet and the Wintumber tree to Diangos item return since they were missing<br />
Added the correct jingle to the Air guitar emote
- Wilderness improvements<br />
<br />
Added an extra option to the deep wilderness gate warning: "I wish to proceed, and don't ask me again"<br />
Reused the same warning, with appropriate changes, for the edge/ardy levers due to the pvp mechanics<br />
Removed the interface warning when crossing the ditch until doomsayer is implemented<br />
Removed the inauthentic threat revenant and restricted brawler/pvp drops to revenants and chaos elemental only<br />
Now require 100k risk to obtain the boosted deep-wildy drop rates<br />
Hid our inauthentic mechanics behind a new server config option enhanced_deep_wilderness
- Rewrote unpowered orb charging<br />
Added Seers' Village diary tasks for ranging tickets, talking to Thermac about staves and charging orbs<br />
Corrected explorer's ring alchemy graphics
- Rewrote altar praying<br />
Added the Tai Bwo Wannai Trio as quest requirement for praying at the tribal statue
- Added Waterbirth Island and the Dagannoth Kings' lair to admin ::to teleport destinations
- Fixed construction door and wall placement<br />
Fixed the bug where some hotspots were still visible even in non-building mode
- ::ge commands now use book interface to support more than 300 listings
- Cuffs, Narf, Jeff and Rusty now have correct examine information<br />
Corrected Narf's stats<br />
Added examine text for all implings and Balnea
- Fixed incorrect reward amount from stronghold of player safety
- Your organs will no longer be stolen. Also fixed unexpected disappearance of beds, big plants, bookcases in study, fireplaces in bedroom and costume box in costume room<br />
Fixed incorrect coordinates for the study crystal ball hotspot
- Improved handling of construction bookcase building
- Better handling of quest varp/varbit and values to set the quest color to red/yellow/green
- Fixed fishing trawler bugs<br />
Optimised fishing trawler reward logic
- Removed quest completion check on fairy ring exit from Zanaris
- Fixed salamander attack style
- Fixed 1 tick movement delay on some actions
- Fixed random events occurring at kalphite queen and tormented demons<br />
Fixed bots trying to speak unicode
- Enabled Lunar Isle and Miscellania coal mine star locations<br />
Fixed requirements checking for some star locations
- Rewrote Rimmington<br />
Enabled pickpocketing of Anja and Hengel
- Fixed MTA telekinetic theatre statue path check
- Fixed the Druidic Ritual quest log rendering<br />
Implemented two bank noticeboards
- Implemented White Wolf Mountain & Ice Queen
- Fixed bug causing loss of xp when interrupted burying bones
- Fixed NPCs pathing around safespots when standing adjacent to the safespot
- Reduced price of fighter torso to 4.5M (until barbarian assault is implemented)
- Fixed incorrect description on a fairy ring

