---
title: Two many quests
tags: news
layout: newspost
date: 2023-11-11 00:00:00 +0000
authors: Update Bot
excerpt: "Creature of Fenkenstrain, Rag and Bone Man, new random events and much more!"
modtype: "Bot"
avatar: avatar8fa9.gif
---
Greetings Explorers

**Creature of Fenkenstrain** and **Rag and Bone Man** are now available!

Full list of changes:

- Fixed rapid heal bug
  <br />
  Improved reliability of runecrafting unit tests
- Implemented Rag and Bone Man quest (part 1)
- Fixed male/female dialogue in Druidic Ritual
- Implemented 7 Christmas Holiday randoms:
  <br />
  Snowman<br />
  Snowman Fight<br />
  Santa<br />
  Jack Frost<br />
  Choir<br />
  Snowstorm<br />
  Cook
- Fixed numerous interfaces, including Puro puro, Destroy item, Equipment, kept on death, Cooking (single prompts i.e. raw fish -> range), Fletching (make set i.e. fletching arrows, bow)<br />
  Rewrote herb cleaning to listener<br />
  Fixed studded leather crafting level requirement and xp<br />
  Fixed bow stringing stealing strings<br />
  `::quest <player>` can now be used to look up a player's completed quests
- Fixed Creature of Fenkenstrain quest point reward
- Rewrote MysteriousRuinPlugin to a listener<br />
Fixed Varrock earth tiara easy diary task
- Fixed amulet of glory wilderness teleport level
- Fencing ring now requires 8 oak planks rather than 8 steel kiteshields
- Fixed gender specific dialogue for Hadley
- Improved accuracy of barrows rewards
- POH slayer trophy now obtainable, added all heads as tertiary drops
- Added optional player argument to ::setlevel
- Fixed bug involving kitten/cat deletion
- Fixed typo in Chaos Tunnels portal<br />
  <br />
  Fixed typo in gnome glider to digsite<br />
  Fixed a few typos in the random phrases uttered by the Bork minions<br />
  Added missing Bork minion phrase
- Fixed failed sheep shearing movement
- Implemented Strange Plant Random Event
- Implemented Creature of Fenkenstrain quest
- Added tool leprechaun dialogue (excluding goth)
- Fixed drill sergeant completion reward drop bug
- Implemented Tolna Rift<br />
  <br />
  Improved ::npcanim admin command
- Fixed examine text, slayer tip and drops of vampires
- Corrected typos in Denulth's Troll Stronghold dialogues<br />
  <br />
  Corrected typo in Drezel's Nature Spirit dialogue<br />
  Corrected typos in Blaze Sharpeye's All Fired Up dialogues<br />
  Corrected typo in Dragon Slayer chest dialogue
- Implemented swarm random event
- Backported probabilistic runes. Can now toggle between revision 581, 573 and 570 behavior via runecrafting_formula_revision in server config
- Big bass, shark, and swordfish are now obtainable from fishing<br />
  <br />
  The message for catching shark now ends with an authentic exclamation mark<br />
  The fishing skill cape perk now logs catching a second fish in player stats
- Added the correct animation/graphics for emptying the ectophial<br />
  <br />
  Rewrote ectophial
- Death's message for the holiday random event now uses the correct type of player name
- Sheep now face player when sheared
- Corrected linked construction hotspots for shelves, thrones and statues
- Refactored some dialogues in the Ardougne area<br />
  <br />
  Remapped Kortan's shop<br />
  Fixed stock of Aemad's shop
- Leaving the fight caves now also clears poison, disease and restores run energy (QoL fix)
- Added examine texts to bob shirts (obtained from easy clues)
- Several additions and changes to Zanaris<br />
  <br />
  Added fairy queen dialogue<br />
  Added movement to the cows<br />
  Added a spawnpoint for Blaec<br />
  Added examine texts
- Fixed incorrect adamant shield (h#) in medium clue reward pool
- Fixed rune consumption when teleblocked
- Fixed wilderness zoning near KBD lever
- Updated README.md with working link to Thanos tool + java 11 reminder
- Deleted obsolete GE tool
- Charlie now says 2009Scape in The Grand Tree
- Corrected moss giant drop table
- Corrected fire giant drop table
- Fixed fishing trawler teleport and random event issues
- Fixed construction requirement for combat rings
- Made firemaking skillcape a valid light source for the giant mole
- Implemented Rick Turpentine and Drunken Dwarf random events
- Corrected Skeletal Wyvern drop table
- Added the two NPCs above the furnace in Falador
- Rewrote Stat Spy<br />
  <br />
  Refactored lunar spell handlers
- Corrected Waterbirth Island Dagannoth drop tables
- Fixed incorrect index for statuette rotation attribute used in the Golem quest
- Fixed empty item regression breaking rune pouches and ectophial
- Corrected Cockatrice drop table
- Corrected Ice Giant drop table
- Corrected Ogre drop table<br />
  <br />
  Corrected Ogress drop table<br />
  Corrected Ogress Warrior drop table<br />
  Corrected Ogress Champion drop table
- Corrected Dark Beast drop table
- Huge wilderness data audit and correction, including the following areas<br />
  <br />
  Frozen Waste Plateau (Within members gate)<br />
  Agility Course<br />
  Pirate Cove<br />
  Mage Arena Area<br />
  Mage Arena<br />
  Inside Mage Arena<br />
  Deserted Keep<br />
  Magic Axe Hut<br />
  Near Deserted Keep below Magic Axe Hut<br />
  Scorpion Pit<br />
  Chaos Elemental<br />
  Rogues' Castle<br />
  Top Right Volcano<br />
  Lava Maze<br />
  Red dragon Isle<br />
  Mining Hobgoblin Area<br />
  Canoe area<br />
  Wilderness Volcano<br />
  Forgotten Cemetery<br />
  West of Stealing Creation<br />
  Stealing Creation<br />
  Ruins right side<br />
  Front of Ruins<br />
  Demonic Ruins<br />
  Near Corp Cave<br />
  Ruins left side<br />
  Graveyard of Shadows<br />
  Bandit Camp<br />
  Spider Mound near Sapphire Gems<br />
  Dark Warrior Fortress<br />
  Clan Wars<br />
  Ruins south of clan wars<br />
  Chaos Altar<br />
  Bottom East
- Corrected Dagannoth Prime drop table
- Corrected Dagannoth Supreme drop table
- Corrected Dagannoth Rex drop table
- Corrected Gargoyle drop table
- Corrected TzHaar-Xil drop table
- Implemented eating of frog spawn
- The name of the location where the shooting star has dropped is now no longer lowercased
- Corrected TzHaar-Mej drop table
- Corrected TzHaar-Hur drop table
- Barbarian potion refactor<br />
  <br />
  Fixed barbarian potions that can take either a roe or caviar from consuming both<br />
  Corrected level requirement and product potion id for hunter and antifire mixes<br />
  Corrected input potion id for fishing mix<br />
  Implemented antidote+ mix<br />
  Fixed level requirement for super energy mix<br />
  Fixed duration of antipoison mix (now 90 seconds)
- Rewrote Captain Barnaby and Shilo Cart interactions
- Refactored canoe handling<br />
  <br />
  Canoe station should now have the full animation suite<br />
  Canoe making now scales with axe and level of woodcutting<br />
  Interfaces are now fully updated with proper hide/show/animation<br />
  Canoes now sink at the end of the journey<br />
  Added a black screen backdrop overlay seen only in HD
- Corrected Vesta's longsword damage
- Rewrote pet management<br />
  <br />
  Fixed being unable to remove pets<br />
  Removed redundant pet messaging
- Corrected TzHaar-Ket drop table
- Added support for tertiary drop tables