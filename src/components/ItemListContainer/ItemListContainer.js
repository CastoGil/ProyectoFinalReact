import React from "react";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { getDocs, collection, getFirestore, query, where  } from 'firebase/firestore';

function ItemListContainer(){
    const [products, setProducts]=useState([])
    const { categoryId } = useParams()

    useEffect(() => {
      const querydb= getFirestore()
      const queryCollection= collection(querydb, 'Electro')
     
      if(categoryId){
        const queryFilter= query(queryCollection, where('category','==', categoryId))
        getDocs(queryFilter).then(resp=> setProducts(resp.docs.map(product=> ({ id: product.id, ...product.data()}))))
        }
        else{
          getDocs(queryCollection).then(resp=> setProducts(resp.docs.map(product=> ({ id: product.id, ...product.data()}))))
       }
      }, [categoryId])
   
    return(
        <div>
            <h1 className="lista">Lista de Productos</h1>
            <div className="lista-productos">
            <ItemList products={products}>
            </ItemList>
            </div>
        </div>
       
    )
    
}
export default ItemListContainer;
//