// @ts-nocheck
'use client'
import { useState } from 'react'
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient'

function App() {
  const palettes = [
    ['#F9B409', '#F9D16A', '#2A687A', '#72A25E', '#C3B49E'],
    ['#C3E4FF', '#6EC3F4', '#EAE2FF', '#B9BEFF', '#B3B8F9'],
    ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900'],
    ['#FE4365', '#FC9D9A', '#F9CDAD', '#C8C8A9', '#83AF9B'],
  ]

  const [colorIndex, setColorIndex] = useState(0)

  return (
    <div className="bg-white">
      <MeshGradientRenderer
        className="w-full h-full"
        colors={palettes[colorIndex]}
        onGradientClick={() =>
          setColorIndex(colorIndex === palettes.length - 1 ? 0 : colorIndex + 1)
        }
        speed={0.01}
        wireframe={true}
        backgroundColor={'#000000'}
      />
    </div>
  )
}

export default App
