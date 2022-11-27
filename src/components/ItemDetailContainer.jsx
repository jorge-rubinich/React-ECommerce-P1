import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from '../products'; 

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getProduct(id).then(res => setItem(res));
    },[]);

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <h1>Cargando producto...</h1>}
        </div>
    )
}
export default ItemDetailContainer