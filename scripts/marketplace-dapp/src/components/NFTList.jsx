import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import marketplaceAbi from '../abis/Marketplace.json'

const marketplaceAddress = 'COLE_ENDERECO_DO_MARKETPLACE_AQUI'

export default function NFTList() {
  const [listings, setListings] = useState([])

  async function fetchListings() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(marketplaceAddress, marketplaceAbi, provider)
    const items = await contract.getListings()
    setListings(items)
  }

  async function buy(index, price) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddress, marketplaceAbi, signer)
    const tx = await contract.buyNFT(index, { value: price })
    await tx.wait()
    alert('NFT comprado com sucesso!')
    fetchListings()
  }

  useEffect(() => {
    fetchListings()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">NFTs Disponíveis</h2>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {listings.map((item, i) => (
          !item.sold && (
            <li key={i} className="bg-white p-4 shadow rounded">
              <p><strong>Token ID:</strong> {item.tokenId.toString()}</p>
              <p><strong>Preço:</strong> {ethers.utils.formatEther(item.price)} ETH</p>
              <button
                onClick={() => buy(i, item.price)}
                className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
              >
                Comprar
              </button>
            </li>
          )
        ))}
      </ul>
    </div>
  )
}