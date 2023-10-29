import React from 'react'

const KycDocumentForUser = () => {
  return (
   <>
    <div>

<div className='account-content-heading'>
        <div> <h2>KYC Documentation</h2>
            <p>These documents is used for account verification</p>
        </div>

        <div>
            <button className='edit-btn'>
                <img src="/print.png" />
                <h3>Edit</h3>
            </button>
        </div>
    </div>

<div className='connect-for-kycDoc-inner'>
 
  <div>
    <h5>Identification Proof</h5>
    <p>MyNIC.pdf</p>
  </div>

  <div>
    <h5>Status</h5>
    <span>Verified</span>
  </div>

  <div>
    <h5>Proof of Address</h5>
    <p>MyElectricBill-Aug.pdf</p>
  </div>

  <div>
    <h5>Status</h5>
    <span>Verified</span>
  </div>
  
</div>


</div>
   </>
  )
}

export default KycDocumentForUser