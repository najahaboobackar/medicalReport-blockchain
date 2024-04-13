const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying smart contract...");
  const Medical = await ethers.getContractFactory("MedicalRecords");
  const medical = await Medical.deploy(); // Deploy the contract
  console.log(`Medical is deployed at address: ${medical.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
