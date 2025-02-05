import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/ApplicationProvider'

const DropDown = ({selectedProduct, setSelectedProduct}) => {

  const {products, error, loading} = useContext(AppContext)

  
  return (
    <div>
      <label htmlFor='dropDown'>Choose an option</label>
      <select id='dropDown' value={selectedProduct} onChange={(e)=>setSelectedProduct(e.target.value)}>
        <option value={''} disabled>Select a product</option>
        {products?.map((item) =>(
          <option key={item.id} value={item.title}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown