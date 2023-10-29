import React,{useState} from 'react'
import CancelCountinuebtns from './CancelCountinuebtns'

const PersonalDetails = () => {


  return (
    <>

    {/* here in this component I am writing a code of personaldetail this is the comp of add account  */}
    <section className='personal-details-section'>
        <div className='details-content-main'>
            <div>
                <form>
                    <h5>First Name</h5>
                    <input placeholder='Enter First Name'/>
                </form>
            </div>

            <div>
                <form>
                    <h5>Last Name</h5>
                    <input placeholder='Enter Last Name'/>
                </form>
            </div>

            <div>
                <form>
                    <h5>Email</h5>
                    <input placeholder='Enter Email Address'/>
                </form>
            </div>

            <div>
                <form>
                    <h5>Contact No</h5>
                    <input placeholder='Enter Contact No'/>
                </form>
            </div>

            <div>
                <form>
                    <h5>Date of Birth</h5>
                    <input placeholder='Enter Your Date of Birth'/>
                </form>
            </div>

            <div id='address-input'>
                <h5>Address</h5>
                <input placeholder='Enter Your Address'/>
            </div>

            <CancelCountinuebtns label={"Continue"}/>


        </div>
           
    </section>
    </>
  )
}

export default PersonalDetails