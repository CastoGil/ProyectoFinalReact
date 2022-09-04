import NavBarElectro from './components/navBarElectro/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import UncontrolledExample from './components/Carousel/Carousel';
import React from 'react';
import CartProvider from './components/Context/CartContext';
import './App.css';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBarElectro/>
      <UncontrolledExample/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:detailid' element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
