import React from 'react'
import { Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
   <>
   <h1>side bar</h1>
    <Outlet />
   </>
  )
}

export default AdminLayout