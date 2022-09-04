import React from "react";
import './Footer.css'
import { FaInstagram, FaFacebookSquare, FaTelegram ,FaTwitch , FaTwitter} from 'react-icons/fa'

export default function Footer(){
    return(
        <> 
        <div className="footer">   
            <div className="grupo1">
                <div className="caja">
                    <figure>
                        <a href="#">
                            <img className="logo" src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                        </a>
                    </figure> 
                 </div>
                    <div className="caja">
                    <h2 className="sobre"> Sobre Nosotros</h2>
                    <p className="info">En ElectroLibre vas a encontrar una variedad de los últimos electro a la venta junto con una amplia variedad de productos de primera categoría.</p>
                    <p className="info"> Encontrá todas las especificaciones para decidir cuál de los productos de electro es tu mejor opción.</p>
                    </div>
                    <div className="caja">
                    <h2 className="siguenos">Siguenos en Redes Sociales</h2>
                    <div className="redes">
                    <a href="https://www.instagram.com/" target="_blanc."><FaInstagram/></a>
                    <a href="https://www.facebook.com/" target="_blanc."><FaFacebookSquare/></a>
                     <a href="https://twitter.com/" target="_blanc."><FaTwitter/></a>
                    <a href="https://www.twitch.tv/"  target="_blanc."><FaTwitch/></a>
                    <a href="https://web.telegram.org/k/" target="_blanc."><FaTelegram/></a>
            </div>
        </div>
     </div>
        <div className="grupo-2">
        <small>&copy; 2022 <b>ElectroLibre</b>- Todos los derechos Reservados</small>
        </div>
        </div>
        </>
       )
} 

