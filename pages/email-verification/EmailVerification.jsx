import React from 'react';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const EmailVerification = () => {
  return (
    <div>
      <section className='signin-section'>
        <div className='container'>
          <div className='logo'>
            <h1>LOGO HERE</h1>
          </div>

          <div className='signin-div'>
            <h3>Email Verification</h3>

            <form className='form-styles'>
              <p>Code</p>
              <Input />
              <div className='displaying-inline'>
                <p></p>
                <p> Resend Code in 60 sec </p>
              </div>
            </form>

            <button className='button-primary'>Verify</button>
            
            <div className='create-account'>
              <p>Can’t find it? Please check your spam folder</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default EmailVerification;