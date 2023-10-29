import React from 'react'

const PersonalDetailForUser = () => {
  return (

    // here i am wrting a code of my personal details content 
    <div>

                    <div className='account-content-heading'>
                        <div> <h2>Personal Details</h2>
                            <p>Basic Info, like account name and address</p>
                        </div>

                        <div>
                            <button className='edit-btn'>
                                <img src="/print.png" />
                                <h3>Edit</h3>
                            </button>
                        </div>
                    </div>

                    <div className='account-content'>
                        <div className='left-content'>
                            <div>
                                <h5>First Name</h5>
                                <p>John Doe</p>
                            </div>

                            <div>
                                <h5>Email</h5>
                                <p>JohnDoe@gmail.com</p>
                            </div>

                            <div>
                                <h5>Date of Birth</h5>
                                <p>2 July, 1998</p>
                            </div>

                            <div className='address'>
                                <h5>Address</h5>
                                <p>Abc street, New York America</p>
                            </div>




                            
                        </div>

                        <div className='right-content'>
                               <div>
                                    <h5>First Name</h5>
                                    <p>John Doe</p>
                             </div>

                             <div>
                                    <h5>Contact No.</h5>
                                    <p>+1 212 456 7890</p>
                             </div>
                        </div>


                    </div>

    </div>
  )
}

export default PersonalDetailForUser