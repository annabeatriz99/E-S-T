const hre = require("hardhat");

async function main() {
  const RealAssetNFT = await hre.ethers.getContractFactory("RealAssetNFT");
  const contract = await RealAssetNFT.deploy();
  await contract.deployed();
  console.log("RealAssetNFT deployado em:", contract.address);
}

main().catch((error) => {
  console.error("Erro no deploy:", error);
  process.exitCode = 1;
});
