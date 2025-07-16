import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Top from './Top'




const Routelayout = () => {
  return (
    <div>
      <Top/>
     <Header/>
     <Outlet/>
     <Footer/>
     
    
    </div>
  )
}

export default Routelayout
