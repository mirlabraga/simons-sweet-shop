const { readFile } = require('./document.service');

async function findBySizePack(packs, sweetOrder) {

  try {

    let maxWaste = 0;
    let result = [];
    let totalArray = 0;

    while (totalArray < sweetOrder) {


      if (sweetOrder > Number(packs[packs.length - 1])) {
        result.push(Number(packs[packs.length - 1]));
        totalArray = totalPacks(result);
        continue;
      }

      if (totalArray) {
        const difference = packs.filter(pack => pack - (sweetOrder - totalArray) > 0);
        result.push(Number(difference[0]));
        totalArray = totalPacks(result);
        continue;
      }

      for (let j = 0; j < packs.length; j++) {
        const waste = sweetOrder % packs[j];
        if (waste == 0) {
          maxWaste = sweetOrder;
          result = [];
          result.push(Number(packs[j]));
        } else if (maxWaste < waste) {

          maxWaste = waste;
          if (waste == sweetOrder) {
            result = [];
            result.push(Number(packs[j]));
            const difference2 = packs[j] - sweetOrder;
            if (difference2 > packs[0]) {
              result.pop();
              result.push(Number(packs[j - 1]));
              totalArray = totalPacks(result);
            }
          }
        }
      }
      totalArray = totalPacks(result);
    }

    return result;

  } catch (error) {
    console.log(error);
    throw new Error(`[ERROR] a error happend when the application try to read the line ${file}`);
  }
}

const totalPacks = arr => arr.reduce((a, b) => a + b, 0);

async function getPacksFromFile(file) {
  const readInterface = await readFile(file);
  let packs = [];

  for await (const line of readInterface) {
    if (line) {
      console.log(`[INFO] line information about pack ${line}.`);
      packs = line.split(";");
    }
  }
  return packs;
}

async function getBestPack(dataInput) {

  const file = dataInput[0];
  const sweetOrder = dataInput[1];

  console.log(`[INFO] file: ${file} sweetOrder: ${sweetOrder}`);

  const validate = await validateInput(sweetOrder);
  if (validate.length > 0) {
    throw new Error(validate);
  }

  const packs = await getPacksFromFile(file);
  console.log(`[INFO] packs on store: ${packs}`);
  return await findBySizePack(packs, sweetOrder);
}

async function validateInput(sweetOrder) {

  const listValidationError = [];
  const patterSweetOrder = /\d/gm;

  if (!sweetOrder.match(patterSweetOrder)) {
    listValidationError.push("The sweet order is not in a valid order format for the shop.");
  }

  return listValidationError;
}

exports.validateInput = validateInput;
exports.findBySizePack = findBySizePack;
exports.getPacksFromFile = getPacksFromFile;
exports.getBestPack = getBestPack;
