import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const producto=props.producto;
  return (
    <Link to={"/detail/"+producto.codigo}>
      <article className='product'>
        
          <img className='productImg'
              src={"/imgs/"+producto.imagen}
              width="200px"
              alt={producto.nombre}
          />

          <h4 className="productName">{producto.nombre}</h4>
          <p className="productDesc">{producto.descripcion}</p>
          <p className="productPrice">${producto.precio}.-</p>
      </article>
    </Link>
  )
}

export default Item
