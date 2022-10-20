import React from 'react'

const ProductCard = (producto) => {
  return (
    <div card>
        <img src={producto.imagen} alt='' className='artImg'/>
        <div prodData>
            <h4 className='artNombre'>{producto.nombre}</h4>
            <h6 className = 'artDescri'>{producto.descripcion}</h6>
            <p className='artPrecio'>Precio Pack x {producto.pack}: ${producto.precio}</p>
            <p className='artDesc'>Más de {producto.topeDescuento} unid. {producto.descuento}% Descuento</p>
        </div>
    </div>
  )
}

export default ProductCard