const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ownable", function () {
  beforeEach(async function() {
    [this.sign1, this.sign2] = await ethers.getSigners();
    this.Ownable = await ethers.getContractFactory("Ownable");
    this.ownable = await this.Ownable.deploy(this.sign2.address);
    await this.ownable.deployed();
  });

  it("have owner", async function () {
    const owner = await this.ownable.owner();
    expect(owner).not.to.equal(undefined);
  });

  it("have owner is correct", async function () {
    const owner = await this.ownable.owner();
    expect(owner).to.equal(this.sign2.address);
  });

  it("only owner can transfer ownership", async function () {
    await expect(this.ownable.transferOwnership(this.sign1.address)).to.be.reverted;
  });

  it("transfer ownership", async function () {
    let owner = await this.ownable.owner();
    expect(owner).to.equal(this.sign2.address);
    await this.ownable.connect(this.sign2).transferOwnership(this.sign1.address);
    owner = await this.ownable.owner();
    expect(owner).to.equal(this.sign1.address);
  });

  it("emit event -  OwnershipTransferred", async function () {
    await expect(
        this.ownable.connect(this.sign2).transferOwnership(this.sign1.address)
        ).to.emit(this.ownable, 'OwnershipTransferred').withArgs(this.sign2.address, this.sign1.address);
  });
});
