import React from 'react'
import { Link } from 'react-router-dom'
import learning from '../assets/learning-hd.png'
import './Css/Landingpage.css'
// import Header from '../components/Header'
import Footer from '../components/Footer'
import ccLogoBlack from '../assets/ccLogoBlack.png'

function Landingpage() {
  return (
    <div className=''> 
    {/* <Header/> */}
    <div className="title-name text-center pt-2 pb-3">
      <img src={ccLogoBlack} alt="" />
    </div>
    
      <main className="  d-flex flex-column align-items-center mb-3 px-5" >

        <div className="img"> 
          <img src={learning} alt="" height={'300px'} />
        </div>

        <div className="desc-btn gap-2 d-flex flex-column mt-3 text-center align-items-center ">

          <span className=''><b>CampusCracker</b> is an innovative and comprehensive platform designed to revolutionize <br /> the way students prepare for campus placements and competitive exams. Tailored specifically for students of <br /> MES College of Engineering, Kuttipuram.</span>
         
          <div className='d-inline-flex justify-content-center'>
            <Link to={'/login'} className='linkline d-flex justify-content-center '>
              <button className=' d-flex gap-3 align-items-center px-3 py-1 border-0  rounded-5 text-center'>
                Let's Crack It! 
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </Link>
          </div>
         
        </div>

      </main>
      <Footer/>
    </div> 
  )
}

export default Landingpage