import React from 'react'

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img src="/carrito.svg" alt="carrito de compras" />
      <div className="cartWidgetCount">
      <div >0</div>  
      </div>
    </div>
  )
}

export default CartWidget