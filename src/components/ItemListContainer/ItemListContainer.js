import React from "react";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../Firebase/config';
import Button from 'react-bootstrap/Button';

function ItemListContainer(){
    const [products, setProducts]=useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [reloadKey, setReloadKey] = useState(0)
    const { categoryId } = useParams()

    useEffect(() => {
        let isMounted = true
        setLoading(true)
        setError(null)
        getProducts(categoryId)
            .then(data => {
                if (isMounted) {
                    setProducts(data)
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err)
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false)
                }
            })

        return () => {
            isMounted = false
        }
      }, [categoryId, reloadKey])
   
    return(
        <div>
            <h1 className="lista">Lista de Productos</h1>
            <div className="lista-productos">
            {loading && <p>Cargando productos...</p>}
            {error && (
              <>
                <p>No pudimos cargar los productos. {error.message}</p>
                <Button variant='outline-primary' onClick={() => setReloadKey(prev => prev + 1)}>
                  Reintentar
                </Button>
              </>
            )}
            {!loading && !error && <ItemList products={products} />}
            </div>
        </div>
       
    )
    
}
export default ItemListContainer;