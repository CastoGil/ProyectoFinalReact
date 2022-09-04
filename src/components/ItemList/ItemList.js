import Item from "../Item/item";
import "./ItemList.css"

const ItemList =({products=[]})=>{
    return( 
        products.map(dat => 
        <Item key={dat.id} info={dat}></Item>
        )
        
    )
}
export default ItemList;