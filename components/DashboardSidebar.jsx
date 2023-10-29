import React from 'react'
 import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({openSidebarToggle, OpenSidebar}) => {

  return (
    <>
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
          
            <span className='icon close_icon' onClick={OpenSidebar}><AiFillCloseCircle/></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <img src='/dashboard.png' className='icon'/> <span>Dashboard</span>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/dashboard/account-list">
                    <img src='/account_box.png' className='icon'/> Account Management
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/terminal.png' className='icon'/> Terminal Connection
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/group.png' className='icon'/> User Profile & Settings
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/chart_data.png' className='icon'/> Reporting & Analysis
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/info.png' className='icon'/> Support & Help
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/alarm.png' className='icon'/> Notification & Alerts
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/integration_instructions.png' className='icon'/> Integration & API
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/account_balance.png' className='icon'/> Account balance
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/chat.png' className='icon'/> Feedback & Suggestions
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/shield_person.png' className='icon'/> User Management
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <img src='/find_in_page.png' className='icon'/> Log & Audit Trail
                </Link>
            </li>
        </ul>
    </aside>
    </>
  )




}

export default DashboardSidebar