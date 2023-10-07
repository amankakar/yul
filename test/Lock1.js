
const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const abi = require("../build/lock.json")
const bytecode = require("../build/bytecode.json");

describe("Lock", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployYulContractFixture() {
    //   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    //   const ONE_GWEI = 1_000_000_000;
  
    //   const lockedAmount = ONE_GWEI;
    //   const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;
  
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  console.log(bytecode.bytecode)
      const Lock = await ethers.getContractFactory(abi , bytecode.bytecode);
      const lockInstance = await Lock.deploy();
    //   await lockInstance.deployed();
  console.log("lock" ,lockInstance.target)
      return { lockInstance, owner, otherAccount };
    }
  
    describe("Deployment", function () {
      it("Should set the right unlockTime", async function () {
        const { lockInstance, owner  } = await loadFixture(deployYulContractFixture);
        await expect(lockInstance.target).is.properAddress
    });
    it("Should set the right unlockTime", async function () {
        const { lockInstance, owner  } = await loadFixture(deployYulContractFixture);
        await expect(lockInstance.target).is.properAddress
    });
    it("Should call func1", async function () {
        const { lockInstance, owner  } = await loadFixture(deployYulContractFixture);
         expect(await lockInstance.func1()).to.equal(4)
    });
    it("Should not allow to call other func", async function () {
        const { lockInstance, owner  } = await loadFixture(deployYulContractFixture);
         expect(await lockInstance.func()).to.be.rejected
    });
    });
  
    
  });
  