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
        setLoading(true)
        getProductById(detailid)
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    },[detailid])
   
    
    return(
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && <ItemDetail product={detail}/>}
        </div>
        )  
}
export default ItemDetailContainer
