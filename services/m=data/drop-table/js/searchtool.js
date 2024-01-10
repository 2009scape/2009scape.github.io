import { Result, DisplayItem, NPCObject } from './DataStructures.js';
import Navbar from './components/Navbar.js';
import NPCDrops from './components/NPCDrops.js';
import ItemData from './components/ItemData.js';
import ItemSources from './components/ItemSources.js';

Vue.createApp({
  template: `
    <div v-if="dropTables && itemConfigs">

      <Navbar @update-pick="updateParentPick" @update-input="updateParentInput"/>
    
      <!-- NPC Droptables (bynpc) -->
      <NPCDrops v-if="pick == 'Drop Tables'" :searchResults="searchResults" 
      :sortItems="sortItems"
      :iconURL="iconURL" />

      <!-- Item Sources (byitem) -->
      <ItemSources v-if="pick == 'Item Sources'" :searchResults="searchResults" 
      :sortItems="sortItems"
      :iconURL="iconURL" />

      <!-- Item Data (itemstats) -->
      <ItemData v-if="pick == 'Item Data'" :searchResults="searchResults" :iconURL="iconURL" />

    </div>

    <div v-else class="centered">
      <p>Loading JSON..</p>
    </div>
    `,
  components: {
    Navbar,
    NPCDrops,
    ItemData,
    ItemSources
  },
  data() {
    return {
      dropTables: null,
      itemConfigs: null,
      itemIdToName: {},
      npcObjects: {},
      npcIdToName: {},
      itemSourceNPCIds: {},
      input: "",
      pick: "Drop Tables",
      searchResults: [],
    }
  },
  methods: {
    updateParentPick(newPick) {
      this.pick = newPick;
    },
    updateParentInput(newInput) {
      this.input = newInput;
    },
    iconURL(id) {
      switch (id) {
        case 0: return "../img/items/nothing.webp";
        case 1: return "../img/items/2677.webp"; //Clue Scroll (easy)
        case 5733: return "../img/items/2801.webp"; //Clue Scroll (medium)
        case 12070: return "../img/items/2722.webp"; //Clue Scroll (hard)
        default: return "../img/items/" + id + ".webp"
      }
    },
    sortItems(d, key) {
      d[`${key}Sorted`] = !d[`${key}Sorted`];
      d.items.sort((a, b) => d[`${key}Sorted`] ? a[key] - b[key] : b[key] - a[key]);
    },
    spaceToUnder(str) {
      return str.replaceAll(' ', '_').toLowerCase()
    },
    isNormalCharm(id) {
      const charms = ["12163", "12160", "12159", "12158"]
      return charms.includes(id)
    },
    search(input) {
      this.searchResults = []

      const pushItemsToResult = (drops, result, propName, totalWeight) => {
        for (const drop of drops) {
          result[propName].push(new DisplayItem(
            drop.id, drop.name, drop.minAmount, drop.maxAmount, 
            drop.weight, 
            totalWeight
          ));
        }
      };

      if (input.length > 2) {
        const searchTerm = this.spaceToUnder(input)
        if (this.pick == "Item Sources") {
          Object.keys(this.itemSourceNPCIds).forEach(itemName => {
            if (!itemName.includes(searchTerm)) return;
            
            const npcIds = this.itemSourceNPCIds[this.spaceToUnder(itemName)];
            const result = new Result(null, npcIds);
            let npcName = "";
            
            for (const id of npcIds.split(",")) {
              const newNpcName = this.npcIdToName[id];
              if (newNpcName && newNpcName !== npcName) {
                npcName = newNpcName;
                const npcObj = this.npcObjects[npcName];
                if (!npcObj) continue;
          
                for (const item of npcObj[itemName] || []) {
                  result.name = result.name || item.name;
                  const totalWeight = this.isNormalCharm(item.id) ? npcObj.totalCharmWeight : npcObj.totalWeight;
                  result.items.push(new DisplayItem(item.id, npcName, item.minAmount, item.maxAmount, item.weight, totalWeight));
                }
              }
            }
            this.searchResults.push(result);
          });
          
        } else if (this.pick == "Drop Tables") {
          // bynpc.js
          Object.keys(this.npcObjects).forEach(npcName => {
            const npcObj = this.npcObjects[npcName];
            if (this.spaceToUnder(npcName).includes(searchTerm)) {
              const result = new Result(npcName, npcObj.ids);
              pushItemsToResult(npcObj.default, result, 'items', -1);
              pushItemsToResult(npcObj.main, result, 'items', npcObj.totalWeight);
              pushItemsToResult(npcObj.charm, result, 'charms', npcObj.totalCharmWeight);
              this.searchResults.push(result);
            }
          });
        } else if (this.pick == "Item Data") {
          // itemdata.js
          for (const item of this.itemConfigs) {
            if (this.spaceToUnder(item.name).includes(searchTerm)) {
              console.log(searchTerm + " is like itemData: " + item.name)
              this.searchResults.push(item)
            }
          }
        }
      }
    }
  },
  watch: {
    input() { this.search(this.input) },
    pick() { this.search(this.input) }
  },
  created() {
    // Proxy is used because GitLAB has CORS restrictions while GitHUB doesn't.
    // this is refreshed every 15 minutes. If it's out of sync ping @downthecrop
    const PROXY = "https://downthecrop.github.io/2009scape-mirror/Server/data/configs/";

    const fetchData = async (url) => {
      const response = await fetch(PROXY + url);
      return await response.json();
    };

    const initConfigs = async () => {
      const [npcConfigs, dropTables, itemConfigs] = await Promise.all([
        fetchData("npc_configs.json"),
        fetchData("drop_tables.json"),
        fetchData("item_configs.json")
      ]);

      this.npcIdToName = Object.fromEntries(npcConfigs.map(npc => [npc.id, npc.name]));
      this.itemIdToName = Object.fromEntries(itemConfigs.map(item => [item.id, item.name]));
      this.dropTables = dropTables;
      this.itemConfigs = itemConfigs;

      // Edge cases
      this.itemIdToName["0"] = "Nothing";
      this.itemIdToName["12070"] = "Clue Scroll (hard)";
      this.itemIdToName["5733"] = "Clue Scroll (medium)";
      this.itemIdToName["1"] = "Clue Scroll (easy)";
    };

    initConfigs();

    let checkInterval = setInterval(() => {
      if (this.itemConfigs && this.dropTables) {
        clearInterval(checkInterval);

        const processDrop = (drop, dropType, npcObj) => {
          let itemName = this.spaceToUnder(this.itemIdToName[drop.id]);

          if (dropType === 'main') {
            npcObj.totalWeight += parseFloat(drop.weight);
          } else if (dropType === 'charm') {
            npcObj.totalCharmWeight += parseFloat(drop.weight);
          }

          if (this.itemSourceNPCIds[itemName]) {
            this.itemSourceNPCIds[itemName] += `,${npcObj.ids}`;
          } else {
            this.itemSourceNPCIds[itemName] = npcObj.ids;
          }

          drop.name = this.itemIdToName[drop.id];
          npcObj[dropType].push(drop);

          if (npcObj[itemName]) {
            npcObj[itemName].push(drop);
          } else {
            npcObj[itemName] = [drop];
          }
        };

        for (const npc of this.dropTables) {
          let npcName = this.npcIdToName[npc.ids.split(",")[0]];
          if (npcName === undefined) continue;
          let npcObj = new NPCObject(npc.ids, npcName);

          if (this.npcObjects[npcName]) {
            console.log("Duplicate NPC:", npcName, " id: ", npc.ids);
            npcName = npcName + npc.ids.split(",")[0];
          }

          // Add Guaranteed / default drops
          npc['default'].forEach(drop => {
            drop.weight = -1;
            processDrop(drop, 'default', npcObj);
          });

          // Add Normal / main drops
          npc['main'].forEach(drop => {
            processDrop(drop, 'main', npcObj);
          });

          // Add Charms / charm drops
          npc['charm'].forEach(drop => {
            processDrop(drop, 'charm', npcObj);
          });

          this.npcObjects[npcName] = npcObj;
        }
      }
    }, 100);
  }
}).mount('#app')