import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);
