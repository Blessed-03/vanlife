import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './MainPageStructure.css'
function MainPageStructure() {
  return (
    <div className='main-wrapper'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainPageStructure