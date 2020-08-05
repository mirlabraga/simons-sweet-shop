const packService = require('./src/shop.service.js');

function readInputParameters() {
  const args = process.argv.slice(2);
  console.log(`[INFO] the sweets ordered is ${args}.`);
  return args;
}

async function main() {
  const dataInput = readInputParameters();
  try {
    const result = await packService.getBestPack(dataInput);
    if (result) {

      console.log(`[INFO] =====================================`);
      console.log(`[INFO] == The correct solution: ${result} ==`);
      console.log(`[INFO] =====================================`);
    } else {
      console.log(`[INFO] == no results were found with the input arguments!.==`);
    }
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
  }
}

main();
