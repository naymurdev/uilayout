import React from 'react'

function ProductsCardComponent({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-2 ">{children}</div>
}

export default ProductsCardComponent
