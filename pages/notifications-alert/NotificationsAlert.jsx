import React,{useState} from 'react'
import './app.css';
import { Pagination } from '@mui/material';

const NotificationsAlert = () => {

    const notificationItems = [
        {
            date: "5 Jan 2021, 9:30 AM",
            type: 'Account Update',
            description: "Withdrawal",
            // Add more properties if needed
        },
        // Add more items as needed
    ];
    

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [open, setOpen] = useState(false);
    
    const ModalFunction= (()=>{
      setOpen(true);
    })
  
    const ModalCloseFunc = (()=>{
      setOpen(false);
    })
  
    const toggleDropdown = (() => {
      setIsDropdownOpen(!isDropdownOpen);
    });
  
    const onFilterClick = (() => {
      setIsFilter(!isFilter);
    });
  
    const statusDropdown = (() => {
      setIsDelete(!isDelete);
    });

  return (
   <>
   <section className='notfication-section'>
    <div className='main-div'>
        <div className='notification-heading'>
              <div>
                <h1>Notification & Alerts</h1>
                <p>List of all alerts and notifications</p>
              </div>
        </div>

        <div className='account-list-content'>

{/* here's the code of my content list of accoutn topbar  */}
<div className='account-top-bar'>
  <div className='search-bar'>
    <form>
      <div className='search-div'>
        <input placeholder='Search' />
      </div>

      <div className='search-icon'>
        <img src='/search.png' />
      </div>

    </form>
  </div>

  <div className='setting-filter'>
    <div >
      <img src='/filter_list.png' onClick={onFilterClick} />
    </div>
    {isDropdownOpen && (
      <ul className='setting-dropdown'>
        {
          <>
            <ul className='show'>
              <h3>Show</h3>
              <li>10</li>
              <li>5</li>
            </ul>

            <ul className='order'>
              <h3>Order</h3>
              <li>DESC</li>
              <li>ASC</li>
            </ul>
          </>

        }
      </ul>
    )}

    <div>
      <img src='/settings.png' onClick={toggleDropdown} />
    </div>
    {isFilter && (
      <ul className='filter-dropdown'>
        {
          <>
            <div className='filter-title'>
              <span>Filter Accounts</span>
            </div>

            <div className='status'>
              <h3>Status</h3>
              <div className='status-btn' onClick={statusDropdown}>
                <p>Any Status</p>
                <img src='/Button.png' />
              </div>

              {isDelete && (
                <ul className='status-dropdown'>

                  {
                    <>
                      <ul>
                        <li>Delete</li>
                        <li>InDelete</li>
                      </ul>
                    </>

                  }
                </ul>
              )}
            </div>
            <div className='reset'><p>Reset</p></div>


          </>

        }
      </ul>
    )}

  </div>
</div>

{/* here's the code of my list details  */}
<div className='list-details-main'>
  <div className='heading-items'>
    <div className='notification-inner-hy'><h4>Date</h4></div>
    <div className='notification-inner-hy'><h4>Type</h4></div>
    <div className='notification-inner-hy'><h4>Description</h4></div>
    <div className='action-btn-main'><h4>Actions</h4></div>
  </div>
</div>

<div className='account-one'>
  <div className='notification-inner-hy'><p>5 Jan 2021, 9:30 AM</p></div>
  <div className='notification-inner-hy'><p>Account Update</p></div>
  <div className='notification-inner-hy'><p>Withdrawal</p></div>
  <div className='action-btn-main'><button className='delete-btn'>Delete</button></div>
</div>

<div className='account-one'>
  <div className='notification-inner-hy'><p>18 Feb 2021, 9:30 AM</p></div>
  <div className='notification-inner-hy'><p>Balance Alert</p></div>
  <div className='notification-inner-hy'><p>Deposit</p></div>
  <div className='action-btn-main'><button className='delete-btn'>Delete</button></div>
</div>


<div className='account-one'>
  <div className='notification-inner-hy'><p>22 Mar 2021, 9:30 AM</p></div>
  <div className='notification-inner-hy'><p>Security Alert</p></div>
  <div className='notification-inner-hy'><p>Update Profile</p></div>
  <div className='action-btn-main'><button className='delete-btn'>Delete</button></div>
</div>


<div className='account-one'>
  <div className='notification-inner-hy'><p>1 Apr 2021, 9:30 AM</p></div>
  <div className='notification-inner-hy'><p>News Update</p></div>
  <div className='notification-inner-hy'><p>Settings Modification</p></div>
  <div className='action-btn-main'><button className='delete-btn'>Delete</button></div>
</div>


<div className='account-one'>
  <div className='notification-inner-hy'><p>15 Dec 2021, 9:30 AM</p></div>
  <div className='notification-inner-hy'><p>Security Alert</p></div>
  <div className='notification-inner-hy'><p>Sign-in</p></div>
  <div className='action-btn-main'><button className='delete-btn'>Delete</button></div>
</div>


<Pagination className='pagination' count={2} variant="outlined" color='primary' shape="rounded" />

</div>

    </div>

   </section>
   </>     
  )
}

export default NotificationsAlert