import React, { useContext } from 'react'
import { cartContext } from './context/CartProvider'
import { Link } from 'react-router-dom'

const StoreNavbar = () => {
  const { cart } = useContext(cartContext)
  return (
    <nav className=''>
      <Link to='/'>Fake Store</Link>
      <div>
        <Link to={'/cart'}>Cart {cart?.length}</Link>
      </div>

    </nav>
  )
}

export default StoreNavbar