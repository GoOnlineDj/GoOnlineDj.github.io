class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

//teacher+code// const SpecialtyItemName = [
//teacher+code////   "Aged Brie",
//teacher+code////   "Sulfuras, Hand of Ragnaros",
//teacher+code////   "Backstage passes to a TAFKAL80ETC concert",
//teacher+code//// ];

const ItemHandeler = {
  "Aged Brie": (item) => {
    if (item.quality < 50) {
      item.quality += 1;
    }
    item.sellIn -= 1;
  },
  "Sulfuras, Hand of Ragnaros": (_item) => {},
  "Backstage passes to a TAFKAL80ETC concert": (item) => {
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
  },
  default: (item) => {
    if (item.sellIn > 0) {
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
    // if (item.sellIn === 0) {
    //   item.quality -= 2;
    // } else {
    //   item.quality -= 1;
    // }
    if (item.quality < 0) {
      item.quality = 0;
    }
    item.sellIn -= 1;
  },
};

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      //COOL//COOL/COOL//COOL//COOL//
      //COOL//COOL/COOL//COOL//COOL//
      const handlerName = Object.hasOwn(ItemHandeler, item.name)
        ? item.name
        : "default";
      //COOL//COOL/COOL//COOL//COOL//
      //COOL//COOL/COOL//COOL//COOL//
      //NOTES//Object.keys(ItemHandeler).includes(item.name);//
      //Linar search after turning keys into array might get expensive.
      //NOTES//Object.keys(ItemHandeler).includes(item.name);//
      //teacher+code// // SpecialtyItemName.includes(item.name)
      //teacher+code// // ? item.name
      //teacher+code// // : "default";
      ItemHandeler[handlerName](item);

      // if (item.name === "Aged Brie") {
      //   ItemHandeler[item.name](item);

      //$$$// if (item.quality < 50) {
      //$$$//   item.quality += 1;
      //$$$// }
      //$$$// item.sellIn -= 1;
      // } else if (item.name === "Sulfuras, Hand of Ragnaros") {
      //   ItemHandeler[item.name](item);
      // } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      //   ItemHandeler[item.name](item);
      //$$$$//COOL////COOL////COOL////COOL////COOL////COOL//
      // if (item.sellIn >= 11) {
      //   item.quality += 1;
      // } else if (item.sellIn > 5) {
      //$$$$$// else if (item.sellIn <= 10 && item.sellIn >= 6)
      //   item.quality += 2;
      // } else if (item.sellIn > 0) {
      //   item.quality += 3;
      // } else {
      //   item.quality = 0;
      // }
      //$$$$$;//COOL////COOL////COOL////COOL////COOL////COOL//
      // if (item.quality > 50) {
      //   item.quality = 50;
      // }
      //$$$$$; // if (item.sellIn === 0) {
      //$$$$$;//   item.quality = 0;
      //$$$$$; // }
      // item.sellIn -= 1;
      //$$$$$; // item.quality += 1;
      //$$$$$; // if (item.sellIn <= 5) {
      //$$$$$ //   item.quality += 1;
      //$$$$$;// }
      //$$$$$;// if (item.sellIn <= 10) {
      //$$$$$;//   item.quality += 1;
      //$$$$$;// }
      //$$$$$;// if (item.quality > 50) {
      //$$$$$;//   item.quality = 50;
      //$$$$$;// }
      //$$$$$;// if (item.sellIn === 0) {
      //$$$$$;//   item.quality = 0;
      //$$$$$;// }
      //$$$$$;// item.sellIn -= 1;
      // } else {
      //   ItemHandeler.default(item);
      //$$$$// if (item.sellIn > 0) {
      //   item.quality -= 1;
      // } else {
      //   item.quality -= 2;
      // }
      //$$$$$// if (item.sellIn === 0) {
      //$$$$$//   item.quality -= 2;
      //$$$$$ // } else {
      //$$$$$//   item.quality -= 1;
      //$$$$$// }
      // if (item.quality < 0) {
      //   item.quality = 0;
      // }
      // item.sellIn -= 1;
      //{DONT DELETE}// if (
      //{DONT DELETE}////   this.items[i].name != "Aged Brie" &&
      //{DONT DELETE}// //   this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
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

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
