
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
