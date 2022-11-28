import React from 'react'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from '../products';
import { collectionProd } from '../services/firebaseConfig';
import Cart from './Cart/Cart';
import CartItem from './Cart/CartItem';

const Order = () => {
  const {orderId} = useParams();

  const [order, setOrder] = useState(null);

  const estados= [
    "Orden Recibida",
    "Orden recibida. Esperando su mail de confirmación",
    "Orden recibida. Esperando su pago",
    "Orden en proceso. Tiempo estimado: 2 días",
    "En camino. Tiempo estimado de entrega 1 día",
    "Entregado"
  ];

  useEffect(() => {
      getOrder(orderId).then(res => {
        /* aumento estado para simular el paso del tiempo */
        res.estado+= 1;
        collectionProd.doc(orderId).update({estado: res.estado});
        
        setOrder(res);
      }
      );
  },[]);



  if (!order) {
    return <h1>Cargando orden...</h1>
  }


  console.log(order.estado);
  console.log(estados[order.estado]);

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

            <p className="orderLabel">Estado:</p>
          
            <p className='orderData'> {order.estado+'- '+estados[order.estado]}</p>

        </div>
    </div>
    </div>
  )
}

export default Order