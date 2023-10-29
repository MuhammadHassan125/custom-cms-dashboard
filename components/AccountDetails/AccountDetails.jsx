import React, { useState } from 'react'
import '../AccountDetails/app.css';
import TradingReferenceForUser from '../AccountDetails/TradingReferenceForUser';
import PersonalDetailForUser from './PersonalDetailForUser';
import KycDocumentForUser from './KycDocumentForUser';

const AccountDetails = () => {

    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = ((index) => {
        setActiveTab(index)
    })


    return (
        <>
            <section className='account-details-section'>
                <div className='account-details-main'>
                    <div className='account-details-heading'>
                        <div> <h2>Account Details</h2>
                            <p>Account ID: #554312</p>
                        </div>

                        <div>
                            <button className='back-btn'>
                                <img src="/arrow_back.png" />
                                <h3>Edit</h3>
                            </button>
                        </div>
                    </div>

            <div className='tab-main-div'>
            
                    <div className="account-tabs">
                        <div
                            className={`tab-of-account ${activeTab === 1 ? 'account-active' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            <div>
                            <img src='/account_box.png'/>
                            <p>Personal Details</p>
                            </div>
                        </div>


                        <div
                            className={`tab-of-account ${activeTab === 2 ? 'account-active' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            <div>
                                <img className='trade-icon'
                                src='/chart_data (1).png'/>
                                <p>Trading preferences</p>
                            </div>

                        </div>



                        <div
                            className={`tab-of-account ${activeTab === 3 ? 'account-active' : ''}`}
                            onClick={() => handleTabClick(3)}
                        >
                            <div>
                                <img src='/clinical_notes.png'/>
                                <p> KYC Documentation </p>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div>
                    {activeTab === 1 && (
        <div className="tab-content">
          {/* Content for Personal details */}
          <PersonalDetailForUser/>
        </div>
      )}

      {activeTab === 2 && (
        <div className="tab-content">
          {/* Content for Trading comp */}
          <TradingReferenceForUser/>
        </div>
      )}

      {activeTab === 3 && (
        <div className="tab-content">
          {/* Content for KYC Doc */}
          <KycDocumentForUser/>
        </div>
      )}
      </div>
            </div>

                </div>
            </section>

        </>
    )
}

export default AccountDetails