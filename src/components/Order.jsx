import React from 'react'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from '../products';
import Cart from './Cart/Cart';
import CartItem from './Cart/CartItem';

const Order = () => {
  const {orderId} = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
      getOrder(orderId).then(res => setOrder(res));
  },[]);

  if (!order) {
    return <h1>Cargando orden...</h1>
  }


  return (
    <div>
        <h1>Order: {orderId}</h1>

      <div className="cartFormContainer">
        <div className="cartContainer">
          {order.items.map((item) => (
            <CartItem key={item.id} item={item} showDelete={false}/>  
          ))}
        </div>
        <div className="orderData">
            <h2>Detalles de la orden</h2>
            <p className="orderLabel">Nombre:</p>
            <p className='orderData'> {order.buyer.nombre}</p>
            <p className="orderLabel">Email:</p>
            <p className='orderData'> {order.buyer.email}</p>
            <p className="orderLabel">Telefono:</p>
            <p className='orderData'> {order.buyer.telefono}</p>
            <p className="orderLabel">Total:</p>
            <p className='orderData'> {order.total}</p>

            <p className="orderLabel">Total:</p>
            <p className='orderData'> {order.total}</p>

        </div>
    </div>
    </div>
  )
}

export default Order