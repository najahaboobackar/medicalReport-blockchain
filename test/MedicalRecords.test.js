const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MedicalRecords", function () {
  let user1, medical, transactionResponse, transactionReceipt;

  beforeEach(async function () {
    const accounts = await ethers.getSigners();
    user1 = accounts[1];
    const Medical = await ethers.getContractFactory("MedicalRecords");
    medical = await Medical.connect(user1).deploy();
    await medical.deployed();
  });

  describe("Deployment", function () {
    it("should deploy the contract successfully", async function () {
      expect(await medical.address).to.not.be.undefined;
    });
  });

  describe("Add Record", function () {
    beforeEach(async function () {
      transactionResponse = await medical.addRecord(
        "Wastron",
        22,
        "Male",
        "B positive",
        "Dengue",
        "Dengue",
        "Dengue"
      );
      transactionReceipt = await transactionResponse.wait();
    });

    it("should emit an Add Record event", async function () {
      const event = transactionReceipt.events.find(e => e.event === "MedicalRecords__AddRecord");
      expect(event).to.not.be.undefined;
      const args = event.args;
      expect(args.name).to.equal("Wastron");
    });

    it("The getRecords function should work", async function () {
      const recordId = await medical.getRecordId();
      const record = await medical.getRecord(recordId);
      expect(record.name).to.equal("Wastron");
    });
  });

  describe("Delete Record", function () {
    beforeEach(async function () {
      transactionResponse = await medical.addRecord(
        "Wastron",
        22,
        "Male",
        "B positive",
        "Dengue",
        "Dengue",
        "Dengue"
      );
      transactionReceipt = await transactionResponse.wait();
      transactionResponse = await medical.deleteRecord(1);
      transactionReceipt = await transactionResponse.wait();
    });

    it("should delete the record correctly", async function () {
      expect(await medical.getDeleted(1)).to.be.true;
    });

    it("should emit a delete event", async function () {
      const event = transactionReceipt.events.find(e => e.event === "MedicalRecords__DeleteRecord");
      expect(event).to.not.be.undefined;
    });
  });
});
