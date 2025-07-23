async function main() {
  const Storage = await ethers.getContractFactory("StorageAdvanced");
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log(`Contrato implantado em: ${storage.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;

})

const hre = require("hardhat");

async function main() {
  const TokenEmpresa = await hre.ethers.getContractFactory("TokenEmpresa");
  const token = await TokenEmpresa.deploy();
  await token.deployed();
  console.log("TokenEmpresa deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
