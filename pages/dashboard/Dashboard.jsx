import React, { useState } from 'react';
import './app.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom'; // Import Routes and Route
import DashboardHeader from '../../components/DashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar';


const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="dashboard-section">
        <DashboardHeader OpenSidebar={OpenSidebar} />
        <div className='sidebar-wrapper'>
          <DashboardSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        </div>
        <div className="content-wrapper">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;