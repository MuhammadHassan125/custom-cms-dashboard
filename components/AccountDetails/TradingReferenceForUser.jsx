import React from 'react'

const TradingReferenceForUser = () => {
  return (
    <div>

                <div className='account-content-heading'>
                        <div> <h2>Trading Preferences</h2>
                            <p>All Details regarding your Trading Preferences</p>
                        </div>

                        <div>
                            <button className='edit-btn'>
                                <img src="/print.png" />
                                <h3>Edit</h3>
                            </button>
                        </div>
                    </div>

                <div className='connect-for-trading-inner'>
                  <div>
                    <h5>Account Type</h5>
                    <p>ECN</p>
                  </div>

                  <div>
                    <h5>Base Currency</h5>
                    <p>USD</p>
                  </div>

                  <div>
                    <h5>Leverage</h5>
                    <p>10000</p>
                  </div>
                </div>
                

    </div>
  )
}

export default TradingReferenceForUser