import React from 'react'
import Header from './Components/Header/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Bookdetials from './Components/Bookdetials/Bookdetials'
import SearchContextProvider from './context/SearchContextProvider';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <SearchContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </SearchContextProvider>
  )
}

const Applayout = () =>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout/>,
    children: [{
      path: '/',
      element: <Home/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/home/:id',
      element: <Bookdetials/>,
    },
  ]
  },
]);

export default App

