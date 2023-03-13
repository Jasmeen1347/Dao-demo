require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-web3");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks:{
    hardhat:{
      chainId:1337
    },
    goerli: {
      url: "Your Infure Or Alchemy Url",
      accounts: ["Account private key"]
    }
  },
  settings:{
    optimizer:{
      enabled:true,
      runs:200
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/abis"
}
};
