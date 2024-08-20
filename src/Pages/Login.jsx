import React from 'react'
import Title from '../components/Title'
import './Loginpage.css'
import { Link } from 'react-router-dom'
function Login({register}) { /* data passed for register */
  const regForm = register?true:false /* Assigned a constant variable True if reg present false if not present */
  return (
    <div className='total d-flex justify-content-center flex-column align-items-center'>
      <div className='box'>
        <div className="headttl">
          <Title/>
        </div >
        {regForm? /* Checking if register exist or not if yes render code below ie register page */
          <div className="input-btn"> 

         <div className="fullname">
          <input type="text" placeholder='Fullname' />
         </div>

         <div className="email">
          <input type="email" placeholder='Enter your E-mail Address' />
         </div>

         <div className="regno">
          <input type="number" placeholder='Enter your College Registration Number' />
         </div>

         <div className="dept">
          <input type="text" placeholder='Select your Department' />
         </div>

         <div className="year">
          <input type="number" placeholder='Select your Year of Study' />
         </div>

          <div className="ip1">
            <input type="text" placeholder='Username'/>
          </div>
          
          <div className="ip2">
            <input type="password" placeholder='Password'/>
          </div> 
          
          <div className="logbtn d-flex justify-content-center ">
          <button className=' d-flex gap-3 align-items-center px-4  border-0 fw-semibold rounded-5'>
                REGISTER
          </button>
          </div>

          <div className="yesorno">
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>

        </div>
        : /* If register not exist render code below ie login page */
        <div className="input-btn">

          <div className="ip1">
            <input type="text" placeholder='Username'/>
          </div>

          <div className="ip2">
            <input type="password" placeholder='Password'/>
          </div> 
          
          <div className="logbtn d-flex justify-content-center ">
            <button className=' d-flex gap-3 align-items-center px-4  border-0 fw-semibold rounded-5'>
                  LOGIN
            </button>
          </div>

          <div className="yesorno">
            <p>Don't have an account? <Link to='/register'>SignUp</Link></p>
          </div>

        </div>
        }
        <div className="noaccount"></div>
      </div>
  
    </div>
  )
}

export default Login