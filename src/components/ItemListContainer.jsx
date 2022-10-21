import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    console.log(props);
    const [items, setItems] = useState([]);
    useEffect(() => {
    setTimeout(() => {
        fetch("./productos.json")
            .then(response =>response.json())
            .then(data => {  
                setItems(data);}
            )
            .catch(error => { alert("Diantres!!  Algo ha fallado..  Error: "+error+""); })
        },2000);
    },[]);

    if (items.length===0) {
        return <h1>Cargando productos...</h1>
    } else {
    return (
        <>
            <h3>Viendo productos de Categoria: {props.categoria}</h3>
            <ItemList itemList={items}/>
        </>
      )};
}

export default ItemListContainer