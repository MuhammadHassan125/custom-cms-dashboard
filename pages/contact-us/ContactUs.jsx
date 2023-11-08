import React from 'react'
import './app.css';
import Button from '../../components/Button';

const ContactUs = () => {
  return (
        <>
        <section className='contact-us-section'>
            <div className='container'>
                <h1>Contact Us</h1>

                <div className='contact-boxes'>
                        <div>
                            <img src='/Icon.png'/>
                            <h3>Address</h3>
                            <p>44 New Design</p>
                            <p> StreetMelbourne</p>
                            <p> 005Australia 300</p>
                        </div>

                        <div>
                            <img src='/Icon (1).png'/>
                            <h3>Phone No.</h3>
                            <p> 01 (800) 433 544</p>
                            <p> 01 (800) 433 544</p>
                        </div>


                        <div>
                            <img src='/Icon (2).png'/>
                            <h3>Email</h3>
                            <p>info@Example.com</p>
                        </div>
                </div>

                <div className='send-message-main'>
                    <div className='left-contact-box'>

                        <span>Send Message</span>
                        <h2>Let's talk</h2>

                        <div>
                            <h5>First Name</h5>
                            <input placeholder='Enter First Name'/>
                        </div>

                        <div>
                            <h5>Last Name</h5>
                            <input placeholder='Enter Last Name'/>
                        </div>

                        <div>
                            <h5>Email</h5>
                            <input placeholder='Enter Email Address'/>
                        </div>

                        <div>
                            <h5>Phone No.</h5>
                            <input placeholder='Enter Phone Number'/>
                        </div>

                        <div className='enter-message'>
                            <h5>How can we help you?</h5>
                            <input placeholder='Enter Message'/>
                            <Button label={"Send Message"}/>
                        </div>

                    </div>
                    <div className='right-contact-box'><img src='/ContactImage.png' alt='ContactImage'/></div>
                </div>
            </div>
        </section>

        </>
    )
}

export default ContactUs