import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider> 
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a TECHNOLOGY!" />} />
            <Route path='/category/:categoryid' element={<ItemListContainer greeting="Categoria" />} />
            <Route path='/item/:itemid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND </h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}