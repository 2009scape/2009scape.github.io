---
title: Recruitment Drive
tags: news
layout: newspost
date: 2024-10-07 00:00:00 +0000
authors: Update Bot
excerpt: "A new quest appears! And a LOT more..."
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

This update brings Recruitment Drive!

Full list of changes in Gielinor:


- Corrected quest log for Creatures of Fenkenstrain<br />
Corrected quest log for Troll Stronghold<br />
Corrected quest log for The Dig Site<br />
Corrected quest log for Witch's House<br />
Corrected quest log for Scorpion Catcher<br />
Corrected quest log for Wolf Whistle<br />
Corrected quest log for Nature Spirit<br />
Corrected quest log for What Lies Below<br />
Populated NPCs in Lucien's Camp (Next to Wildy Chaos Temple hut) (Inaccessible)<br />
Populated NPCs in Black knight catacombs (WGS) (Inaccessible)<br />
Populated NPCs in 1st level of Pollnivneach Slayer Dungeon (Smoking Kills) (Accessible)
- Typo fixes for dialogue in enter the abyss and dragon slayer
- Fixed up wordwrap for debugging unhandled interactions
- Major farming improvements including (but not limited to):<br />
<br />
Farming animation corrections<br />
Farming message updates and additions<br />
Gardeners will chop down fully grown trees for 200 gp<br />
Gardeners will give farming advice<br />
Compost bin debugging admin command ::finishbins restored (finishes any in-progress compost bins)<br />
Compost bin debugging admin command ::resetbins added (resets the player's compost bins to their initial states)<br />
Players can no longer pay gardeners to protect diseased or dead farming patches<br />
Can no longer water dead patches<br />
Weeds will now grow in farming patches as part of the offline catch-up<br />
Trees that are not fully grown can now be dug up
- Rewrote some Varrock plugins<br />
<br />
Removed duplicated handlers for many Varrock related stairs and ladders<br />
Fixed the Champions' Guild trapdoor being unable to be closed<br />
Changed the model ID for the logs outside of Seth Groats's house when the axe is taken<br />
The drawers in Guidor's house will no longer disappear. There doesn't appear to be a related open object, so they just won't open<br />
The Benny NPC yells about newspapers again<br />
Knocking on the door in the Varrock bank will start the dialogue with the bankers<br />
The Varrock Census object in the Varrock castle will now open the Varrock Census interface<br />
Added sounds for opening/closing drawers, wardrobes, and cupboards and animations for wardrobes<br />
Added the Kudos overlay in the Varrock Museum<br />
Corrected the spawns for archeologists in the Varrock Museum dig site area<br />
Implemented the Varrock museum map interface to open from the objects and item<br />
The tool shelf in the museum dig site area will now give items<br />
Looking at the displays in the in the Natural History area of the museum will open the interface for the exam and provided some notes
- Corrected iron-ore-smelting success rate
- Reverted some tutorial island dialogue
- Improved bank updates, likely fix for bank UI delay
- Fixed the Priest in Peril items not showing up in HD
- Corrected Lighthouse Dagannoth drop table
- Players are now rescued out of the unimplemented high-level Bounty Hunter crater
- Corrected summoning point drain rate
- Rewrote the swing/attack handler for authenticity:<br />
<br />
Fixed a lot of off-by-1 miscalculations<br />
Fixed the void ranger bonus, which should be 20%<br />
Fixed granite maul spec not giving xp and ignoring protection prayers<br />
Fixed accuracy being too high<br />
Fixed set bonuses that boost attack or defence being applied twice or to all attacks<br />
Fixed ranged attacks not taking into account prayers that boost defence or defensive attack styles<br />
Fixed red chinchompa having the same damage as normal chinchompas<br />
Fixed some specs being boosted by offensive prayers<br />
::calcmaxhit now has better formatting<br />
::calc_accuracy renamed to ::calcaccuracy for consistency with other commands, and now also gives the actual hit chance
- Fixed blessing of graves belonging to ironmen<br />
Fixed POH teleport issue<br />
Fixed charter requirements<br />
Fixed entrana weapon check bypass<br />
Small authenticity improvements
- Fix bugs with familiars<br />
<br />
Fixed a bug where familiars would sometimes not respond to the 'Call' button<br />
Fixed random events not spawning when standing in front of the Lumbridge furnace<br />
Fixed incorrect restrictions on familiars and random events inside POHs
- Fixed saving of prayer points & hitpoints, dynamic level is now tracked separately to current hit/prayer points
- Rewrote pet back end to use a more authentic system<br />
<br />
Pets can now stack<br />
Fixes a bug where a pet could get reset to 0 hunger and growth when dropped<br />
Player save version migration messages are no longer shown<br />
Pets now morph into adults in-place
- Fairy ring refactor<br />
<br />
Reimplemented the travel log, fixes the issue where all the travel log interface text collapses in on itself<br />
Travel log now displays the relevant code<br />
Log sorting implemented<br />
Fairy ring now remembers the last entered code and automatically re-enters it when opened<br />
Fairy ring no longer skips letters<br />
Direction clicks in quick succession now turn the wheel multiple times
- Implemented the ogres in combat training camp
- Fixed the unlocking of region-wide music tracks
- Fixed cockatrice, godtrice and spirit cobra egg implementation
- Corrected fletching arrow xp
- Corrected many potion effects
- Fixed typo in Straven dialogue
- Corrected All Fired Up item requirements
- Fixed woad leaf typo in Wyson dialogue
- Implemented Recruitment Drive quest
- Rune hasta requirements fix
- Superheat ore order of precedence has been corrected
- Improved server music config loading logging

