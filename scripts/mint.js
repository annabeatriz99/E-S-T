const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Endereço do contrato 
  const contractAddress = "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43"; 

  // Endereço para receber os tokens 
  const recipient = "0x8f7eA5DBa70b96f33E5d46B0a95034532a93d6a8"; 

  // Quantidade em tokens
  const amount = ethers.utils.parseUnits("100", 18);

  // Conectar carteira
  const [signer] = await ethers.getSigners();
  console.log("Usando conta:", signer.address);

  // Conectar ao contrato
  const TokenEmpresa = await ethers.getContractFactory("TokenEmpresa");
  const token = await TokenEmpresa.attach(contractAddress);

  // Mint
  const tx = await token.connect(signer).mint(recipient, amount);
  console.log("Mint enviado. Aguardando confirmação...");
  await tx.wait();

  console.log(`✅ Mint realizado com sucesso: ${ethers.utils.formatUnits(amount, 18)} TKE para ${recipient}`);
}

main().catch((error) => {
  console.error("Erro ao mintar:", error);
  process.exitCode = 1;
});
