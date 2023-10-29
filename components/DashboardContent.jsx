import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardContent = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default DashboardContent