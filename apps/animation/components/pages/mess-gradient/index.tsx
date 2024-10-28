// @ts-nocheck
'use client'
import { useState } from 'react'
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient'
import colors from 'nice-color-palettes'

function App() {
  const [speed, setSpeed] = useState(0.01)
  const [isWireframe, setIsWireframe] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const [color, setColor] = useState(Math.floor(Math.random() * 100))

  console.log(color)

  return (
    <div className="bg-white">
      <div
        id="text-container"
        className="absolute top-0 right-0 bg-black/50 backdrop-blur-md p-4 text-white rounded"
      >
        <div id="controls">
          <div id="speed-slider">
            <label htmlFor="speed">Speed: </label>
            <br />
            <input
              id="speed"
              type="range"
              name="speed"
              min="0"
              max="1"
              step="0.001"
              value={speed}
              onChange={(e) => setSpeed(e.target.valueAsNumber)}
            />
            <label htmlFor="speed"> = {speed}</label>
          </div>
          <div id="wireframe-toggle">
            <label htmlFor="wireframe">Wireframe: </label>
            <input
              id="wireframe"
              name="wireframe"
              type="checkbox"
              checked={isWireframe}
              onChange={(e) => setIsWireframe(e.target.checked)}
            />
          </div>
          <div id="background-color">
            <label htmlFor="dark">Dark Background (Wireframe only): </label>
            <input
              id="dark"
              name="dark"
              type="checkbox"
              checked={isDarkBackground}
              onChange={(e) => setIsDarkBackground(e.target.checked)}
            />
          </div>
          <button
            className="bg-white text-black p-3 w-full mt-2 rounded-md"
            name="color"
            onClick={() => setColor(Math.floor(Math.random() * 100))}
          >
            Random Colors
          </button>
        </div>
      </div>
      <MeshGradientRenderer
        className="w-full h-full"
        colors={colors[color]}
        speed={speed}
        wireframe={isWireframe}
        backgroundColor={isDarkBackground ? '#000000' : '#1f1c1c'}
      />
    </div>
  )
}

export default App
