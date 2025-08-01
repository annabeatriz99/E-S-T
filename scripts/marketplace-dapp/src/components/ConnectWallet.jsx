import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export default function ConnectWallet() {
  const [account, setAccount] = useState(null)

  async function connect() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts[0])
    }
  }

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAccount(window.ethereum.selectedAddress)
    }
  }, [])

  return (
    <div className="mb-6">
      {account ? (
        <span className="text-green-600">Conectado: {account}</span>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={connect}
        >
          Conectar Carteira
        </button>
      )}
    </div>
  )
}