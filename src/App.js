
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Main from './components/Main';
import './index.css'
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<ProductListing/>} />
          <Route path="/products/:id" element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
