import React, {useState} from 'react'

const Notifications = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [fourChecked, setFourChecked] = useState(false);
  const [fifthChecked, setFifthChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSecondToggle = () => {
    setSecondChecked(!secondChecked);
  };

  const handleThirdToggle = () => {
    setThirdChecked(!thirdChecked);
  }; 
  
  const handleFourToggle = () => {
    setFourChecked(!fourChecked);
  };

  const handleFifthToggle = () => {
    setFifthChecked(!fifthChecked);
  };

  return (
        <>
          <div className='personal-information'>

          <div className='personal-info-content'>
                <h2>Notification Settings</h2>
                <p>You will get only notification what have enabled</p>
          </div>

          <div className='personal-info-content'>
                <h3>Email Alerts</h3>
                <p>You will get only notification what have enabled</p>
          </div>

    {/* switching div */}
          <div className='switch-div'>
            <label className="switch">
                  <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                  <span className="slider round"></span>
              </label>

            <p>Email me security alerts</p>
          </div>

          <div className='switch-div'>
            <label className="switch">
                  <input type="checkbox" checked={secondChecked} onChange={handleSecondToggle} />
                  <span className="slider round"></span>
              </label>

            <p>Email me promotions</p>
          </div>
         

          <div className='switch-div'>
            <label className="switch">
                  <input type="checkbox" checked={thirdChecked} onChange={handleThirdToggle} />
                  <span className="slider round"></span>
              </label>

            <p>Notify me by email about account balance</p>
          </div>

          <div className='personal-info-content'>
                <h3>In app Alerts</h3>
                <p>You will get only those in app notification what you want</p>
          </div>

          <div className='switch-div'>
            <label className="switch">
                  <input type="checkbox" checked={fourChecked} onChange={handleFourToggle} />
                  <span className="slider round"></span>
              </label>

            <p>Notify me about account activity</p>
          </div>


          <div className='switch-div'>
            <label className="switch">
                  <input type="checkbox" checked={fifthChecked} onChange={handleFifthToggle} />
                  <span className="slider round"></span>
              </label>

            <p>Notify me about news updates</p>
          </div>
         
         
          </div>
        </>
    )
}

export default Notifications