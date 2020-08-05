
var packService = require('../src/shop.service.js');

test('read a line of the packs to be equal a array with 1 element of the pack',
  async () => {

    const packs = await packService.getPacksFromFile("pack-input");
    expect(packs.length).toBe(5);
    expect(packs).toEqual(["250", "500", "1000", "2000", "5000"]);
});
