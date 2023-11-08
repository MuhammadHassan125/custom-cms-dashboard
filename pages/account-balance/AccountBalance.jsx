import React,{useState} from 'react'
import './app.css';
import { Pagination } from '@mui/material';

const AccountBalance = () => {

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
                <h1>Balance Details</h1>
                <div className='balance-details'>
                    <div> <h4>Current Balance</h4><p>Current Balance</p></div>
                    <div><h4>Last Deposit</h4><p>Jan 10, 2023</p></div>
                    <button>Deposit Now</button>
                </div>
              </div>
             
              <div>
                <h1>Deposit History</h1>
                <p>All your past Deposits are shown here</p>
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
    <div className='edit-btn'>
        <button><img src='/print.png'/>Export</button>
    </div>
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
    <div className='notification-inner-hy'><h4>Payment ID</h4></div>
    <div className='notification-inner-hy'><h4>Date</h4></div>
    <div className='notification-inner-hy'><h4>Amount</h4></div>
    <div className='notification-inner-hy'><h4>Payment Method</h4></div>
  </div>
</div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#1595534</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$1100</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#2334527</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$99</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#5248906</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$285</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#5248906</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$285</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#5248906</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$285</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>

    <div className='account-one'>
        <div className='notification-inner-hy'><p>#5248906</p></div>
        <div className='notification-inner-hy'><p>16 Mar 2019</p></div>
        <div className='notification-inner-hy'><p>$285</p></div>
        <div className='notification-inner-hy'><p>Credit Card</p></div>
    </div>



<Pagination className='pagination' count={2} variant="outlined" color='primary' shape="rounded" />

</div>

    </div>

   </section>
   </>
  )
}

export default AccountBalance