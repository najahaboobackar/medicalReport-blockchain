require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.4",
  networks: {
    apothem: {
      url: "https://rpc.apothem.network",
      accounts: ['67ed5d4a98c75e6fc53525212031033654a6dad014b1b88f606eaa82e2e09c01'], // Replace with your private key
      chainId: 51, // Chain ID for Apothem Testnet
    },
    xdcmainnet: {
      url: "https://rpc.xinfin.network",
      accounts: ['67ed5d4a98c75e6fc53525212031033654a6dad014b1b88f606eaa82e2e09c01'], // Replace with your private key
      chainId: 50, // Chain ID for XDC Mainnet
    }
  }
};
