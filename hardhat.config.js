require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "eJLTsUk4HJNiX3zF-9bjKMH2vXa9f4Ik";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const MUMBAI_PRIVATE_KEY =
  "40da69b025239379deb455b310e59308fdc37050726c942ba4641c1a4131430b";

module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "UEYT677Q3DSFMSDZ44AMI7ADBGU25YGQH6", // Optional: If you want to verify contracts on Etherscan
  },
};
