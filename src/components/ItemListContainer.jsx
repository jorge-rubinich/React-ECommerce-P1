import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
    console.log("useEffect");
    fetch("./productos.json")
        .then(response =>response.json())
        .then(data => {  
            setItems(data);}
        )
        .catch(error => { alert("Diantres!!  Algo ha fallado..  Error: "+error+""); })
    },[]);

    return (
        <ItemList itemList={items}/>
      )
}

export default ItemListContainer