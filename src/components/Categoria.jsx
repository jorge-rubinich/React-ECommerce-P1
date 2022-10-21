import React from 'react'

const Categoria = ({catName}) => {
    let archivo=catName+'.svg';
    let butName="button"+catName;
    function clicCat() {
        console.log(catName);
    }

    return (
    <div className="catBox" onClick={clicCat}>
        <img className="catImg" src={archivo} alt=""/>
        <p className="catButtonName">{catName}</p>
    </div>
  )
}

export default Categoria
/* 
function clicCat() {
  // Leo los productos desde productos.json y los cargo al array lista 
  const lista= [];
  fetch("./productos.json")
  .then(response =>response.json())
  .then(data => {
    data.forEach(producto => { 
        catName!="Todas"? producto.categoria==catName &&lista.push(producto) : lista.push(producto);
    })
    console.log(lista);
   })
  .catch(error => {
    alert("Diantres!!  Algo ha fallado..  Error: "+error+"");
  })
} */