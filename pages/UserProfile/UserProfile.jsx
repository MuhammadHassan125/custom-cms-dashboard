import React, { useState } from 'react'
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineArrowRight} from 'react-icons/hi'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {BsShieldLock} from 'react-icons/bs'

const UserProfile = () => {

    const [changePhotoDropdown, setChangePhotoDropdown] = useState(false);

    const onClickDropDown = (() => {
        setChangePhotoDropdown(!changePhotoDropdown);
    });

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
      };
    
      const handleDivClick = () => {
        document.getElementById('fileInput').click();
      };
    
    return (
        <>
            <section className='user-profile-section'>
                <div className='user-profile'>
                    <div className='user-left'>
                        <div className='user-sidebar'>
                            <div className='user-topbar'>
                                <div className='user-topbar-left'>
                                    <div>
                                        <img src='/account_circle.png' />
                                    </div>
                                    <div>
                                        <h2>John Doe</h2>
                                        <p>John123@gmail.com</p>
                                    </div>

                                </div>

                                <div className='user-topbar-right ' onClick={onClickDropDown} >
                                    <img src='/more_vert.png' />

                                    {changePhotoDropdown && (
                                        <>
                                            {
                                                <div className='change-photo-dropdown-css'>
                                                    <div className='change-photo-inner-div'>
                                                        <input
                                                            type="file"
                                                            id="fileInput"
                                                            style={{ display: 'none' }}
                                                            onChange={handleFileChange}
                                                        />
                                                        <div onClick={handleDivClick}>
                                                            <img src='/add_a_photo.png' alt="Add Photo" />
                                                        </div>
                                                        <div>
                                                            <p>Change Photo</p>
                                                        </div>
                                                    </div>

                                                    <div className='change-photo-inner-div'>
                                                        <div><img src='/border_color.png' /></div>
                                                        <div> <p>Update Profile</p></div>
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    )}
                                </div>

                            
                            <hr/>
                            </div>

                            <Link to="/dashboard/user-profile/personal-info" className='custom-link'>
                            <div className='user-sidebar-list'>
                                <div className='sidebar-left-icon'>
                                    <CgProfile className='icons-user-sidebar'/>
                                    <h5>Personal Information</h5>
                                </div>

                                <div><HiOutlineArrowRight/></div>
                            </div>
                            </Link>

                        <Link to="/dashboard/user-profile/notifications" className='custom-link'>
                            <div className='user-sidebar-list'>
                                <div className='sidebar-left-icon'>
                                    <MdOutlineNotificationsActive className='icons-user-sidebar'/>
                                    <h5>Notification</h5>
                                </div>

                                <div><HiOutlineArrowRight/></div>
                            </div>
                        </Link>

                        <Link to="/dashboard/user-profile/security-setting" className='custom-link'>
                            <div className='user-sidebar-list'>
                                <div className='sidebar-left-icon'>
                                    <BsShieldLock className='icons-user-sidebar'/>
                                    <h5>Security Setting</h5>
                                </div>

                                <div><HiOutlineArrowRight/></div>
                            </div>
                        </Link>

                        </div>

                    </div>

                    <div className='user-right'>
                        <Outlet />
                    </div>


                </div>
            </section >
        </>
    )
}

export default UserProfile