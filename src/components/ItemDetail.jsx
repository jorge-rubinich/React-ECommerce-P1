import React from 'react'
/* import Contador from './Contador' */
import UnitCount from './UnitCount'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
  const {addToCart} =useContext(CartContext);

  let precioCompra=item.precio;
  const [compra, setCompra] = useState({...item, cantidad: 1, precio: item.precio, total: item.precio});
  const presentacionSing = item.pack>1? "pack":"unidad";
  const presentacionPlur = item.pack>1? "packs":"unidades";

  /* A */
  const onQtyChange= (cantidad)=>{
    precioCompra= ((cantidad*item.pack)>= item.topeDescuento)? item.precio-(item.precio*item.descuento/100) : item.precio;
    setCompra({...item, cantidad: cantidad, precio: precioCompra, total: precioCompra*cantidad});
   };

  const agregarCarrito = () => {
    /* El boton agregar carrito llama a addToCart (viene de CartContext) pasandole datos del item comprado*/
    addToCart(compra);
    toast.success(`Agregaste ${compra.cantidad} ${compra.cantidad>1? presentacionPlur:presentacionSing} ${compra.nombre} al carrito!`,
    {position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true});
  };

  return (
    <article className="productDetail">
      <div className="productContainer">
        <div className="productContainerImgPrecio">
          <img className='productImg'
                src={"/imgs/"+item.imagen}
                width="200px"
                alt={item.nombre} />
          <div className="productDetailInfo">
            <p className="productName">{item.nombre}</p>
            <div className="productPack">{`Precio Pack por ${item.pack}:`}.-</div>
            <div className="productPrice">{`$${item.precio}`}.-</div>
            <div className="productDescuento">{`${item.topeDescuento} o más Unid: ${item.descuento}% Off`}</div>
          </div>
        </div>
        <div className="productDescri">{item.descripcion}</div>  
      </div>

      <div className="productBuy">
        <div className='disponibleTitulo'>Disponible:
          <span className='disponibleCantidad'>{item.stock} {item.stock>1? presentacionPlur : presentacionSing}</span>
        </div>
        <UnitCount counter= {compra.cantidad} stock={item.stock} onQtyChange={onQtyChange} preS={presentacionSing} preP={presentacionPlur}/>
        <p className='compraDescuento'>
            <span className='compraDescuentoOff'>{compra.precio===item.precio? " ": " $ "+item.descuento+"% OFF "} </span>          
            <span className='compraDescuentoNormal'>{compra.precio===item.precio? " ": " $ "+item.precio}</span>
            </p>
        <p className='compraPrecio'> c/uno a ${compra.precio}</p>
        <p className='compraTotal'>Total ... ${compra.total}</p>

        <button className='compraBoton' onClick={agregarCarrito}>Agregar al carrito</button>
        <ToastContainer/>
      
      </div>
    </article>
  )
}

export default ItemDetail