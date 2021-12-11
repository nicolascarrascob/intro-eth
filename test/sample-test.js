const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  beforeEach(async function() {
    [this.nicolas, this.juan] = await ethers.getSigners();
    this.Ownable = await ethers.getContractFactory("Ownable");
    this.ownable = await Ownable.deploy("Hello, world!");
    await this.ownable.deployed();
  });


  it("have owner", async function () {
    const owner = await this.ownable.owner();
    expect(owner).to.not.be(undefined);
  });
});
