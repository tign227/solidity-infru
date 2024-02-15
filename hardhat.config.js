require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
require("./task/ForkTransferToken")

module.exports = {
  solidity: "0.6.6",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      },
    },
  },
};
