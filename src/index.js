import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Services />
  </React.StrictMode>,
  document.getElementById('root')
);
