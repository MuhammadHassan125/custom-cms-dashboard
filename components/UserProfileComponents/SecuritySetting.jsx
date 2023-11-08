import React, { useState } from 'react';
import Button from '../Button';
import '../AccountList/App.css';
import { Dialog } from '@mui/material';
import ResetPassword from '../../pages/reset-password/ResetPassword'
import ResetPasswordInner from '../../pages/reset-password/ResetPasswordInner';


const SecuritySetting = () => {

  const [open, setOpen] = useState(false);

  const OnclickModal = (()=>{
    setOpen(true);
  })

  const OnclickCloseModal = (()=>{
    setOpen(false);
  })

  return (
    <div className="personal-information">
      <div className="personal-info-content">
        <h2>Security Settings</h2>
        <p>These settings will help you keep your account secure.</p>
      </div>

      <div className="change-password-main">
        <div className="change-password">
          <h3>Change Password</h3>
          <p>Set a unique password to protect your account.</p>
          <div onClick={OnclickModal}>          
          <Button label="Change Password"/>
          </div>

        </div>

        <Dialog open={open} fullWidth>
          <>
          <div className='reset-password-close-modal-css'> <img src="/disabled_by_default.png" onClick={OnclickCloseModal}/></div>
           <ResetPasswordInner/>
          </>
        </Dialog>

        <hr />

        <div className="change-password">
          <div className="factor-heading">
            <h3>2 Factor Auth</h3>
            <button className="enable-btn" type="submit">
              Enabled
            </button>
          </div>

          <div className="factor-content">
            <p>
              Secure your account with 2FA security. When it is activated, you
              will need to enter not only your password but also a special code
              using the app. You will receive this code via a mobile application.
            </p>
            <Button label="Disable" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetting;
