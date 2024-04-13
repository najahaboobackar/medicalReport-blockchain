const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying smart contract...");
  const Medical = await ethers.getContractFactory("MedicalRecords");
<<<<<<< HEAD
  const medical = await Medical.deploy(); // Deploy the contract
  console.log(`Medical is deployed at address: ${medical.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
=======
  const account = await ethers.getSigners();
  const medical = await Medical.connect(account[1]).deploy();
  await medical.deployed();
  console.log(`Medical is deployed in address ${medical.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
>>>>>>> a5b03211c91015d15912112b5fcd574189daf75c
