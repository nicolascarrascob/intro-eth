// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const [sign1, sign2] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const Coin = await hre.ethers.getContractFactory("Coin");
  const coin = await Coin.deploy(10);

  await coin.deployed();

  console.log("Coin deployed to:", coin.address);
  /*const foo = await coin.owner();*/
  console.log('Balance: ', await coin.balanceOf(sign1.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
