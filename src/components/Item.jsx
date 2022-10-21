import React from 'react'

const Item = (props) => {
    const producto=props.producto;
  return (
    <div className='productCard'>
        <img className='productImg'
            src={"./imgs/"+producto.imagen}
            width="200px"
            alt={producto.nombre}
        />
        <article>
            <h2 className="productName">{producto.nombre}</h2>
            <p className="productDesc">{producto.descripcion}</p>
            <p className="productPack">Precio Pack x {producto.pack}: ${producto.precio}</p>
            <p className="productDiscount">Más de {producto.topeDescuento} unid. {producto.descuento}% Descuento</p>
            <h3 className="productPrice">${producto.precio}.-</h3>
        </article>
    </div>
  )
}

export default Item
