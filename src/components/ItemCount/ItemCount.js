import { useEffect, useState } from "react";
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';


export default function ItemCount( {initial, stock, onAdd }) {
    const [counter, setCounter]= useState(initial);

    const decrement = () => setCounter(counter - 1);
    const increase = () => setCounter(counter + 1);

    useEffect(() =>{
        setCounter(parseInt(initial))},[initial]
    )

    return (
        <div className="cajaPadre">
            <div className="cajaContador">
                <p className="disponible">Cantidad</p>
                <span className="contador">{counter}</span>
             <div className="botones">
                 <Button disabled={counter <= 1} onClick={decrement} variant="primary">-</Button>{' '}
                    <Button disabled={counter >= stock}  onClick={increase} variant="primary">+</Button>{' '}
             </div>
                <div className="AgregarCarrito">
                     <Button disabled={stock <= 0} onClick={()=> onAdd (counter)} variant="danger">Agregar al Carrito</Button>
                </div>
                
                <p className="disponible">Disponible {stock} </p>
         </div>
        </div>
       
    )
}

