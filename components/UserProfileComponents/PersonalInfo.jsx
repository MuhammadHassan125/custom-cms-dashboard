import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'

const PersonalInfo = () => {
  return (
      <>
      <div className='personal-information'>
            <div className='personal-info-content'>
                <h2>Personal Information</h2>
                <p>Basic info, like your name and email, that you use on CRM platform</p>

                <div className='basic'>
                  <h4>BASIC</h4>
                </div>

                <div className='full-name'>
                    <div className='content'>
                      <h4>Full Name</h4>
                      <p>John Doe</p>
                    </div>

                    <div><HiOutlineArrowRight/></div>
                </div>
                <hr/>

                <div className='full-name'>
                    <div className='content'>
                      <h4>Email</h4>
                      <p>John123@gmail.com</p>
                    </div>

                    <div><HiOutlineArrowRight/></div>
                </div>
                <hr/>

                <div className='full-name'>
                    <div className='content'>
                      <h4>Contact</h4>
                      <p>+1 212 456 7890</p>
                    </div>

                    <div><HiOutlineArrowRight/></div>
                </div>
                <hr/>
            </div>

      </div>
      </>
    )
}

export default PersonalInfo