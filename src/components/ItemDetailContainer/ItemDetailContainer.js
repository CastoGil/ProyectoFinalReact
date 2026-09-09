import ItemDetail from '../ItemDetail/ItemDetail';
import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Firebase/config';


const ItemDetailContainer=()=>{
    const [detail, setData]=useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {detailid}=useParams()

    useEffect(()=>{
        let isMounted = true
        setLoading(true)
        setError(null)
        getProductById(detailid)
            .then(data => {
                if (isMounted) {
                    setData(data)
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

    },[detailid])
   
    
    return(
        <div>
            {loading && <p>Cargando detalle...</p>}
            {error && <p>No pudimos cargar el detalle. {error.message}</p>}
            {!loading && !error && <ItemDetail product={detail}/>}
        </div>
        )  
}
export default ItemDetailContainer
