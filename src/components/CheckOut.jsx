import React from 'react'
import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom';

const CheckOut = () => {
  const {orderId} = useParams();
  const {deleteCart} =useContext(CartContext);
  deleteCart();


  return (
    <div className="container">
        <h1>Gracias por tu pedido.</h1>

        <p>Te hemos enviado un mail de confirmación a tu casilla. Responde el mail para confirmar tu pedido.</p>
        <p>Una vez confirmado, te contactaremos para contarte los tiempos de proceso de tu pedido.</p>
        <p>El çódigo de tu orden es: </p>
        <h2>{orderId}</h2>
        <p>Guardalo para consulta el estado de tu pedido a través del buscador de ordenes.</p>
        <Link to="/">Volver a Inicio</Link>
    </div>
 )

}

export default CheckOut