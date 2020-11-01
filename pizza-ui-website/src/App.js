import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import { fullWidthClassName, RemoveScrollBar } from 'react-remove-scroll-bar';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* <RemoveScrollBar /> */}
      {/* <div className={fullWidthClassName} /> */}
      <GlobalStyle />
      {/* <Navbar /> */}
      <Hero />
      <Products heading='Choose your favorite Pizza' data={productData} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
