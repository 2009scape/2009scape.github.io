export default Vue.defineComponent({
  template:
  `
  <div v-for="npc in searchResults">
    <h1>{{ npc.name }}</h1>
    <p class="npcIds">NPC ids: {{ npc.ids }}</p>
    <tbody>
      <tr v-for="item in npc.items">
        <td><img :src=iconURL(item.id)></td>
        <td>{{item.name}}  <br> id: {{item.id}}</td>
        <td @click="() => sortItems(npc, 'maxAmount')">
          {{item.amount}} 
          <br>
          <p class="quantity">
            {{item.expectedQuantity}}
          </p>
        </td>
        <td :class=item.rarityStyle @click="() => sortItems(npc, 'rarity')">{{item.fractional}}</td>  
      </tr>

      <!-- Adding a spacer row -->
      <tr v-if="npc.tertiary.length">
        <td colspan="4" class="charm-spacer"></td>
      </tr>

      <tr v-for="item in npc.tertiary">
        <td><img :src=iconURL(item.id)></td>
        <td>{{item.name}}  <br> id: {{item.id}}</td>
        <td>
          {{item.amount}} 
          <br>
          <p class="quantity">
            {{item.expectedQuantity}}
          </p>
        </td>
        <td :class=item.rarityStyle>{{item.fractional}}</td>  
      </tr>
      
      <!-- Adding a spacer row -->
      <tr v-if="npc.charms.length">
        <td colspan="4" class="charm-spacer"></td>
      </tr>
      
      <tr v-for="item in npc.charms">
        <td><img :src=iconURL(item.id)></td>
        <td>{{item.name}}  <br> id: {{item.id}}</td>
        <td>
          {{item.amount}} 
          <br>
          <p class="quantity">
            {{item.expectedQuantity}}
          </p>
        </td>
        <td :class=item.rarityStyle>{{item.fractional}}</td>  
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