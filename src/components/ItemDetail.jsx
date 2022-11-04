import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <article className="productDetail">
        <img className='productImg'
              src={"/imgs/"+item.imagen}
              width="200px"
              alt={item.nombre} />
        <div className="productDetailInfo">

          <p className="productName">{item.nombre}</p>
          <p className="productDescri">{item.descripcion}</p>

          
          <div className="productPrice">{`Precio Pack por ${item.pack}: $${item.precio}`}.-</div>
          <div className="productDescuento">{`${item.topeDescuento} o más Unid: ${item.descuento}% Descuento`}</div>
        </div>
    </article>
  )
}

export default ItemDetail