import NavBarElectro from './components/navBarElectro/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UncontrolledExample from './components/Carousel/Carousel';
import React from 'react';
import CartProvider from './components/Context/CartContext';
import './App.css';
import Footer from './components/Footer/Footer';
import InfoPage from './components/InfoPage/InfoPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBarElectro />
          <main className="main-content">
            <UncontrolledExample />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/detail/:detailid' element={<ItemDetailContainer />} />
              <Route
                path='/nosotros'
                element={
                  <InfoPage
                    title='Sobre ElectroLibre'
                    subtitle='Tecnología confiable, entregas seguras y experiencia de compra simple.'
                    points={[
                      'Seleccionamos productos de marcas líderes para asegurar calidad y rendimiento.',
                      'Ofrecemos atención personalizada para ayudarte a elegir el equipo ideal.',
                      'Acompañamos cada compra con seguimiento y soporte postventa.'
                    ]}
                  />
                }
              />
              <Route
                path='/contacto'
                element={
                  <InfoPage
                    title='Contacto'
                    subtitle='Estamos para ayudarte en cada etapa de tu compra.'
                    points={[
                      'Email: soporte@electrolibre.com',
                      'Teléfono: +54 11 4000-0000',
                      'Horario: Lunes a Viernes de 9:00 a 18:00'
                    ]}
                  />
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
