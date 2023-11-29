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
    <div className='z-[-2] h-full w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'>
      <Header/>
    <Body/>
    </div>
    
    </>
  )
}

export default App