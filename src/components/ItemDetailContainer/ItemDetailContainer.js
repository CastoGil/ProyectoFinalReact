import ItemDetail from '../ItemDetail/ItemDetail';
import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore  } from 'firebase/firestore';


const ItemDetailContainer=()=>{
    const [detail, setData]=useState({})
    const {detailid}=useParams()

    useEffect(()=>{
        const querydb= getFirestore()
        const queryDoc= doc(querydb, 'Electro',detailid)
        getDoc(queryDoc).then(res=> setData({ id: res.id, ...res.data()}))

    },[detailid])
   
    
    return(
        <div>
            <ItemDetail product={detail}/>
        </div>
        )  
}
export default ItemDetailContainer
