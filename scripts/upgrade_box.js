const { ethers, upgrades } = require("hardhat");

async function main() {
  // Upgrading
  const BoxV2 = await ethers.getContractFactory("Box2");
  console.log('Upgrading Box...');
  const upgraded = await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', BoxV2);
  console.log('Upgraded to: ', upgraded.address);
}

main();