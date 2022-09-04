import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block img1"
          src="../../imagen/celular.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELECTROLIBRE</h3>
          <p className="subtitulo">Descubre nuestros Productos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img1"
          src="../../imagen/pc.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ELECTROLIBRE</h3>
          <p className="subtitulo">Y obten grandes beneficios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img1"
          src="../../imagen/sale.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ELECTROLIBRE</h3>
          <p className="subtitulo">
           Como envios gratis al todo el pais, descuentos en productos!!!...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;