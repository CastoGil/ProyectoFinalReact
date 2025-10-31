import React from "react";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../Firebase/config';

function ItemListContainer(){
    const [products, setProducts]=useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId)
            .then(data => setProducts(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
      }, [categoryId])
   
    return(
        <div>
            <h1 className="lista">Lista de Productos</h1>
            <div className="lista-productos">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && <ItemList products={products} />}
            </div>
        </div>
       
    )
    
}
export default ItemListContainer;