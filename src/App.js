import React from 'react'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Bookdetials from './Components/Bookdetials/Bookdetials'


const App = () => {
  return (
    <>
    <Header/>
    <Body/>
    </>
  )
}

export default App