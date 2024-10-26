import React, { useState } from 'react'
import './Header.css';
import Title from './Title';

function Header() {
  const [darkMode,setDarkMode] = useState(false)

  // const isModeOn = darkMode?true:false

  const darkModeOn = ()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div className='header p-3 row'>

      <div className="col-md-3"></div>

      <div className='col-md-6'><Title/></div>

      <div className="head-controls  col-md-3 d-flex justify-content-around align-items-center">
        {/* <div onClick={darkModeOn} className="colormodes d-flex align-items-center gap-3 border border-dark py-2 pe-2 rounded-5 bg-light">

          {darkMode?
          <>
            <div className='p-2 px-3 rounded-5 bg-white position-absolute'>
              <i class="fa-solid fa-moon fs-4"></i>
            </div>
            
            <div className='ms-5'>
              <i class="fa-solid fa-sun fs-4"></i>
            </div>
          </>
            :
          <>
            <div className='p-2 px-3 rounded-5 bg-white position-absolute'>
              <i class="fa-solid fa-sun fs-4"></i>
            </div>
            
            <div className='ms-5'>
              <i class="fa-solid fa-moon fs-4"></i>
            </div>
          </>
          }
          
        </div> */}
        <div className="user border border-dark p-2 px-3 bg-light rounded-5 ms-auto me-2 d-flex gap-2">
          <i class="fa-solid fa-user fs-4"></i>
          <i class="fa-solid fa-ellipsis-vertical fs-4"></i>
        </div>
      </div>

    </div>
  )
}

export default Header
