import React from 'react'
import {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import CartForm from './CartForm';

const Cart = () => {

  const {cart, deleteCart} =useContext(CartContext);
  
  if (cart.length === 0) { 
    return <h1>No hay compras en tu carrito</h1>
  }

  return (

    <div>
      
      <h1>Carrito de Compras</h1>
      <div className="cartFormContainer">
        <div className="cartContainer">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} showDelete={true} />  
          ))}
          <div className='totalContainer'>
            <p className='totalLabel'>Total de tu compra: {`$${cart.reduce((acc, item) => acc + item.total, 0)}`}</p>
          </div>
        
        <button className='btnClearCart' onClick={deleteCart}>Vaciar Carrito</button>

        </div>

        <CartForm/>
      </div>

    </div>
  )
}

export default Cart