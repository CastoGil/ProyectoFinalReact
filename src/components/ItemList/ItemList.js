import Item from "../Item/item";
import "./ItemList.css"
import React from 'react';

const ItemList = React.memo(({products=[]})=>{
    return( 
        products.map(dat => 
        <Item key={dat.id} info={dat}></Item>
        )
        
    )
})
export default ItemList;