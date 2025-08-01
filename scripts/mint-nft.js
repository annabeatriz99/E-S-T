const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const nftAddress = "COLE_AQUI_O_ENDEREÇO_DO_CONTRATO";
  const recipient = "COLE_AQUI_O_ENDEREÇO_DO_DESTINATÁRIO";
  const tokenURI = "ipfs://CID_DO_JSON_DO_ASSET";

  const RealAssetNFT = await ethers.getContractFactory("RealAssetNFT");
  const contract = await RealAssetNFT.attach(nftAddress);

  const [signer] = await ethers.getSigners();
  const tx = await contract.connect(signer).mintNFT(recipient, tokenURI);
  await tx.wait();
  console.log(`✅ NFT mintado para ${recipient} com URI ${tokenURI}`);
}

main().catch((error) => {
  console.error("Erro no mint:", error);
  process.exitCode = 1;
});
