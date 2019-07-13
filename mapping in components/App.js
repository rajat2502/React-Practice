import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
    const data = productsData.map((product, i) => <Product key={product.id} name={product.name} description={product.description} price={product.price}/>)
  return (
    <div>
        {data}
    </div>
  )
}

export default App