---
title: It's a big one!
tags: news
layout: newspost
date: 2026-04-19 00:00:00 +0000
authors: Update Bot
excerpt: "There's... a lot to unpack here..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

There have been A LOT of changes in Gielinor:


- Fixed Seers' Village flax spinning bot getting stuck
- Added ::items command<br />
Added missing 6th colour variant of kitten/cat<br />
Fixed duplicated interaction implementations
- Fixed removal of POH 1st floor and dungeon rooms
- Rewrote spellbook swap<br />
Corrected spellbook swap spell selection timeout
- Spinolyp poison now only applies to range attacks
- Fixed instances of visual item duplication for ground items
- Fixed typos in Tribal Totem journal text
- Rewrote shooing of stray dog, and feeding of stray dog<br />
Feeding of stray dog now supports more meats
- Improved handling of clue scroll tiers
- Falconry Glove is now removed when leaving area
- Fixed chat head and item overlapping each other in dialogue
- Implemented Hazeel Cult quest
- Implemented POH bookshelf, fancy dress box, armour case, magic wardrobe, treasure chests, cape rack, and toy box<br />
Implemented ::ifaces commmand<br />
Implemented ::pohstorableitems command to fetch all storable items<br />
Implemented storing books in house<br />
POH now included in item checks
- Fixed ring of forging lasting too long<br />
Implemented ring of forging "operate" to check remaining charges
- Item dialogues now support quantity of items shown (e.g. a stack of coins instead of one coin)
- Dungeon is now accessible in POH
- Items can now be placed on tables
- Improved dialogue engine
- Fixed revenant level check<br />
Fixed ice smash
- Goth leprechaun chat head now animated
- Fixed Ardougne teleport scroll not showing both dialogues
- Added examine text for Christmas holiday random event NPCs
- Implemented ::calcdefence command<br />
Implemented passive combat buffs for the following familiars:<br />
Geyser Titan (ranged offence +1 +3% of player level rounded up)<br />
Wolpertinger (magic defence +5%)<br />
Iron Titan (melee defence +10%)<br />
Steel Titan (melee defence +15%)
- Fixed examine text for unstrung amulets
- Interacting with fishing spots on diagonals should no longer fail
- Fixed K'ril Tsutsaroth to only use special prayer piercing and draining attack on players using protect from melee
- Pathfinding is now skipped when movement is not required to interact with selected object
- Extended ::bury command to support hiding player name and adding message<br />
Implemented ::buryitem <id> <true|false> [msg]<br />
Implemented ::burymessage <msg>
- Implemented brewing
- Fixed amulet of glory teleport destination for Al-Kharid<br />
Fixed amulet of glory destination spelling<br />
Mounted amulet of glory fixes<br />
Fixed some examine texts<br />
Fixed POH portal build requirements<br />
Fixed some related typos<br />
Corrected teleport location for Draynor Village<br />
Fixed bug where random events could interrupt teleports<br />
Enabled the Burgh de Rott star location<br />
Rewrote enchanted jewellery teleports<br />
Improved replacement of spent slayer rings
- Fixed edge cases introduced by recent combat changes
- Removed inauthentic Lumbridge anvil
- Fixed a number of doors that were swapped, incorrectly requiring various quest completions (Elena's house, Varrock, Legends' guild)
- Fixed All Fired Up beacon repairs not persisting
- Rewrote All Fired Up
- Locked Menaphos gate (inaccessible area)
- Fixed chinchompas not exploding on death
- Corrected revenant hellhound defense stats
- Fixed edge case bug causing sacks to disappear
- Ibis now forages raw fish instead of cooked fish
- GE dialogue is now sex-aware
- Deleted unused diary code
- Changed smoke devil familiar combat type to magic
- Restocking regular shop stock no longer affects player stock UI
- Fixed Seers Village cider task
- Fixed snelm crafting producing wrong item
- Fixed spirit weed falsely appearing diseased while planted in the disease-free herb patch
- Refactored Spirit Graahk<br />
Added the effect of Spirit Graahk's scroll, Goad<br />
Added Spirit Graahk's dialogue<br />
Added Spirit Graahk's Baroo!-isms
- Fixed Kamil's Sallamakar Ro attack style (range and magic)
- Improved handling of unequipping items on death
- Implemented the authentic "Hey, everyone, I just tried to do something very silly!" when trying to use a command that you shouldn't have access to
- Leprechauns now properly explain why they can't note your items
- Populated tar and snails in Mort Myre Swamp
- Made the swaying tree authentically work exactly the same as the dramen tree
- Fixed getting kidnapped by a random event mid-animation
- ::permadeath command now clears house style
- Added bracelet mould to the Tool Store 4 item list<br />
Added knife to the Tool Store 2 item list
- Fixed skill cape perks not applying correctly
- Docker compose file indent fix
- Polished up slayer tower bloodveld implementation
- Fixed northern stairs location in mining guild building
- Implemented Mos Le'Harmless snakes<br />
Corrected bush snakes implementation
- Corrected xp awarded by superglass make
- Fixed the animation issues with the Rock Golems
- Fixed Miasmic Blitz and Miasmic Burst casting mixup and rune requirements
- Changed Abyssal Walker spawn coordinates to fix spawning in wall
- Fixed two small typos
- Added a check to see if the player has completed the Seer's Village Hard Diary and is wearing the Seer's Headband item when using the Camelot teleport spell. If they are, they are teleported in front of the bank instead of in front of the castle
- Fixed Ice/Moss Titan scroll creation order
- Fixed an esoteric bug causing a single melee attack of a moving entity to succeed in cases where melee attacking should have been impossible but the target and victim shared an unblocked diagonal tile
- Wrote missing usage/description for some commands
- Added target validity checking for combat interactions and special cases
- Fixed a number of NPC and item spawns in Camelot, Lumbridge, Canifis, Varrock and Kandarin
- Added or fixed examine text for NPCs around Karamja
- POH Tea has been implemented<br />
Can now add milk to teas<br />
Nettle tea now heals<br />
Refactor of Beer Barrels, Larder, and Shelves<br />
Checks are now made to ensure that the player cannot take Tea/Beer related items out from the POH<br />
A few useless items (Bowl of Hot Water, Cup of Hot Water) have been implemented
- Rewrote fletching
- Tortoise no longer drop 3 regular-sized bones on death<br />
Tortoises have corrected HP (101 for level 79, 121 for level 92)<br />
Added stats and animations for Gnome Driver, Gnome Mage, and Gnome Archer<br />
Gnome-Mounted Tortoise now attacks with its mounted gnomes, and the gnomes spawn on the ground upon tortoise death
- Fixed the price of spirit shards and pouches
- Corrected destination coordinates of the Carrallangar teleport
- Global news announcements no longer overrun the chatbox<br />
Global news announcements are now locked behind the enable_global_chat server config setting<br />
PvP and brawler drops from the Chaos Elemental now refer to it as "the Chaos Elemental", rather than "a Chaos Elemental"<br />
PvP and brawler drops from revenants now lowercase the revenant's name
- Added a new server config option, shooting_star_ring, enabling whether the inauthentic ancient blueprint gets rolled
- Fixed ice spell casts allowing frozen victim movement for 1 tick<br />
Fixed ice barrage animations<br />
Players who get successfully frozen by an ice spell now receive the message "You have been frozen!"
- Fixed discord mod message logging<br />
Fixed a typo when attempting to sell an item on the GE that is blacklisted<br />
Implemented grinding of suqah teeth
- Fixed Wyson's dialogue so that he properly respects the choice of turning in mole parts<br />
Corrected dialogue to authentic source
- Implemented Observatory Quest
- Corrected the retreat mechanic to not heal the npc
- Corrected the deep wildy murder message to the authentic one<br />
Fixed a bug that caused the prayer-recharge jingle to be played over the death jingle when the player died<br />
Fixed redundant overload checks<br />
Fixed lunar spells consuming double runes when a previous cast attempt failed<br />
Fixed HP on halloween random-event spiders<br />
Corrected the Dream spell logic
- Implemented periodic Grand Exchange update notifications
- Improved random event kidnapping logic<br />
Rewrote home teleport<br />
Corrected shades and zombies to only multiply xp by 1/16 if they were random events<br />
Unified non-hostile random event chat mechanics<br />
Fixed random events repeating their opening message and/or saying their timeout message prematurely<br />
Genie will now authentically address female players as 'Mistress'<br />
Fixed hostile randoms wrongly teleporting the player after 3 minutes<br />
Made quizmaster dialogues unclosable and added a hook to restart them if you lose it<br />
Made the pillory dialog unclosable<br />
Implemented rock golem switch between ranged and melee<br />
Replaced sandwich lady chat lines with authentic quotes<br />
Added authentic dialogue for interacting with another player's sandwich lady<br />
Added a teleport block for the surprise exam random event
- Fixed Ghost Disciple dialogue typo at Ectofuntus
- Corrected rune essence mining behavior and speeds<br />
Also corrected various mining messages across many rock types to be authentic
- Improved pathfinding to handle cases when both player and target are moving
- Made XP rates and ironman optional, locked behind new server config settings xp_rates and ironman<br />
Removed the ironman_icons server config setting, locking it behind ironman instead<br />
Removed the default_xp_rate server config setting and hardcoded the default xp rate to 1x<br />
Changed a bunch of server config defaults for inauthentic features to disabled<br />
Added enable_global_chat to the worldprops default config. Note the change from enable_globalchat to enable_global_chat<br />
Removed the allow_slayer_rerolls worldprops config option<br />
Large number of tutorial island improvements and authenticity enhancements
- Evil Bob's fishing event cutscene now much more authentic
- Light source is now required to get boots of lightness<br />
Boots of lightness now work as expected
- Unified and reimplemented various banker dialogues<br />
Accessibility to second bank is now locked behind server config toggle second_bank<br />
Eniola, Arnold Lydspor, and Emerald Benedict now offer access to second bank<br />
Locked the backported ability to charge our ring of wealth with GE teleports behind server config toggle ring_of_wealth_teleport<br />
Corrected enchant spells to always yield uncharged dragonstone items, rather than fully charged ones<br />
Fixed inauthentic jewellery UI<br />
Locked the availability of our inauthentic player commands behind server config toggle player_commands. Admins are immune to this and still always have all commands available. Note that this includes ::confirmrules, so be sure not to set your server to show rules and info, but not allow commands
- Fixed the remaining dramen tree inauthenticity, now provides reward after a single tick of cutting
- Barrows equipment now degrades by 20% on grave death (fully repaired equipment is excluded from this)<br />
Barrows equipment now breaks and drops on non-grave deaths (instead of converting to coins)<br />
Rewrote Bob handlers
- Corrected the Ape Atoll teleport location<br />
Added Solihib npc spawn<br />
Implemented Solihib's store
- Fixed female characters not being able to pay Falador Hairdresser hairstyle change fee
- Fixed typo in Larxus's dialogue (champion's challenge)
- Fixed IP address not getting written to DB on login
- Another round of Entrana allowed item auditing, now much more authentic
- Rewrote nettle tea handlers, additionally allowing emptying of cup of tea
- Made the Black Demon cutscene more authentic and fixed Glough's chathead in the cutscene
- Added some newly found examine texts
- Fixed incorrect ordering of operations when opening the bank<br />
Somewhat improved sending of tab configurations and free space
- Implemented the castle wars manual book
- Added default issue template now that GitLab has changed how things work
- First phase of TzHaar rewrite
- Catching a horned graahk now finishes the appropriate Karamja task<br />
Checking the health of a fruit tree in Brimhaven now finishes the appropriate Karamja task
- Implemented search command, ::commandsearch <query>
- Farmed trees will now correctly regrow based on the same timer as other trees, rather than being tied to growth cycles<br />
Implemented admin ::instachop command
- Chinchompa long fuse now properly splits ranged/defense XP
- Fixed Cabin Fever charter discount; awarded via quest requirement system<br />
Fixed charter boat exception<br />
Fixed Mos Le'Harmless charter boat discount and prices
- Corrected poison dagger attack animations for all metal daggers
- Fixed potato cactus spawns<br />
<br />
Fixed 3 spawns in Kalphite Lair first floor<br />
Fixed 5 spawns in Kalphite Lair bottom floor
- Poison corrections<br />
<br />
::poison command (admin) will now automatically remove poison immunity timers for faster testing<br />
Poison will no longer give an inauthentic warning when it is about to expire<br />
Newly applied poison timers will only overwrite old poison timers if they are greater in severity<br />
Fixed up some logic for monster examine checking poison immunity<br />
Fixed numerous poison stats
- Fixed bug causing herb and uncommon seed drop tables to only roll once when they should have rolled multiple times
- Made Bork poison immune
- Fixed minor regression in dialogue code causing "line1" to appear briefly before dialogue is shown
- Fixed bug where All Fired Up beacons could be repaired with insufficient items<br />
Fixed bug where All Fired Up beacons would consider boosted/dynamic skill level instead of actual skill level<br />
Removed random inauthentic needle break when repairing All Fired Up beacon

