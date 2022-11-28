import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const OrderSearch = () => {

  const [orderId, setOrderId] = useState('');

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setOrderId(value);
  }

  return (

        <form className='searchForm'>
            <div className='searchInputGroup'>
            <label className="searchOrdenLabel">Ya tienes una orden?</label>
            <input className='input' type="text" placeholder='Ingresa el id de tu orden'
                 onChange={onChangeHandler} value={orderId}/>
            </div>
            
             <Link style={{pointerEvents: orderId.length!==0 ? '' : 'none'}} to={"/order/"+orderId}>
               <img src="/search.png" alt="Buscar Orden" />
            </Link>
       </form>

  )
}

export default OrderSearch