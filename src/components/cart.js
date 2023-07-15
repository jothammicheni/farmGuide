//import { data } from 'jquery'
import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
    {
     cart.length>0?(
      cart.map((item)=>(
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )
    )
    ):(
      <p>no item available</p>
     )
    }
    </div>
  )
}

export default Cart
