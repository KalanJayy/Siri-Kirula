import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'

const App = () => {

  const[showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
        {!isOwnerPath && <Navbar setShowLogin={setShowLogin}></Navbar>}

        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/car-details/:id' element={<CarDetails></CarDetails>}/>
          <Route path='/cars' element={<Cars></Cars>}/>
          <Route path='/my-bookings' element={<MyBookings></MyBookings>}/>
        </Routes>
        {!isOwnerPath && <Footer></Footer>}
        

    </>
  )
}

export default App