import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Dashboard } from './components/Dashboard';
import  reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Common/Header';
import { Footer } from './components/Common/Footer';
import { Revenue } from './components/Revenue';
import { Login } from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/revenue' element={<Revenue />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
