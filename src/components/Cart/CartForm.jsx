import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import React from 'react'
import { useState} from 'react';
import {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToPathname } from '@remix-run/router';

const CartForm = () => {

    const {cart, deleteCart, calcTotal} =useContext(CartContext);
    const totalCompra= calcTotal();

    const [comprador, setComprador] = useState({nombre:'', email:'', email2:'', telefono:'', cuit:'', sendEnabled: false});
    const [orderId, setOrderId] = useState('');

    const cerrarCompra = (e) => {
        e.preventDefault();
   
        const oOrden={
            buyer: comprador,
            items: cart,
            total: totalCompra,
            fecha: serverTimestamp(),
            estado: 0,
        };
        const collectionOrders = collection(db, "orders");
        addDoc(collectionOrders, oOrden)
            .then((docRef) => {
                setOrderId(docRef.id);
                toast.success(`Tu orden fue recibida con id# ${docRef.id}! Hemos enviado un mail de confirmación a tu casilla. Respondelo para confirmar tu pedido.`,
                {position: "top-right", closeOnClick: true, pauseOnHover: true});
                deleteCart();
            })
            .catch((error) => {
                toast.success(`Se ha producido un error al enviar la orden. Error:} ${error}. Inténtelo nuevamente dentro de unos minutos!`,
                {position: "top-right", closeOnClick: true, pauseOnHover: true});
            }); 
        }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setComprador({...comprador, [name]: value});
    } 

    const sendEnabled = () => {
        return (comprador.nombre.length===0 || comprador.email.lentgh===0 || comprador.email!==comprador.email2 || 
            !comprador.email.includes('@'))
    }

    if (orderId) {
        return (
            <div className="container">
                <h1>Gracias por tu pedido.</h1>

                <p>Te hemos enviado un mail de confirmación a tu casilla. Responde el mail para confirmar tu pedido.</p>
                <p>Una vez confirmado, te contactaremos para contarte los tiempos de proceso de tu pedido.</p>
                <p>El çódigo de tu orden es: <strong>{orderId}</strong></p>
                <p>Guardalo para consulta el estado de tu pedido a través del buscador de ordenes.</p>
                
            </div>
        )
    }

  return (
    <div className='formContainer'>
        <form className="formItems " action="" onSubmit={cerrarCompra}>    
            <label>Empresa o Nombre y apellido
            </label>
            <input 
                className='input required' 
                type="text" 
                placeholder='Nombre'
                name='nombre'
                value={comprador.nombre}
                onChange={handleChange}
                />

            <label>Email</label>
            
            <input 
                className='input required' 
                type="text" 
                placeholder='nombre@correo.com'
                name='email'
                value={comprador.email}
                onChange={handleChange}
                />

            <label>confirme Email</label>

            <input 
                className='input required' 
                type="text" 
                placeholder='nombre@correo.com'
                name='email2'
                value={comprador.email2}
                onChange={handleChange}
            />

            <label>Teléfono</label>

            <input 
                className='input'
                 type="text" 
                 placeholder='Teléfono'
                 name='telefono'
                 value={comprador.telefono}
                 onChange={handleChange}
            />

            <label>C.U.I.T (deje vacío para Cons.Final)</label>

            <input 
                className='input'
                type="text" 
                placeholder='C.U.I.T'
                name='cuit'
                value={comprador.cuit}
                onChange={handleChange}
            />

            <button disabled ={sendEnabled()}> Enviar</button>
            <ToastContainer />
        </form>
    </div>
  )
}

export default CartForm