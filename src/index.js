import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Booklist from './Components/Booklist/Booklist'
import Bookdetials from './Components/Bookdetials/Bookdetials'
import Header from './Components/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Booklist/>
  </>
);