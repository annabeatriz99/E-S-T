async function main() {
  const Storage = await ethers.getContractFactory("StorageAdvanced");
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log(`Contrato implantado em: ${storage.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
