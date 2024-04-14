const { ethers } = require("hardhat");
const config = require("../src/config.json");
const wait = (seconds) => {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
  const { chainId } = await ethers.provider.getNetwork();
  console.log(`Using chainId ${chainId}`);
  const account = await ethers.getSigners();
  const medical = await ethers.getContractAt(
    "MedicalRecords",
    config[chainId].medical.address
  );
  console.log(`MedicalRecord smart contract fetched at ${medical.address}`);
  let transactionResponse;
  const user1 = account[0];
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B positive",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  transactionResponse = await medical
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A negative",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await medical.getRecordId()}`);
  // Other record additions are omitted for brevity...
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
