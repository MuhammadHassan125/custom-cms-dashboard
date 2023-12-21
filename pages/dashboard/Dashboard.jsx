import React, {useState} from 'react';
import './app.css';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar'
import DashboardHeader from '../../components/DashboardHeader';

const Dashboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


  return (
   <>
    <section className='full-section'>
        <div className="dashboard-container">

              <div className='sidebar-wrapper'>
              <DashboardSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              </div>

              <div className='content-wrapper'>
                  <div className='menu-wrapper'>
                     <DashboardHeader OpenSidebar={OpenSidebar} />
                 </div>
                <div >
                <Outlet/>
                </div>

              </div>
          </div>
     </section>
   </>

   
  );
};

export default Dashboard;