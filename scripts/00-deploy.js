const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying smart contract...");

  // Get the contract factory
  const Medical = await ethers.getContractFactory("MedicalRecords");

  // Get the signer account
  const accounts = await ethers.getSigners();
  const deployer = accounts[0]; // Assuming the deployer is the first account

  // Adjust network settings for XDC
  const network = "xdc"; // Specify the network you want to deploy to

  // Deploy the contract
  const medical = await Medical.connect(deployer).deploy({
    gasPrice: 1000000000, // Adjust gas price according to the XDC network
    gasLimit: 5000000, // Adjust gas limit according to the XDC network
  });

  // Wait for the contract to be deployed
  await medical.deployTransaction.wait();

  console.log("Medical is deployed at address:", medical.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
