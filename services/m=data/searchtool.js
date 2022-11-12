export default {
  template: `
    <div v-if="dropTables && itemConfigs">
    <div class="centered">
    <input type="radio" v-model="pick" value="Drop Tables" checked />Drop Tables
    <input type="radio" v-model="pick" value="Item Sources" />Item Sources
    <input type="radio" v-model="pick" value="Item Data" />Item Data
    <br>
    <div class="headings">
            <span class="headertitleleft"><span class="headertitleright" id="search">{{pick}}</span></span>
    </div>
    <br>
    <input v-model="input" style="width:50%;" placeholder="NPC/Item Name">
    <p>Notes: RDT Slot = Rare Drop Table <a href=".././rdt.html">(link)</a>, Summoning Charms are rolled separately</p>
    <br>
    </div>
      <!-- NPC Droptables (bynpc) -->
      <div v-if="pick == 'Drop Tables'">
        <div v-for="npc in searchResults">
          <h1>{{ npc.name }}</h1>
          <p class="npcIds">NPC ids: {{ npc.ids }}</p>
          <tbody>
          <tr v-for="item in npc.items">
            <td><img :src=iconURL(item.id)></td>
            <td>{{item.name}}  <br> id: {{item.id}}</td>
            <td @click="sortAmount(npc)">
              {{item.amount}} 
              <br>
              <p style="font-size:12px">
                {{item.expectedQuantity}}
              </p>
            </td>
            <td :class=item.rarityStyle @click="sortFractional(npc)">{{item.fractional}}</td>  
          </tr>
          </tbody>
        </div>
      </div>
      <div v-if="pick == 'Item Sources'">
        <!-- Item Sources (byitem) -->
        <div v-for="item in searchResults">
          <h1>{{ item.name }}</h1>
          <p class="npcIds">NPC ids: {{ item.ids }}</p>
          <tbody>
          <tr v-for="npc in item.items">
            <td>{{npc.name}}</td>
            <td><img :src=iconURL(npc.id)></td>
            <td>{{item.name}} <br> id: {{npc.id}}</td>
            <td @click="sortAmount(item)">
              {{npc.amount}}
              <br>
              <p style="font-size:12px">
                {{npc.expectedQuantity}}
              </p>
            </td>
            <td :class=npc.rarityStyle @click="sortFractional(item)">{{npc.fractional}}</td>  
          </tr>
          </tbody>
        </div>
      </div>
      <div v-if="pick == 'Item Data'">
      <!-- Item Data (itemstats) -->
      <div v-for="item in searchResults">
        <h1>{{ item.name }}</h1>
        <p class="npcIds">Item id: {{ item.id }}</p>
        <tbody>
        <tr>
          <td v-if="item.bonuses" :set="bonus = getBonuses(item)">
          <div class="stat-data">Attack bonuses</div>
          <tbody>
            <tr></tr>
            <td><img src=".././img/items/1207.webp"></td>
            <td><img src=".././img/items/1325.webp"></td>
            <td><img src=".././img/items/1339.webp"></td>
            <td><img src=".././img/alt/magic.webp"></td>
            <td><img src=".././img/alt/ranged.webp"></td>
            <tr>
              <td>{{bonus.aStab}}</td>
              <td>{{bonus.aSlash}}</td>
              <td>{{bonus.aCrush}}</td>
              <td>{{bonus.aMagic}}</td>
              <td>{{bonus.aRanged}}</td>
            </tr>
          </tbody>
          <div class="stat-data">Defense bonuses</div>
          <tbody>
            <tr></tr>
            <td><img src=".././img/items/1207.webp"></td>
            <td><img src=".././img/items/1325.webp"></td>
            <td><img src=".././img/items/1339.webp"></td>
            <td><img src=".././img/alt/magic.webp"></td>
            <td><img src=".././img/alt/ranged.webp"></td>
            <td><img src=".././img/alt/summoning.webp"></td>
            <tr>
              <td>{{bonus.dStab}}</td>
              <td>{{bonus.dSlash}}</td>
              <td>{{bonus.dCrush}}</td>
              <td>{{bonus.dMagic}}</td>
              <td>{{bonus.dRanged}}</td>
              <td>{{bonus.dSummoning}}</td>
            </tr>
          </tbody>
          <div class="stat-data">Other bonuses</div>
          <tbody>
            <tr></tr>
            <td><img src=".././img/alt/Strength_icon.webp"></td>
            <td><img src=".././img/alt/RangedStrength.webp"></td>
            <td><img src=".././img/alt/MagicStrength.webp"></td>
            <td><img src=".././img/alt/Prayer_icon.webp"></td>
            <tr>
              <td>{{bonus.strength}}</td>
              <td>{{bonus.rangedStr}}</td>
              <td>{{bonus.magicStr}}</td>
              <td>{{bonus.prayer}}</td>
            </tr>
          </tbody>
          </td>
          <td>{{item.name}} <img :src=iconURL(item.id)></td>
          <td>
            <p v-for="prop in dumpKeys(item)" style="text-align:left;margin:0;"><b>{{prop.key}}</b> {{prop.val}}</p>
          </td>
        </tr>
        </tbody>
      </div>
    </div>
    </div>
    <div v-else>
      <div class="centered">
        <p>Loading JSON..</p>
      </div>
    </div>
    `,
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
    dumpKeys(item) {
      const list = []
      for (const [key, value] of Object.entries(item)) {
        list.push({ key: key, val: value })
      }
      return list
    },
    getBonuses(item) {
      const stats = item.bonuses.split(",")
      return {
        aStab: stats[0],
        aSlash: stats[1],
        aCrush: stats[2],
        aMagic: stats[3],
        aRanged: stats[4],
        dStab: stats[5],
        dSlash: stats[6],
        dCrush: stats[7],
        dMagic: stats[8],
        dRanged: stats[9],
        dSummoning: stats[10],
        strength: stats[11],
        prayer: stats[12],
        magicStr: stats[13],
        rangedStr: stats[14],
      }
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
    sortFractional(d) {
      d.fractionSorted = !d.fractionSorted
      if (d.fractionSorted) d.items.sort((a, b) => a.rarity - b.rarity);
      else d.items.sort((a, b) => b.rarity - a.rarity);
    },
    sortAmount(d) {
      d.amountSorted = !d.amountSorted
      if (!d.amountSorted) d.items.sort((a, b) => a.maxAmount - b.maxAmount);
      else d.items.sort((a, b) => b.maxAmount - a.maxAmount);
    },
    spaceToUnder(str) {
      return str.replaceAll(' ', '_').toLowerCase()
    },
    search(input) {
      this.searchResults = []

      class Result {
        constructor(name, ids) {
          this.name = name;
          this.ids = ids;
          this.items = [];
        }
      }

      class DisplayItem {
        constructor(id, name, min, max, weight, totalWeight) {
          this.percent = (weight / totalWeight) * 100;
          this.id = parseInt(id);
          this.name = name;
          this.minAmount = parseInt(min);
          this.maxAmount = parseInt(max);
          this.amount = (min != max) ? min + "-" + max : min;
          this.weight = weight;
          this.totalWeight = totalWeight;
          this.fractional = this.getFractional();
          this.rarity = (this.weight != -1) ? parseFloat((this.percent).toFixed(2)) : 100;
          this.rarityStyle = this.getStyle();
          this.expectedQuantity = this.getExpectedQuantity();
        }
        getStyle() {
          if (this.rarity > 99.99) return "always"
          if (this.rarity > 4) return "common"
          if (this.rarity > 1) return "uncommon"
          if (this.rarity > 0.1) return "rare"
          return "veryrare"
        }
        getFractional() {
          if (this.weight === -1) return "Always"
          return "1/" + (+parseFloat(100 / this.percent).toFixed(2).replace(/(\.0+|0+)$/, ''))
        }
        getExpectedQuantity() {
          let t = 0;
          const range = Array(this.maxAmount - this.minAmount + 1).fill(1).map((x, y) => this.minAmount + y);
          return ((range.reduce((a, b) => a + b, t) / range.length * (this.rarity / 100))).toFixed(2)
        }
      }

      if (input.length > 2) {
        const searchTerm = this.spaceToUnder(input)
        if (this.pick == "Item Sources") {
          // byitem.js
          Object.keys(this.itemSourceNPCIds).forEach(itemName => {
            if (itemName.includes(searchTerm)) {
              console.log(searchTerm + " is like item: " + itemName)

              let npcName = ""
              let npcIds = this.itemSourceNPCIds[this.spaceToUnder(itemName)]

              const result = new Result(null, npcIds)

              for (const id of npcIds.split(",")) {
                if (this.npcIdToName[id] && this.npcIdToName[id] != npcName) {
                  npcName = this.npcIdToName[id]
                  if (this.npcObjects[npcName]) {
                    try {
                      for (const item of this.npcObjects[npcName][itemName]) {
                        if (result.name == null) result.name = item.name
                        result.items.push(new DisplayItem(item.id, npcName, item.minAmount, item.maxAmount, item.weight, this.npcObjects[npcName].totalWeight))
                      }
                    } catch (e) {
                      console.log("error in" + e)
                    }
                  }
                }
              }
              this.searchResults.push(result)
            }
          })
        } else if (this.pick == "Drop Tables") {
          // bynpc.js
          Object.keys(this.npcObjects).forEach(npcName => {
            if (this.spaceToUnder(npcName).includes(searchTerm)) {
              console.log(searchTerm + " is like npc: " + npcName)
              const result = new Result(npcName, this.npcObjects[npcName].ids)
              // Guaranteed / 'default' drops
              for (const drop of this.npcObjects[npcName].default) {
                result.items.push(new DisplayItem(drop.id, drop.name, drop.minAmount, drop.maxAmount, -1, -1))
              }
              // Normal / 'main' drops
              for (const drop of this.npcObjects[npcName].main) {
                result.items.push(new DisplayItem(drop.id, drop.name, drop.minAmount, drop.maxAmount, drop.weight, this.npcObjects[npcName].totalWeight))
              }
              this.searchResults.push(result)
            }
          })
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
    const PROXY = "https://downthecrop.github.io/2009scape-mirror/Server/data/configs/"
    fetch(PROXY + "npc_configs.json").then(r => r.json()).then(npc_configs => {
      for (const npc of npc_configs) {
        this.npcIdToName[npc.id] = npc.name;
      }
    });
    fetch(PROXY + "drop_tables.json").then(r => r.json()).then(drop_tables => this.dropTables = drop_tables);
    fetch(PROXY + "item_configs.json").then(r => r.json()).then(item_configs => {
      // Create a dictionary of item ids to item names
      for (const item of item_configs) {
        this.itemIdToName[item.id] = item.name
      }
      // Edge cases where an itemId is being used outside of its original name.
      // eg 5733 is "Rotten potato" but is instead a medium clue.
      this.itemIdToName["0"] = "Nothing"
      this.itemIdToName["12070"] = "Clue Scroll (hard)"
      this.itemIdToName["5733"] = "Clue Scroll (medium)"
      this.itemIdToName["1"] = "Clue Scroll (easy)"
      this.itemConfigs = item_configs;
    })
    let checkInterval = setInterval(() => {
      if (this.itemConfigs && this.dropTables) {
        clearInterval(checkInterval);

        // Create an NPC object for each npc in the droptable
        class NPCObject {
          constructor(ids, name) {
            this.ids = ids;
            this.name = name;
            this.totalWeight = 0
            this.default = []
            this.main = []
          }
        }

        for (const npc of this.dropTables) {
          let npcName = this.npcIdToName[npc.ids.split(",")[0]]
          if (npcName === undefined) continue;
          let npcObj = new NPCObject(npc.ids, npcName)

          if (this.npcObjects[npcName]) {
            console.log("Duplicate NPC:", npcName, " id: ", npc.ids)
            npcName = npcName + npc.ids.split(",")[0]
          }

          // Add Guaranteed / default drops
          npc['default'].forEach(drop => {
            let itemName = this.spaceToUnder(this.itemIdToName[drop.id])
            if (this.itemSourceNPCIds[itemName]) {
              // Add the ids of the current NPC to item sourcelist of this drop
              this.itemSourceNPCIds[itemName] += `,${npc['ids']}`
            } else {
              // This is the first NPC dropping this item.
              this.itemSourceNPCIds[itemName] = npc['ids']
            }
            drop.weight = -1
            drop.name = this.itemIdToName[drop.id]
            npcObj.default.push(drop)
            if (npcObj[itemName]) {
              npcObj[itemName].push(drop)
            } else {
              npcObj[itemName] = [drop]
            }
          })
          
          // Add Normal / main drops
          npc['main'].forEach(drop => {
            let itemName = this.spaceToUnder(this.itemIdToName[drop.id])
            npcObj.totalWeight += parseFloat(drop.weight)
            if (this.itemSourceNPCIds[itemName]) {
              // Add the ids of the current NPC to item sourcelist of this drop
              this.itemSourceNPCIds[itemName] += `,${npc['ids']}`
            }
            else {
              // This is the first NPC dropping this item.
              this.itemSourceNPCIds[itemName] = npc['ids']
            }
            drop.name = this.itemIdToName[drop.id]
            npcObj.main.push(drop)
            if (npcObj[itemName]) {
              npcObj[itemName].push(drop)
            } else {
              npcObj[itemName] = [drop]
            }
          })
          this.npcObjects[npcName] = npcObj
        }
      }
    }, 100)
  }
}