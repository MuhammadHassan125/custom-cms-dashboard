import React from 'react'
import BarChart from '../dashboard/BarChart';
import LineChart from '../dashboard/LineChart';

const DashboardContent = () => {
  return (
    <>
        <section className='dashboard-content-section'>
            <div className='top-bars-main'>
                <div>
                    <img src='/cinematic_blur.png'/>
                    <h1>Total Accounts</h1>
                    <span>
                        <h2>5</h2>
                    </span>
                </div>

                <div>
                    <img src='/cinematic_blur.png'/>
                    <h1>Active Accounts</h1>
                    <span>
                        <h2>4</h2>
                    </span>
                </div>

                <div>
                    <img src='/cinematic_blur.png'/>
                    <h1>Total Accounts</h1>
                    <span>
                        <h2>5</h2>
                    </span>
                </div>


            </div>

            <div className='bar-chart'>
                <h3>Accounts Over Time</h3>
                <div className='bar-chart-css'>
                <BarChart/>
                </div>
            </div>

            <div className='line-chart-main'>

                <div className='line-chart'>
                    <div className='line-cart-css'>
                    <LineChart/>
                    </div>
                </div>

                <div className='total-grades'>
                    <h2>Total Trades</h2>
                    <h1>4,325</h1>

                    <h2>This Month</h2>
                    <div>
                        <h1>1,224</h1>
                            <h5>0.7</h5>
                    </div>
                    <p>Compared to last month</p>

                    <h2>This Week</h2>
                    <div>
                        <h1>459</h1>
                        <span>
                            <h5>0.2</h5>
                        </span>
                    </div>
                    <p>Compared to last week</p>
                </div>



            </div>

        </section>
    </>
        // <BarChart/>
  )
}

export default DashboardContent