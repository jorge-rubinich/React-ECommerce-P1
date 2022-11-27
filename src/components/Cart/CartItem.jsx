import React from 'react'
import {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartItem = (props) => {
    const {item, showDelete} = props;
    /*showDelete es un booleano que indica si se muestra el boton de eliminar o no*/
    /* Me permite usar este componente en el carrito y en el detalle de la orden*/

    const {removeItem} = useContext(CartContext);
    
    return (
        <div className="cartItem">
            <div className='imgContainer'>
                <img className='cartImg'
                    src={"/imgs/"+item.imagen}
                    alt={item.nombre}  />
            </div>
            <div className='infoContainer'>
                {`${item.cantidad} x ${item.nombre}`}
                {showDelete? <img src='/papelera.png' onClick={()=> {removeItem(item.id)}}></img> : null}

            </div>
            <div className='priceQtyContainer'>
                <p className='priceContainer'>{`$${item.precio}`}</p>
                <p className='subTotalContainer'>{`$${item.total}`}</p>
            </div>    
            
        </div>
    )
}

export default CartItem