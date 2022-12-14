import React from 'react'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getOrder, updateOrder } from '../products';
import CartItem from './Cart/CartItem';
import OrderState from './OrderState';

const Order = () => {
  const {orderId} = useParams();

  const [order, setOrder] = useState(null);

  const estados= [
    "Orden Recibida",
    "Orden recibida. Esperando su mail de confirmación",
    "Orden Confirmada. Esperando su pago",
    "Orden en proceso. Tiempo estimado: 2 días",
    "En camino. Tiempo estimado de entrega 1 día",
    "Entregado"
  ];

 
  useEffect(() => {
      getOrder(orderId).then(res => {
        /* aumento estado para simular el paso del tiempo */
        if (res.estado<5) {
          res.estado++; 
        }
        updateOrder(orderId, {estado: res.estado});
        setOrder(res);
      }
      )
      .catch(err => {
        console.log(err);
        });
  },[]);

  if (!order) {
    return <h1>Cargando orden...</h1>
  }

  if (order.id === 'NoExiste') {
    return (
      <div>
          <h1>Orden: {orderId}</h1>
          <h2>Orden no encontrada</h2>
      </div>
    )
  }

  return (
    <div>
        <h1>Orden: {orderId}</h1>

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

            <p className="orderLabel">Estado:</p>
          
            <p className='orderData'> {order.estado+'- '+estados[order.estado]}</p>

        </div>
      </div>
      <div className="orderStateContainer">
          {estados.map((estado, index) => (
            /* No muestro el estado =0 */
            index>0 &&  <OrderState key={index} state={index} stateLabel={estado} actual={order.estado}/>  
          ))}
          
      </div>
    </div>
  )
}

export default Order