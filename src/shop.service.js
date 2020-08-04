const { readFile } = require('./document.service');

async function findBySizePack(packs, sweetOrder) {

  try {

    let result = 0;

    for (let index = 0; index < packs.length; index++) {
      const pack = packs[index];

      if (pack >= sweetOrder) {
        const mod = pack % sweetOrder;
        // console.log(pack / sweetOrder);
        result = pack / sweetOrder;
        return result;
      }

    }

    // packs.forEach(pack => {
    //   if (pack >= sweetOrder) {
    //     const mod = pack % sweetOrder;
    //     if (mod == 0) {
    //       console.log(pack / sweetOrder);
    //       result = pack / sweetOrder;
    //       break;
    //     }
    //   }
    // });

    return result;

  } catch (error) {
    console.log(error);
    throw new Error(`[ERROR] a error happend when the application try to read the line ${file}`);
  }
}

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
  const patterSweetOrder = /\d*/gm;

  if (!sweetOrder.match(patterSweetOrder)) {
    listValidationError.push("The sweet order is not in a valid order format for the shop.");
  }

  return listValidationError;
}

exports.getBestPack = getBestPack;
