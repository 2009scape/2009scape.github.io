export default Vue.defineComponent({
  template:
  `
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
  `,
  methods: {
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
    dumpKeys(item) {
      return Object.entries(item).map(([key, val]) => ({ key, val }))
    }
  },
  props: {
    searchResults: { type: Object },
    iconURL: { type: Function },
  }
});