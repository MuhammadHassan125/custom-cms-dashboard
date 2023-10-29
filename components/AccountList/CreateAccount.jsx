import React, {useState} from 'react';
import PersonalDetails from './PersonalDetails';
import { TradingPreferences } from './TradingPreferences';
import KycDocuments from './KycDocuments';

const CreateAccount = () => {

    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = ((index)=>{
        setActiveTab(index)
    })


  return (
    <div>

{/* here in this component I am writing a code of modal of add accounts  */}

<div className="create-account-section">
      <div className="tab-progress">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          1
        </div>

        <div>
        <img src='/Line 11.png'/>
        </div>

        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          2
        </div>

        <div>
        <img src='/Line 11.png'/>
        </div>


        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          3
        </div>
      </div>

      <div className='tabs-heading'>
            <div><p>Personal Details</p></div>
            <div><p>Trading Preferences</p></div>
            <div><p>KYC Documentation</p></div>
      </div>

      {activeTab === 1 && (
        <div className="tab-content">
          {/* Content for Personal details */}
          <PersonalDetails/>
        </div>
      )}

      {activeTab === 2 && (
        <div className="tab-content">
          {/* Content for Trading comp */}
          <TradingPreferences/>
        </div>
      )}

      {activeTab === 3 && (
        <div className="tab-content">
          {/* Content for KYC Doc */}
          <KycDocuments/>
        </div>
      )}
    </div>


    </div>
  )
}

export default CreateAccount