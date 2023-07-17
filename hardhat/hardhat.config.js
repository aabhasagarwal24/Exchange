require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
//Token Contract Address: 0x42F4808A67Fc8A7f6c279F19fED8dE291574C3aB
//Exchange Contract Address: 0x6e2528A6899523Cd76D2e3f539D2b222e8c16224