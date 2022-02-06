import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xE701CFAF94E5f00834DF77D181CeFC5293D912A5';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}