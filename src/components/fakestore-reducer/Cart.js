import React, { useContext } from 'react'
import { cartContext } from './context/CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, dispatch } = useContext(cartContext);
    console.log("cart", cart)

    return (
        <div>
            {cart.length === 0 ? (<Link to={'/'}>continue shopping </Link>) : (
                cart?.map((items, index) => (
                    <div key={index}>
                        <p>{items.title}</p>
                        <p>$ {items.price} x {items.quantity}</p>
                        <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: items.id })}>-</button>
                        <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: items.id })}>+</button>
                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: items.id})}>Remove</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart