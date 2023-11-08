import React, { useState } from 'react';
import './app.css';
import { Outlet } from 'react-router-dom';
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
        <div className='sidebar-wrapper'>
          <DashboardSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        </div>
        <DashboardHeader OpenSidebar={OpenSidebar} />
        <div className="content-wrapper">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;