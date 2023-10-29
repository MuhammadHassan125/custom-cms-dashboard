import React from 'react'
import { useState } from 'react';

const DashboardHeader = ({OpenSidebar}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
   <>
   <header className='header'>
        <div className='menu-icon'>
            <img src='/menu.png' className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h1 >LOGO HERE</h1>
        </div>
        <div className='header-right'>
          <div className='notifications'>
            <img src='/notifications.png'  alt="notifications" className='icon'/>
            <div className='notifications-popup'>5</div>
          </div>

          <div className='account_circle' onClick={toggleDropdown}>
              <img src='/account_circle.png'/>

              <div className='account_circle-content'>
                <h3>John Doe</h3>
                
                <div className='arrow-drop'>
                  <p>Administrator</p>
                <img src='/arrow_drop_down.png'/>
                </div>
              </div>
          </div>
          {isDropdownOpen && (
                            <ul className='profile-dropdown'>
                                 
                                 {
                                   <>
                                    <div className='profile-dropdown-inner'> 
                                      <img src='/group (1).png'/>
                                      <h4>View Profile</h4>
                                    </div>

                                    <div className='profile-dropdown-inner'> 
                                      <img src='/info (1).png'/>
                                      <h4>Help Center</h4>
                                    </div>

                                    <div className='profile-dropdown-inner'> 
                                      <img src='/ios_share.png'/>
                                      <h4>Sign Out</h4>
                                    </div>
                                    

                                   </>
                                    
                        }
                            </ul>
                        )}

          
        </div>
    </header>
   </>
  )
}

export default DashboardHeader