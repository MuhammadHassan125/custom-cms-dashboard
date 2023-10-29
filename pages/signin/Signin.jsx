import React from 'react'
import './app.css';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <section className='signin-section'>
      <div className='container'>
        <div className='logo'>
          <h1>LOGO HERE</h1>
        </div>

        <div className='signin-div'>
          <h3>Sign-In</h3>
          <p>Access CRM using your email and password</p>

          <form className='form-styles'>
            <p>Email or Username</p>
            <Input />

            <div className='displaying-inline'>
              <p>Password</p>
              <span><Link to="forget-password">Forget Password?</Link></span>
            </div>
            <Input />
          </form>

          <button className='button-primary'>Sign-In</button>

          <div className='create-account'><p>New on our platform?</p> <span> <Link to={'/register'}>Create an account</Link></span></div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Signin