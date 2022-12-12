import React from 'react'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getOrder, updateOrder } from '../products';
import CartItem from './Cart/CartItem';

const Order = () => {
  const {orderId} = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
      getOrder(orderId).then(res => {
        setOrder(res);
      }
      );
  },[]);

  const confirmOrder = () => {
    updateOrder(orderId, {estado: 2})
    .then(res => {
        setOrder({...order, estado: 2});
    });
  }

  if (!order) {
    return <h1>Cargando orden...</h1>
  }

  if (order.Estado>2) {
    return (
        <div>
            <h1>Orden confirmada.</h1>
            <p>Gracias por confirmar tu compra. En breve nos contactaremos para coordinar tu pago.</p>
            <p>No pierdas tu código de orden (#{order.id}). Lo necesitarás para revisar su estado.</p>
        </div>
    )
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

            <button className="btnEnviar" onClick={confirmOrder} >Confirmar Orden</button>


        </div>
    </div>
    </div>
  )
}

export default Order