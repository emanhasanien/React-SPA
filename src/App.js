import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Portofolio from './Portofolio/Portofolio'
import Contact from './Contact/Contact'
import { RouterProvider , createBrowserRouter, createHashRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import NotFound from './NotFound/NotFound'

export default function App() {
 
let routes= createHashRouter( [
  {path : '/' ,element :<MainLayout/> ,
  
  children:[
    {path: '' , element:<Home/> },
    {path :'home' ,element: <Home/>},
    {path : 'about', element: <About/>} ,
    { path: 'portfolio' , element: <Portofolio/>},
    { path: 'contact', element: <Contact/>} ,
    {path: '*' ,element: <NotFound/>}
  ]
}
])
  return (
    <>
  
        <RouterProvider router={routes }/>


    </>
  )
}
