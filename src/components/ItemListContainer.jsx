import React from 'react'
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
    console.log("useEffect");
    fetch("./productos.json")
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            setItems(data);
        })
        .catch(error => { alert("Diantres!!  Algo ha fallado..  Error: "+error+""); })
    }, []);

    return (
        <div id="container">
        {items.map((producto) => {
            return (
                <div key={producto.codigo}>
                    <img
                        src={producto.imagen}
                        width="200px"
                        alt={producto.nombre}
                    />
                    <article>
                        <h2>{producto.nombre}</h2>
                        <h3>${producto.precio}.-</h3>
                    </article>
                </div>
            );
        })}
    </div>
      )
}

export default ItemListContainer