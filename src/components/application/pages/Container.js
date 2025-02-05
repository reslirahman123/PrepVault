import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/ApplicationProvider';

const Container = ({ selectedProduct }) => {
  const { products, error, loading, cart, dispatch } = useContext(AppContext)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (selectedProduct) {
      setFilteredProducts(products.filter((item) => item.title.toLowerCase().includes(selectedProduct.toLowerCase())))
    }
  }, [selectedProduct, products])

  const handleIncrement = (quantity) => {

    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload : quantity
    })
  }

  const handleDecrement = (quantity) => {
  
  }


  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products!</p>;
  return (
    <div>
      {filteredProducts.length > 0 ? filteredProducts.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} style={{ height: '200px' }} alt={item.title} />
          <p>{`Price : ${item.price}`}</p>
          <div>
            <button onClick={() => handleDecrement(quantity)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => handleIncrement(quantity)}>+</button>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>

        </div>
      )) : (
        <p>No matching Products</p>
      )}
    </div>
  )
}

export default Container