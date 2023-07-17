const hre = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  // Deploy the Token Contract
  /*const tokenContract = await hre.ethers.deployContract("Token");
  await tokenContract.waitForDeployment();
  console.log("Token deployed to:", tokenContract.target);*/
  const TokenContract = await ethers.getContractFactory("Token");
  const deployedTokenContract = await TokenContract.deploy();
  await  deployedTokenContract.deployed();
  console.log("Token Contract Address:", deployedTokenContract.address);
  // Deploy the Exchange Contract
  /*const exchangeContract = await hre.ethers.deployContract("Exchange", [
    tokenContract.target,
  ]);
  await exchangeContract.waitForDeployment();
  console.log("Exchange deployed to:", exchangeContract.target);*/
  const ExchangeContract = await ethers.getContractFactory("Exchange");
  const deployedExchangeContract = await ExchangeContract.deploy(deployedTokenContract.address);
  await deployedExchangeContract.deployed();
  console.log("Exchange Contract Address:", deployedExchangeContract.address);
  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  /*await sleep(30 * 1000);

  // Verify the contracts on Etherscan
  await hre.run("verify:verify", {
    address: tokenContract.target,
    constructorArguments: [],
    contract: "contracts/Token.sol:Token",
  });

  await hre.run("verify:verify", {
    address: exchangeContract.target,
    constructorArguments: [tokenContract.target],
  });*/
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
