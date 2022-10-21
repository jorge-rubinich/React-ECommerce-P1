import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    const itemList=props.itemList;
    return ( 
      <div className="itemList">
         {itemList.map((producto) => {
          return (
            
            <Item key={producto.codigo} producto={producto}/>
        );
    })
}
</div>)
}

export default ItemList