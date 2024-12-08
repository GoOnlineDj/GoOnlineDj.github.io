const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  describe("default item behavior", () => {
    it("should have a name value", function () {
      const gildedRose = new Shop([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe("foo");
    });

    it("should have a lower sellIn value at the end of the day", () => {
      const gildedRose = new Shop([new Item("foo", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("should have a lower sellIn value at the end of the day", () => {
      const gildedRose = new Shop([new Item("foo", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
    });

    it("should have a twice lower quality value once the sellIn date has passed", () => {
      const gildedRose = new Shop([new Item("foo", 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it("should have a quality value thats only positive", () => {
      const gildedRose = new Shop([new Item("foo", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});

describe("specilaty behavior", () => {
  describe("Aged Brie", () => {
    it("should have increased quality value the older it gets", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 20)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(21);
    });
    it("should have a quality value of no more than 50", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("should never decrease in quality or sellIn", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(20);
      expect(items[0].sellIn).toBe(10);
    });

    it("should never have a quality of more than 50", () => {
      const gildedRose = new Shop([
        new Item("Sulfuras, Hand of Ragnaros", 10, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });
});
describe("Backstage passes to a TAFKAL80ETC concert", () => {
  it("should increase in quality as sellIn gets lower", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
  it("should increase in quality by 2 when there is 10 days or less", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it("should increase in quality by 2 when there is 10 days or less + never more than 50", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should increase in quality by 3 when there in 5 days or less", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it("should increase in quality by 3 when there in 5 days or less + never be more than 50", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("should have a quality value of zero when sellIn is 0", () => {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
