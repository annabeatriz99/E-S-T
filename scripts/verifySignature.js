const { ethers } = require("ethers");

const message = "Login to RealAssetNFT";
const signature = "assinatura";

const recovered = ethers.utils.verifyMessage(message, signature);
console.log("✅ Endereço verificado:", recovered);
