import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Footer from './pages/footer';
import Header from './pages/Header';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Header/>
       <App />
       <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);