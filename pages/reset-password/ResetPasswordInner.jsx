import React from 'react';
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';

const ResetPasswordInner = () => {
  return (
    <div>
        
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
  )
}

export default ResetPasswordInner