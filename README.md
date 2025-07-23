
Este é um projeto de exemplo com Hardhat que implementa um contrato inteligente simples em Solidity.

## Pré-requisitos

- Node.js
- npm
- Conta na Metamask
- ETH de teste na rede Sepolia
- Infura ou Alchemy para obter um RPC

## Instalação

```bash
npm install
```

## Configuração

Renomeie o arquivo `.env.example` para `.env` e preencha com sua chave privada e URL do Sepolia RPC.

## Deploy

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

## Contrato

`StorageAdvanced.sol` permite armazenar e recuperar um número, emitindo evento a cada alteração.

# TokenEmpresa

Token ERC-20 com governança simples usando AccessControl e whitelist.

## Funcionalidades

- Mint limitado a usuários com `MINTER_ROLE`
- Destinatário deve estar na whitelist
- Controle total por `DEFAULT_ADMIN_ROLE`

## Scripts

- `deploy.js`: Faz deploy do contrato
- `add-to-whitelist.js`: Adiciona endereço à whitelist
- `mint.js`: Executa mint para usuário

## Testes

Use `npx hardhat test` para executar os testes

## Rede

Deploy será feito na testnet Sepolia
