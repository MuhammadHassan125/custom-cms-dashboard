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
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
