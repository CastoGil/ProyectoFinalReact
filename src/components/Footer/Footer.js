import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookSquare, FaTelegram, FaTwitch, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='grupo1'>
        <div className='caja'>
          <figure>
            <a href='/' aria-label='Ir al inicio'>
              <img
                className='logo'
                src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
                alt='Logo ElectroLibre'
              />
            </a>
          </figure>
        </div>
        <div className='caja'>
          <h2 className='sobre'>Sobre Nosotros</h2>
          <p className='info'>
            En ElectroLibre seleccionamos tecnología de calidad para que compres con confianza, seguridad y asesoramiento.
          </p>
          <p className='info'>
            Encontrá especificaciones claras, atención personalizada y beneficios exclusivos en cada categoría.
          </p>
        </div>
        <div className='caja'>
          <h2 className='siguenos'>Seguinos</h2>
          <div className='redes'>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <FaFacebookSquare />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
              <FaTwitter />
            </a>
            <a href='https://www.twitch.tv/' target='_blank' rel='noopener noreferrer' aria-label='Twitch'>
              <FaTwitch />
            </a>
            <a href='https://web.telegram.org/k/' target='_blank' rel='noopener noreferrer' aria-label='Telegram'>
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className='grupo-2'>
        <small>
          &copy; {new Date().getFullYear()} <b>ElectroLibre</b> — Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
}
