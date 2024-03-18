export default Vue.defineComponent({
  template:
  `
  <div v-for="item in searchResults">
    <h1>{{ item.name }}</h1>
    <p class="npcIds">NPC ids: {{ item.ids }}</p>
    <tbody>
    <tr v-for="npc in item.items">
      <td>{{npc.name}}</td>
      <td><img :src=iconURL(npc.id)></td>
      <td>{{item.name}} <br> id: {{npc.id}}</td>
      <td @click="() => sortItems(item, 'maxAmount')">
        {{npc.amount}}
        <br>
        <p class="quantity">{{npc.expectedQuantity}}</p>
      </td>
      <td :class=npc.rarityStyle @click="() => sortItems(item, 'rarity')">{{npc.fractional}}</td>  
    </tr>
    </tbody>
  </div>
  `,
  props: {
    searchResults: { type: Object },
    sortItems: { type: Function },
    iconURL: { type: Function },
  }
});