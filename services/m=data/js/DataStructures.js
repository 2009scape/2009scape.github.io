export class Result {
  constructor(name, ids) {
    this.name = name;
    this.ids = ids;
    this.charms = [];
    this.items = [];
  }
}

export class NPCObject {
  constructor(ids, name) {
    this.ids = ids;
    this.name = name;
    this.totalWeight = 0
    this.totalCharmWeight = 0
    this.default = []
    this.main = []
    this.charm = []
  }
}

export class DisplayItem {
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
    if (this.minAmount > this.maxAmount) {
      console.error("ERROR WITH DROP ID", this.id, "- MinValue > MaxValue")
      return (0)
    }
    const range = Array(this.maxAmount - this.minAmount + 1).fill(1).map((x, y) => this.minAmount + y);
    return ((range.reduce((a, b) => a + b, t) / range.length * (this.rarity / 100))).toFixed(2)
  }
}