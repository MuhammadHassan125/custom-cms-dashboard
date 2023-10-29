import React from 'react'

const CancelCountinuebtns = ({label}) => {
  return (
    <div>

        {/* btns of personal details  */}
        <div className='btn-of-continue'>
                <button className='btn-primary-secondary'>Cancel</button>
                <button className='btn-continue-primary'
                >{label}</button>
            </div>


    </div>
  )
}

export default CancelCountinuebtns