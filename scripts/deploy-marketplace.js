const hre = require("hardhat");

async function main() {
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const contract = await Marketplace.deploy();
  await contract.deployed();
  console.log("Marketplace deployado em:", contract.address);
}

main().catch((error) => {
  console.error("Erro no deploy do marketplace:", error);
  process.exitCode = 1;
});
