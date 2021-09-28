import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Services />
    <About />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
