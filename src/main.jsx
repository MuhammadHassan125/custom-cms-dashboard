import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from '../pages/signin/Signin.jsx';
import Registration from '../pages/registeration/Registration.jsx';
import EmailVerification from '../pages/email-verification/EmailVerification.jsx'
import ResetPassword from '../pages/reset-password/ResetPassword.jsx';
import ForgotPs from '../pages/forgot-password/ForgotPs.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import AccountDetails from '../components/AccountDetails/AccountDetails.jsx';
import AccountList from '../components/AccountList/AccountList.jsx';
import CreateAccount from '../components/AccountList/CreateAccount.jsx';
import UserProfile from '../pages/UserProfile/UserProfile.jsx';
import PersonalInfo from '../components/UserProfileComponents/PersonalInfo.jsx';
import Notifications from '../components/UserProfileComponents/Notifications.jsx';
import SecuritySetting from '../components/UserProfileComponents/SecuritySetting.jsx';
import ContactUs from '../pages/contact-us/ContactUs.jsx';
import Toturial from '../pages/toturial/Toturial.jsx';
import Faqs from '../pages/faqs/Faqs.jsx';
import DashboardContent from '../pages/dashboard/DashboardContent.jsx';
import NotificationsAlert from '../pages/notifications-alert/NotificationsAlert.jsx';
import AccountBalance from '../pages/account-balance/AccountBalance.jsx';
import AuditTrail from '../pages/audit-trail/AuditTrail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "/register",
    element: <Registration/>,
  },
  {
    path:"/verify",
    element: <EmailVerification/>,
  },{
    path:"/reset-password",
    element: <ResetPassword/>,
  },
  {
    path:"/forget-password",
    element: <ForgotPs/>
  },{
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {path:"users",
      element: <Registration/>},
      {
        path:"email",
        element:<EmailVerification/>
      },
      {
        path:"account-details",
        element:<AccountDetails/>
      },{
        path:"account-list",
        element:<AccountList/>
      },{
        path:"create-account",
        element:<CreateAccount/>
      },{
        path:"user-profile",
        element:<UserProfile/>,
        children:[
          {
            path:"personal-info",
            element: <PersonalInfo/>
          },{
            path:"notifications",
            element:<Notifications/>
          },{
            path:"security-setting",
            element:<SecuritySetting/>
          }
        ]
      },{
        path:"contact-us",
        element:<ContactUs/>
      },{
        path:"toturial",
        element:<Toturial/>
      },{
        path:"faqs",
        element:<Faqs/>
      },{
        path:"right-content",
        element:<DashboardContent/>
      },{
        path:"notification-alert",
        element:<NotificationsAlert/>
      },{
        path:"account-balance",
        element:<AccountBalance/>
      },{
        path:"log-audit-trail",
        element:<AuditTrail/>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
