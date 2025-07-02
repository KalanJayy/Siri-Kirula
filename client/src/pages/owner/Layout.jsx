import React from 'react'
import NavBarOwner from '../../components/owner/NavBarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
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