const os = require('os');

const homeDirectory = os.homedir();
const osPlatform = os.platform();
const cpuCore = os.cpus();

const coreCount = cpuCore.length
const cpuModel = cpuCore[0].model;

console.log(`The OS platform is -> ${osPlatform}`);
console.log(`My home directory is -> ${homeDirectory}`);
console.log(`I can see your ${cpuModel} has ${coreCount} cores.`);