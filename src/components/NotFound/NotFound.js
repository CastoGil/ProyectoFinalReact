import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className='not-found'>
      <h1>404</h1>
      <p>La página que buscás no existe o fue movida.</p>
      <Link to='/'>
        <Button variant='primary'>Volver al inicio</Button>
      </Link>
    </section>
  );
}
