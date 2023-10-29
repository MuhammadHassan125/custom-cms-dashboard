import React from 'react'
import PasswordInput from '../../components/PasswordInput';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import {Link} from 'react-router-dom';
import './app.css';

const Registration = () => {
  return (
    <div>
         <section className='signin-section'>
        <div className='container'>
          <div className='logo'>
            <h1>LOGO HERE</h1>
          </div>

          <div className='signin-div'>
            <h3>Register</h3>
            <p>Create New CRM Account</p>

            <form className='form-styles'>
              <p>Name</p>
              <Input/>

              <p>Email or Username</p>
              <Input/>
              <div className='displaying-inline'>
                <p>Password</p>
                <p></p>
              </div>
                <PasswordInput/>
            </form>

            <button className='button-primary'>Register</button>
            
            <div className='create-account'>
              <p>Already have an account?</p><span><Link to={"/"}>Sign in instead</Link></span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Registration