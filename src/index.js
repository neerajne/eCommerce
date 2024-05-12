import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FilterProvider , CartProvider } from './Context';
import App from './App';
import { ScrollToTop } from './components/Other/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Router>
  <CartProvider>
      <FilterProvider >
        <ScrollToTop/>
        <ToastContainer/>
        <App />
     </FilterProvider>
     </CartProvider>
 
 </Router>
    
  </React.StrictMode>
);