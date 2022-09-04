import "./Item.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



const Item=({info})=>{
    return(
        <>
        <div className="contenedor-principal">
            <div> 
            <img className="imagenFondo" src={info.img} alt=''/>
            <p className="title">{info.title}</p>
            </div>
            <div className="contenedor-info">
            <p>{info.description}</p>
            <p>${info.price}</p>
            <p className="disponible">Disponible {info.stock}</p>
            <Link to={`/detail/${info.id}`}>
            <Button variant="info">Ver Detalles</Button>
            </Link>
            </div>
           
        </div></>
    )
}
export default Item;
