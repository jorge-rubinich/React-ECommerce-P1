import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import { getProducts } from '../products';   

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {catName} = useParams();
    const productosFiltrados= [];

    useEffect(() => {
        getProducts(catName).then(res =>  setItems(res))
    },[catName])


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