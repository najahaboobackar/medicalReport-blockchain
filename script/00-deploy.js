const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying the smart contract...");

  const Medical = await ethers.getContractFactory("MedicalRecords");
  const accounts = await ethers.getSigners();

  const medical = await Medical.connect(accounts[0]).deploy();
  await medical.deployed();

  console.log(`Medical contract deployed at address: ${medical.address}`);

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
