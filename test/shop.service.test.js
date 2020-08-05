
var packService = require('../src/shop.service.js');

test('read a file of the packs to be equal a array of packs',
  async () => {

    const packs = await packService.getPacksFromFile("pack-input");
    expect(packs.length).toBe(5);
    expect(packs).toEqual(["250", "500", "1000", "2000", "5000"]);
});

test('validateInput with argument for find best packs',
  async () => {

    const result = await packService.validateInput("test");
    expect(result[0]).toEqual("The sweet order is not in a valid order format for the shop.");
});


test('find the best size pack',
  async () => {

    const packs = ["250", "500", "1000", "2000", "5000"];

    const result1 = await packService.findBySizePack(packs, 1);
    expect(result1).toEqual("1 x 250");

    const result2 = await packService.findBySizePack(packs, 250);
    expect(result2).toEqual("1 x 250");

    const result3 = await packService.findBySizePack(packs, 251);
    expect(result3).toEqual("1 x 500");

    const result4 = await packService.findBySizePack(packs, 500);
    expect(result4).toEqual("1 x 500");

    const result5 = await packService.findBySizePack(packs, 1000);
    expect(result5).toEqual("1 x 1000");
});
