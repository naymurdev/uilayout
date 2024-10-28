import * as React from 'react'

export default function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  React.useEffect(() => {
    // Check if the code is running on the client side
    if (typeof window !== 'undefined') {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio,
        })
      }

      resize()

      window.addEventListener('resize', resize)

      return () => window.removeEventListener('resize', resize)
    }
  }, [])

  return dimension
}
