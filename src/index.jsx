import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { ProductPage } from './components/ProductPage/ProductPage.jsx';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">XXXCmuk</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
