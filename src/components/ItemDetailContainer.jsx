import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const idProducto = parseInt(id);
    const [item, setItem] = useState(null);
    useEffect(() => {
        setTimeout(() => {
        fetch("/productos.json")
            .then(response =>response.json())
            .then(data => {  
                const producto = data.find(product => product.codigo ===idProducto);
                setItem(producto);
                }
            )
            .catch(error => { alert("Error: "+error+""); })
        },500);
    },[]);

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <h1>Cargando producto...</h1>}
        </div>
    )
}
export default ItemDetailContainer