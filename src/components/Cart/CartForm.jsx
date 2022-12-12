import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import React from 'react'
import { useState} from 'react';
import {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CartForm = () => {

    const {cart, deleteCart, calcTotal} =useContext(CartContext);
    const totalCompra= calcTotal();

    const [comprador, setComprador] = useState({nombre:'', email:'', email2:'', telefono:'', cuit:'', sendEnabled: false});
    const [orderId, setOrderId] = useState('');
    const navigate = useNavigate();

    const cerrarOrden = (e) => {
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
                console.log("Document written with ID: ", docRef.id);
                emailSend();
                setOrderId(docRef.id);
           
            })
            .catch((error) => alert(`Se ha producido un error al enviar la orden.`)); 
        }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setComprador({...comprador, [name]: value});
    } 

    const sendEnabled = () => {
        return (comprador.nombre.length===0 || comprador.email.lentgh===0 || comprador.email!==comprador.email2 || 
            !comprador.email.includes('@'))
    }

    const emailSend = () => {

        const emailBody = `<h1>Gracias por tu compra!</h1>
              <p>Hemos recibido tu pedido. </p><p>Id de tu orden: ${orderId}</p>
              <p>Necesitamos que nos confirme tu orden a traves de este link: <a href="https://ecommerce-jorge-rubinich.vercel.app/confirm/${orderId}">Confirmar Orden</a></p>`;
        window.Email.send({
            Host: "dtcwin022.ferozo.com",
            Username: "dosmasuno-noreply@bitbyte.com.ar",
            Password: "dosMasUno22",
            To: comprador.email,
            From: "dosmasuno-noreply@bitbyte.com.ar",
            Subject: "dosMasUno - Orden de Compra",
            Body: emailBody,
        })
            .then( (message) => {
                console.log("Envio Email. Resultado:");
                console.log(message);
                // alert("mail sent successfully")//
            })
            .catch( (error) => {
                alert("Error al enviar el mail. Error: " + error);
            });
    }

    if (orderId) {
        /* Tengo orden... Voy a Checkout*/
        navigate('/checkOut/'+orderId);
   }

  return (
    <div className='formContainer'>
        <form className="formItems " action="" onSubmit={cerrarOrden}>    
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

            <button type="submit" className="btnEnviar" disabled ={sendEnabled()}>Enviar Pedido</button>

        </form>
    </div>
  )
}

export default CartForm