'use client'
import axios from 'axios'
import React from 'react'

function SuportMe() {
  const buyProduct1 = async () => {
    try {
      const response = await axios.post('/api/support', {
        productId: '525424',
      })
      console.log(response)

      window.open(response.data.checkoutUrl, '_blank')
    } catch (err) {
      console.log(err)
      alert('Failed to buy product #1')
    }
  }
  return (
    <div>
      <button onClick={buyProduct1}>Buy me a coffe</button>
    </div>
  )
}

export default SuportMe
