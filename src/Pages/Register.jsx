import React from 'react'
import { Link } from 'react-router-dom'
import './Loginpage.css'

function Register() {
  return (
    <div className='gap-3 d-flex flex-column'>
        <div className="ip-fields">
          <input type="text" placeholder='Fullname' />
         </div>

         <div className="ip-fields">
          <input type="email" placeholder='Enter your E-mail Address' />
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Enter your College Registration Number' />
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Select your Department' />
         </div>

         <div className="ip-fields">
          <input type="text" placeholder='Select your Year of Study' />
         </div>

          <div className="ip-fields">
            <input type="text" placeholder='Username'/>
          </div>
          
          <div className="ip-fields">
            <input type="password" placeholder='Password'/>
          </div> 
          
          <div className="logbtn  ">
          <button className='rounded-5 d-flex justify-content-center fw-semibold py-2 w-100'>
                REGISTER
          </button>
          </div>

          <div className="yesorno d-flex justify-content-center">
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
    </div>
  )
}

export default Register