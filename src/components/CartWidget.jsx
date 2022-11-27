import React from 'react';
import {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';


const CartWidget = () => {

  const {cart} =useContext(CartContext);

  const totItemsCompra= cart.reduce((acc, item) => { return acc + item.cantidad }, 0);
  const cartWidgetCount = totItemsCompra > 0 ? totItemsCompra : 0;

  return (
    <div className="cartWidget">
      <img src="/carrito.svg" alt="carrito de compras" />
      <div className="cartWidgetCount">
      <div >{cartWidgetCount}</div>  
      </div>
    </div>
  )
}

export default CartWidget