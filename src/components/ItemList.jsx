import React from 'react'

const ItemList = (props) => {
    const itemList=props.itemList;
    console.log(itemList);
    return ( 
      <div id="container">
         {itemList.map((producto) => {
          return (
            <div key={producto.codigo}>
                <img
                    src={"./imgs/"+producto.imagen}
                    width="200px"
                    alt={producto.nombre}
                />
                <article>
                    <h2>{producto.nombre}</h2>
                    <h3>${producto.precio}.-</h3>
                </article>
            </div>
        );
    })
}
</div>)
}

export default ItemList