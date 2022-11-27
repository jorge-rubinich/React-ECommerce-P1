import React from 'react'
import {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import CartForm from './CartForm';

const Cart = () => {

  const {cart} =useContext(CartContext);
  
  
  return (

    <div>
      
      <h1>Carrito de Compras</h1>
      <div className="cartFormContainer">
        <div className="cartContainer">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} showDelete={true} />  
          ))}
        </div>

        <CartForm/>
      </div>

    </div>
  )
}

export default Cart