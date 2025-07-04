import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const {showLogin} = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      <Toaster/>
        {showLogin && <Login></Login>}
        
        {!isOwnerPath && <Navbar></Navbar>}

        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/car-details/:id' element={<CarDetails></CarDetails>}/>
          <Route path='/cars' element={<Cars></Cars>}/>
          <Route path='/my-bookings' element={<MyBookings></MyBookings>}/>
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}></Route>
            <Route path='add-car' element={<AddCar/>}></Route>
            <Route path='manage-cars' element={<ManageCars/>}></Route>
            <Route path='manage-bookings' element={<ManageBookings/>}></Route>
          </Route>
        </Routes>
        {!isOwnerPath && <Footer></Footer>}
        

    </>
  )
}

export default App