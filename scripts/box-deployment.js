const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("Box");
  console.log('Deploying Box...');
  const instance = await upgrades.deployProxy(Box, [42], {initializer: 'store'});
  await instance.deployed();
  console.log('Box deployed to: ', instance.address);
}

main();