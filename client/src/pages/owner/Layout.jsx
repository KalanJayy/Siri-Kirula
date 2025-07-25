import React, { useEffect } from 'react'
import NavBarOwner from '../../components/owner/NavbarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const {isOwner,navigate} = useAppContext();

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }
  },[!isOwner])

  return (
    <div className='flex flex-col'>
        <NavBarOwner></NavBarOwner>
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Layout