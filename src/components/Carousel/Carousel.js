import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function UncontrolledExample() {
  return (
    <Carousel className='hero-carousel'>
      <Carousel.Item>
        <img className='d-block img1' src='/imagen/celular.jpg' alt='Celulares de última generación' />
        <Carousel.Caption className='hero-caption'>
          <h3>Tecnología que te acompaña</h3>
          <p className='subtitulo'>Descubrí celulares, tablets y accesorios con ofertas destacadas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block img1' src='/imagen/pc.jpg' alt='Computadoras y notebooks' />
        <Carousel.Caption className='hero-caption'>
          <h3>Potencia para estudiar y trabajar</h3>
          <p className='subtitulo'>Equipos de alto rendimiento para cada necesidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block img1' src='/imagen/sale.png' alt='Promociones y descuentos especiales' />
        <Carousel.Caption className='hero-caption'>
          <h3>Beneficios en todo el país</h3>
          <p className='subtitulo'>Envíos gratis, cuotas y descuentos exclusivos en productos seleccionados.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
