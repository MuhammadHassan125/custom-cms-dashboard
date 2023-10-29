import React from 'react'
import Footer from '../../components/Footer'
import PasswordInput from '../../components/PasswordInput'
import {Link} from 'react-router-dom';
const ResetPassword = () => {
  return (
    
    <div>
      <section className='signin-section'>
        <div className='container'>
          <div className='logo'>
            <h1>LOGO HERE</h1>
          </div>

          <div className='signin-div'>
            <h3>Reset Password</h3>
            <p>Please create a new password that you don't use onany other site.</p>

            <form className='form-styles'>
              <p>New Password</p>
              <PasswordInput />
              <div className='displaying-inline'>
                <p>Confirm New Password</p>
                <p></p>
              </div>
                <PasswordInput/>
            </form>

            <button className='button-primary'>Update Password</button>
            
            <div className='create-account'>
              <span><Link to={'/'}>Return to login</Link></span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResetPassword