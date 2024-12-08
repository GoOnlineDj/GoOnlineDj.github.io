class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.name === "Aged Brie") {
        if (item.quality < 50) {
          item.quality += 1;
        }
        item.sellIn -= 1;
      } else if (item.name === "Sulfuras, Hand of Ragnaros") {
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        //COOL////COOL////COOL////COOL////COOL////COOL//

        if (item.sellIn >= 11) {
          item.quality += 1;
        } else if (item.sellIn > 5) {
          // else if (item.sellIn <= 10 && item.sellIn >= 6)
          item.quality += 2;
        } else if (item.sellIn > 0) {
          item.quality += 3;
        } else {
          item.quality = 0;
        }
        //COOL////COOL////COOL////COOL////COOL////COOL//

        if (item.quality > 50) {
          item.quality = 50;
        }
        // if (item.sellIn === 0) {
        //   item.quality = 0;
        // }
        item.sellIn -= 1;
        // item.quality += 1;
        // if (item.sellIn <= 5) {
        //   item.quality += 1;
        // }
        // if (item.sellIn <= 10) {
        //   item.quality += 1;
        // }
        // if (item.quality > 50) {
        //   item.quality = 50;
        // }
        // if (item.sellIn === 0) {
        //   item.quality = 0;
        // }
        // item.sellIn -= 1;
      } else {
        if (item.sellIn === 0) {
          item.quality -= 2;
        } else {
          item.quality -= 1;
        }
        if (item.quality < 0) {
          item.quality = 0;
        }
        item.sellIn -= 1;
        // if (
        //   this.items[i].name != "Aged Brie" &&
        //   this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
        // ) {
        //   if (this.items[i].quality > 0) {
        //     if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        //       this.items[i].quality = this.items[i].quality - 1;
        //     }
        //   }
        // } else {
        //   if (this.items[i].quality < 50) {
        //     this.items[i].quality = this.items[i].quality + 1;
        //     if (
        //       this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
        //     ) {
        //       if (this.items[i].sellIn < 11) {
        //         if (this.items[i].quality < 50) {
        //           this.items[i].quality = this.items[i].quality + 1;
        //         }
        //       }
        //       if (this.items[i].sellIn < 6) {
        //         if (this.items[i].quality < 50) {
        //           this.items[i].quality = this.items[i].quality + 1;
        //         }
        //       }
        //     }
        //   }
        // }
        // if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        //   this.items[i].sellIn = this.items[i].sellIn - 1;
        // }
        // if (this.items[i].sellIn < 0) {
        //   if (this.items[i].name != "Aged Brie") {
        //     if (
        //       this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
        //     ) {
        //       if (this.items[i].quality > 0) {
        //         if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        //           this.items[i].quality = this.items[i].quality - 1;
        //         }
        //       }
        //     } else {
        //       this.items[i].quality =
        //         this.items[i].quality - this.items[i].quality;
        //     }
        //   } else {
        //     if (this.items[i].quality < 50) {
        //       this.items[i].quality = this.items[i].quality + 1;
        //     }
        //   }
        // }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
