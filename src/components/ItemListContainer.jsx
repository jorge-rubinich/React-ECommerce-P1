import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {catName} = useParams();
    let productosFiltrados= []

    useEffect(() => {
    setTimeout(() => {
        fetch("/productos.json")
            .then(response =>response.json())
            .then(data => {  

                if (catName) {
                    productosFiltrados=data.filter(producto => producto.categoria === catName);
                } else {  
                    productosFiltrados=data;  
                    ;}
                    setItems(productosFiltrados);
                })
            .catch(error => { alert("Lo siento! Algo ha fallado..  Error: "+error+""); })
        },200);

    },[catName]);

    if (items.length===0) {
        return <h1>Cargando productos...</h1>
    } else {
    return (
        <>
            <h3>Viendo productos de Categoria: {catName ||"Todas"}</h3>
            <ItemList itemList={items}/>
        </>
      )};
}

export default ItemListContainer