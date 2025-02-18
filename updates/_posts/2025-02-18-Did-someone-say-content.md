---
title: Did someone say content?
tags: news
layout: newspost
date: 2025-02-18 00:00:00 +0000
authors: Update Bot
excerpt: "A huge content update including numerous quests, minigames, miniquests and more..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

There have been a lot of changes in Gielinor, including five new quests:


- Runecrafting pouches now synchronise across bank instances<br />
BoB can no longer be used to smuggle weapons to Entrana
- Fixed loss of equippable items when swapped with another item that is dropped in the same tick
- Corrected diamond bolts (e) effect<br />
Removed inauthentic Verac armour effect of +1 max hit increase
- Hostile random events now take the player's summoning level into account<br />
Random event combat level is now selected authentically resulting in more difficult hostile random events
- Corrected fishing contest quest log<br />
Fixed dialogue after fishing contest
- Fixed child animations for the following NPCs:<br />
<br />
Boy (Witch's House quest)<br />
Kanel (Inside Gertrude house)<br />
Philop (Inside Gertrude house)<br />
Shilop (Gertrude's Cat quest)<br />
Wilough (Gertrude's Cat quest)
- Added some new regions
- Fixed player status SQLite conversion breaking on usernames with spaces
- <b>Implemented Mogre miniquest</b>
- Zamorak robe top and bottom now count as Zamorak god items<br />
Zamorak robe top and bottom now allowed into Entrana<br />
Implemented the right-click take-boat options for the monks of Entrana<br />
Fixed some silly typos in the Monk-of-Entrana dialogue<br />
Removed unused god item definitions
- Completed very large refactor of Plague City quest and related functionality
- Fixed softlock in Priest in Peril and The Fremennik Trials
- Corrected restore for various consumables
- <b>Implemented Desert Treasure quest</b>
- Corrected stats, levels and combat styles of many familiars
- <b>Implemented Zogre Flesh Eaters quest</b>
- Made random event teleports more robust, fixing edge cases
- Added cats raised to ::stats<br />
Added food cooked to ::stats
- Pest control XP formula is now authentic, includes 1% XP bonus if handing in 10 points or more and 10% XP bonus if handing in 100 points or more
- Fixed map areas that caused client crashes in HD
- Fixed bug preventing The Fremennik Trials lyre concert being marked as completed
- Corrected many examine texts
- Fixed Death Plateau softlock in Dunstan dialogue<br />
Fixed Harold not accepting blurberry special<br />
Spiked boots now accessible
- <b>Implemented The Curse of Zaros Miniquest</b>
- Fixed shooting star resetting on server shutdown
- Ported kill stats and rare item drop storage to sqlite from json<br />
<br />
This fixes lengthy and memory intensive server shutdowns<br />
Existing global_kill_stats.json will be imported on first run
- Fixed barbarian fishing xp rate manipulation
- Runecrafting skillcape now only consume a charge if the teleport took place<br />
Improved navigation of the runecrafting skillcape teleport menu<br />
Runecrafting skillcape message improvement
- Added examine text for Ahad, Phingspet and Grimesquit
- Fixed bug where ::forcegravedeath could make admins lose admin status<br />
Added ::makeadmin command to promote accounts to admin<br />
Added ::dropadmin command to demote accounts from admin<br />
Added ::setpestpoints to set Pest Control points<br />
Testing commands now take optional player name argument ::max, ::noobme, ::setlevel and ::addxp
- Implemented Maze random event
- Implemented Quiz Master random event
- Populated Gnome Stronghold area
- Improved inventory handling for Jossik
- Added Plant Cure, Compost and Supercompost to the ::farmkit admin command
- Refactored how quests are referred to internally<br />
Fixed numerous requirement checks for Rag and Bone Man II, The Lost Tribe, The Tourist Trap, Waterfall Quest and The Fremennik Trials
- Cleaned up legacy save code
- <b>Implemented Tears of Guthix Quest</b><br />
<b>Implemented Tears of Guthix Minigame</b>
- Fixed hostile random events attacking other players<br />
Fixed players being able to attack hostile random events for other players<br />
Hostile random events now authentically only reward 1/16th xp (except for pheasants, which give 0 xp)
- Fixed incubator appearing to lose contents
- Fixed farming patches wrongly getting diseased during offline catchup
- Star sprite bonus now drops bonus ore if inventory is full<br />
Rocks mined attribute now takes into account bonus ore
- Aggressive NPCs will no longer always attack the last player to enter the area
- Fixed telegrab through walls
- Fixed some incorrect replacement doors in Rellekka<br />
Disabled the unimplemented TzHaar door<br />
Fixed some doors causing buggy player movement
- Refactored Antifire potion effect<br />
Relicym Balm can now cure disease<br />
Antifire potion effect now persists through log out
- Disabled the ability to create new HCIM accounts<br />
Disabled the ability to select HCIM 10x xp rate<br />
Existing HCIM will turn back to standard players after their next death (all permadeath rules still apply for that death)<br />
Players on HCIM 10x will be reverted to 5x after their next death<br />
If the player is in combat and disconnects via AFK timeout, then their forced logout timer has been reduced to 30 seconds from 15 minutes<br />
If the player is in combat and x-logs or disconnects via network issues, then their forced logout timer has been reduced to 5 minutes from 15 minutes
- Added all missing NPCs to config file for future use
- Implemented knife spawn in Sorcerer's Tower
- Removed random events from Tutorial Island
- Iron men can no longer participate in lootshare
- Implemented Gaze of Saradomin<br />
Fixed respawn bugs
- Implemented spirit saratrice
- Implemented black swan NPC
- Fixed loss of draconic visages if used on an anvil without an anti-dragon shield in the player's inventory<br />
Fixed dragonfire shield and dragon square shield smithing not checking for a hammer in inventory
- Implemented Hunters' Crossbow
- Significantly improved slayer tasks implementation<br />
<br />
More authentic tasks<br />
Better dialogue and hints<br />
New tasks added in preparation for when relevant quests are implemented
- Correctly limited quest log and achievement diary scrolling
- Fixed issues in Jarvald's dialogue
- Lucien now gives a pendant after Temple of Ikov completion
- <b>Implemented Sea Slug quest</b>
- Added pirate clothes to store and examine text to Mike
- Implemented spade pickup in the Rimmington mine<br />
Rewrote the permadeath code to more thoroughly wipe HCIM when they die<br />
HCIM permadeath code destroys items dropped on death<br />
Cleaned up redundant blast furnace player save code
- Fixed issue with trees not being able to be health checked
- <b>Implemented Heroes Quest</b>
- Added additional dialogue helpers
- ::itemsearch now usable by everyone
- Made POH deaths safer, fixing random event bug
- Fixed bug where ultimate ironmen could have rewards sent to bank<br />
Fixed the allquest command on new accounts on first login
- Refactored some runecrafting code<br />
Corrected the Ourania altar reward, now fully authentic
- Implement penguin egg acquisition
- Signpost improvements<br />
Minor quest log fixes<br />
Implemented map for talismans in Wizard Tower basement
- Fixed a bug where the player could get locked planting while farming
- Fixed pillory random event completion teleport location
- Fixed examine texts for some cabbages and other items
- Fixed slayer cape perk activation
- Fixed magic secateurs patch bones not applying
- Fixed bug preventing super restore recovering prayer
- Introduced new dialogue engine compatible with spinoff revision 578 project
- Changed timestamp in logs to ISO standard datetime format
- Construction can now be used to fix the ladder to the wilderness beacon
- Use the system update countdown for the daily restart
- King Bolren now gives back lost gnome amulets
- Implemented Pillory random event (this event occurs while pick-pocketing)
- Authenticity improvements to runecrafting pouches. Due to changes in degrade counters, they will degrade within the next 1 or 2 fills after this update; this is a one-time event. Resolve (or prevent) this by repairing via the dark mage
- Rewrote dream spell<br />
Fixed healing rate of dream<br />
Added sound to dream spell
- Corporeal beast authenticity improvements<br />
<br />
Dark core will no longer jump to players in safe area<br />
Adjusted maximum attack hits<br />
Protect from magic now blocks the big dart attack by 40%<br />
Now resummons the dark core when it dies<br />
Made the dark core respawn mechanics more authentic<br />
Dark core now drops ashes
- Made the following POH hotspots refund their non-plank items when torn down: any quest item, any guild trophy, any armor stand<br />
Refactored some construction code<br />
Removed decorations and hotspots for "Menagerie" rooms, which seem to be inauthentic<br />
Changed the following hotspots to be recursive: decoration, wall chart (study)<br />
Corrected xp for a few construction items
- POH telescope now estimates the shooting star time based on its tier
- Bounty Hunter music is now unlockable
- Fixed exception on server boot related to a duplicated attempt to register dialogue for Jarvald
- Fixed loss of combat tabs after recruitment drive
- Fixed exception occuring when JohnnyBeard dies
- Fixed bugs relating to player location and random events<br />
Improved handling of random events when the location of the abducted player is missing from save file<br />
Added per-tick auditing of data relating to player location
- Fixed vinesweeper point exchange ratio bug<br />
Disabled spirit kalphite scroll until bug is fixed
- Thread now correctly disappears every 5 items crafted, including bug fixes related to the fact<br />
Ring of forging now correctly disappears every 140 iron ores smelt, including bug fixes related to the fact
- Adventure bot improvements<br />
<br />
Adjusted max pulse count for bots from 50 -> 75<br />
Adjusted max skill baseline by +4 for adventure bots to 69<br />
Added 500 lines of unique<br />
Added 45000 bot names<br />
Added recovery methods for bots that get stuck<br />
Added multiple random number functions to help add more variance<br />
Added function to handle checking if a bot is near/in a Bank<br />
Added function to handle getting a new city<br />
Added function to add variability to locations given to bots<br />
Added function to check if other players/bots are nearby<br />
Added function to handle bots banking their inventories if a bank booth is nearby<br />
Improved random number parameters<br />
Improved how bots are spawned & added variance to spawn location<br />
Improved how bots interact & handle the Grand Exchange location<br />
Improved how bots handle starting in Lumbridge<br />
Fixed bots referencing themselves in dialogue<br />
Fixed bots talking when they are by themselves<br />
Fixed multiple cases where bots would get stuck in a state<br />
Fixed multiple logic errors<br />
Fixed issues with bots banking but not switching states
- Fixed Mystic Lava staff not counting as earth runes
- Fixed missing space in pottery messages
- Removed unnecessary server console debug prints

