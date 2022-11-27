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

    <div>

        <form className='searchForm'>
            <div className='searchInputGroup'>
            <label className="searchOrdenLabel">Consulta tu orden</label>
            <input className='input' type="text" placeholder='Buscar'
                 onChange={onChangeHandler} value={orderId}/>
            </div>
            
             <Link style={{pointerEvents: orderId.length!==0 ? '' : 'none'}} to={"/order/"+orderId}>
{/*             <Link to={orderId.length!==0? "/ordertrack/"+orderId :""}>
 */}            <img src="/search.png" alt="Buscar Orden" />
            </Link>
       </form>

    </div>
  )
}

export default OrderSearch