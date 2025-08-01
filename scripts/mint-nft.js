const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const nftAddress = "https://sepolia.etherscan.io/address/0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43";
  const recipient = "0x8f7eA5DBa70b96f33E5d46B0a95034532a93d6a8";
  const tokenURI = "bafkreibqpfce2mdnr5itqee4vdkzlm5r47taqs2nc6mghyavldt4ikbrhe";

  const RealAssetNFT = await ethers.getContractFactory("RealAssetNFT");
  const contract = await RealAssetNFT.attach(nftAddress);

  const [signer] = await ethers.getSigners();
  const tx = await contract.connect(signer).mintNFT(recipient, tokenURI);
  await tx.wait();
  console.log(` NFT mintado para ${recipient} com URI ${tokenURI}`);
}

main().catch((error) => {
  console.error("Erro no mint:", error);
  process.exitCode = 1;
});
