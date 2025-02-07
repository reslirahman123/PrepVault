import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from './context/CartProvider';

const ProductList = () => {
    const uri = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([])
    const {cart, dispatch} = useContext(cartContext)

    useEffect(() => {
        fetch(uri)
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [uri])

    console.log("products---", products)
  return (
    <div>
        {products.map((item, index) =>(
            <div key={index}>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} width={100}/>
                <p>${item.price}</p>
                <button type='submit' onClick={() => dispatch({type: "ADD_TO_CART", payload: item})}>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList