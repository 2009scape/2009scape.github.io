

export default Vue.defineComponent({
  template:
  `
  <div class="centered">
    <input type="radio" v-model="pick" @change="updatePick" value="Drop Tables" checked />Drop Tables
    <input type="radio" v-model="pick" @change="updatePick" value="Item Sources" />Item Sources
    <input type="radio" v-model="pick" @change="updatePick" value="Item Data" />Item Data
    <br>
    <div class="headings">
      <span class="headertitleleft"><span class="headertitleright" id="search">{{pick}}</span></span>
    </div>
    <br>
    <input v-model="input" @input="updateInput" style="width:50%;" placeholder="NPC/Item Name">
    <p>Notes: RDT Slot = Rare Drop Table <a href=".././rdt.html">(link)</a>, Summoning Charms are rolled separately</p>
    <br>
  </div>
  `,
  data() {
    return {
      pick: "Drop Tables",
      input: "",
    }
  },
  methods: {
    updatePick() { this.$emit('update-pick', this.pick) },
    updateInput() { this.$emit('update-input', this.input) }
  }
});