import React from 'react'
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import './app.css';

const ForgotPs = () => {
  return (
    <div>
      
      <section className='signin-section'>
        <div className='container'>
          <div className='logo'>
            <h1>LOGO HERE</h1>
          </div>

          <div className='signin-div'>
            <h3>Forgot Password</h3>
            <p>If you forgot your password, well, then we'll email you instructions to reset your password.</p>

            <form className='form-styles'>
              <p>Email</p>
              <Input/>
            </form>

            <button className='button-primary'>Send Resend Link</button>
            
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

export default ForgotPs