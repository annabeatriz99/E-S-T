import React from 'react'
import ConnectWallet from './components/ConnectWallet'
import NFTList from './components/NFTList'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Marketplace de NFTs</h1>
      <ConnectWallet />
      <NFTList />
    </div>
  )
}