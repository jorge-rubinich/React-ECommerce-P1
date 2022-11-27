import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import onAdd from './ItemDetail';

const Contador = ({onAdd}) => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        counter>0 && setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }
      
    const addToCart = () => {
        if (counter>0) {

            // pasamos al cart el item y la cantidad
            onAdd(counter);
            toast.success(`Agregaste ${counter} unidad${counter>1?'es':''} al carrito!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false});
        }
    }


  return (
    <div className='counterBox'>
        <div className='counterDetail'>
            <button onClick={decrement}>-</button>
            <div>{counter}</div>
            <button onClick={increment}>+</button>
        </div>
        {/* <button onClick={reset}>Volver a 0</button> */}
        <button className='addCartButton' onClick={addToCart}>Agregar al Carrito</button>
        <ToastContainer />
    </div>
    )
}

export default Contador