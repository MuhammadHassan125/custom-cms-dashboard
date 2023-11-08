import React, { useState } from 'react'
import "../AccountList/app.css";
import { AiOutlinePlus } from "react-icons/ai";
import CreateAccount from './CreateAccount';
import { Dialog, Pagination } from '@mui/material';

const AccountList = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [isActive, setIsActive] = useState(false);
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
    setIsActive(!isActive);
  });


  return (
    <>
      <section className='account-list-section'>
        <div className='main-div'>
          <div className='account-heading'>

            <div className='top-account-heading'>
              <div>
                <h1>Accounts List</h1>
                <p>You have total 5 Accounts</p>
              </div>

              <div>
                <button className='create-account' onClick={ModalFunction}><AiOutlinePlus /></button>
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

                            {isActive && (
                              <ul className='status-dropdown'>

                                {
                                  <>
                                    <ul>
                                      <li>Active</li>
                                      <li>Inactive</li>
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
                  <div className='inner-hy'><p>Account Name</p></div>
                  <div className='inner-hy'><p>Leverage</p></div>
                  <div className='inner-hy'><p>Base Currency</p></div>
                  <div className='inner-hy'><p>QTY</p></div>
                  <div className='inner-hy'><p>Status</p></div>
                  <div className='inner-hy'><p>Edit</p></div>

                </div>
              </div>

            <div className='account-one'>
                <div className='inner-hy'><p>My Account 1</p></div>
                <div className='inner-hy'><p>100</p></div>
                <div className='inner-hy'><p>USD</p></div>
                <div className='inner-hy'><p>10000</p></div>
                <div className='inner-hy'><button className='active-btn'>Active</button></div>
                <div className='inner-hy'><img src='/edit.png' onClick={"handleEditClick"} /><img src='/delete.png' onClick={""} /></div>

              </div>

              <div className='account-one'>
                <div className='inner-hy'><p>My Account 2</p></div>
                <div className='inner-hy'><p>100</p></div>
                <div className='inner-hy'><p>USD</p></div>
                <div className='inner-hy'><p>10000</p></div>
                <div className='inner-hy'><button className='active-btn'>Active</button></div>
                <div className='inner-hy'><img src='/edit.png' onClick={"handleEditClick"} /><img src='/delete.png' onClick={"handleEditClick"} /></div>

              </div>


              <div className='account-one'>
                <div className='inner-hy'><p>My Account 3</p></div>
                <div className='inner-hy'><p>100</p></div>
                <div className='inner-hy'><p>USD</p></div>
                <div className='inner-hy'><p>10000</p></div>
                <div className='inner-hy'><button className='active-btn'>Active</button></div>
                <div className='inner-hy'><img src='/edit.png' onClick={"handleEditClick"} /><img src='/delete.png' onClick={"handleEditClick"} /></div>

              </div>

              <div className='account-one'>
                <div className='inner-hy'><p>My Account 4</p></div>
                <div className='inner-hy'><p>100</p></div>
                <div className='inner-hy'><p>USD</p></div>
                <div className='inner-hy'><p>10000</p></div>
                <div className='inner-hy'><button className='active-btn'>Active</button></div>
                <div className='inner-hy'><img src='/edit.png' onClick={"handleEditClick"} /><img src='/delete.png' onClick={"handleEditClick"} /></div>

              </div>
              <div className='account-one'>
                <div className='inner-hy'><p>My Account 5</p></div>
                <div className='inner-hy'><p>100</p></div>
                <div className='inner-hy'><p>USD</p></div>
                <div className='inner-hy'><p>10000</p></div>
                <div className='inner-hy'><button className='active-btn'>Active</button></div>
                <div className='inner-hy'><img src='/edit.png' onClick={"handleEditClick"} /><img src='/delete.png' onClick={"handleEditClick"} /></div>

              </div>

            
              <Pagination className='pagination' count={2} variant="outlined" color='primary' shape="rounded" />

            </div>
          </div>

          <Dialog open={open} fullWidth maxWidth="md">
       <>
       <div className='modal-heading'> <h2>Add Account</h2> <img src='/disabled_by_default.png' className="modal-close" onClick={ModalCloseFunc}/></div>
       <CreateAccount/>
       </>
       
       </Dialog>
            
        </div>
      </section>
    </>
  )
}

export default AccountList