import React from 'react'
import Title from '../components/Title'
import './Loginpage.css'
import { Link } from 'react-router-dom'
import Register from './Register'
function Login({register}) { /* data passed for register */

  const regForm = register?true:false /* Assigned a constant variable True if reg present false if not present */

  return (
    <div className='total d-flex justify-content-center flex-column align-items-center'>
      <div className='box px-5 py-4 col-md-4'>
        <div className="headttl mb-3">
          <Title/>
        </div >
        {regForm? /* Checking if register exist or not if yes render code below ie register page */
          <div className="input-btn "> 

         <Register/>

        </div>
        : /* If register not exist render code below ie login page */
        <div className="input-btn gap-3 d-flex flex-column">

          <div className="ip-fields">
            <input type="text" placeholder='Username'/>
          </div>

          <div className="ip-fields">
            <input type="password" placeholder='Password'/>
          </div> 
          
          <div className="logbtn">
            <button className='rounded-5 d-flex justify-content-center fw-semibold py-2 w-100'>
                  LOGIN
            </button>
          </div>

          <div className="yesorno d-flex justify-content-center">
            <p>Don't have an account? <Link to='/register'>SignUp</Link></p>
          </div>

        </div>
        }
      </div>
  
    </div>
  )
}

export default Login