import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='footer-div'>
                <div className='footer-left-div'>
                    <img src='/copyright.png'/>
                    <p>2023 CRM. All Rights Reserved</p>
                </div>

                <div className='footer-right-div'>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Help</p>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer