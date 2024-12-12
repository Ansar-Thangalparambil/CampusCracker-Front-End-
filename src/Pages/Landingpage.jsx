import React from 'react'
import { Link } from 'react-router-dom'
import learning from '../assets/learning-hd.png'
import './Css/Landingpage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Landingpage() {
  return (
    <div className=''> 
    <Header/>
      <main className=" gap-5 d-flex align-items-center mb-3 px-5" >
        <div className="img">
          <img src={learning} alt="" height={'455px'} />
        </div>
        <div className="desc-btn ">
          <p style={{fontSize:"25px",textAlign:'justify',width:'100%'}} className=''>CampusCracker is an innovative and comprehensive platform designed to revolutionize the way students prepare for campus placements and competitive exams. Tailored specifically for students of MES College of Engineering, Kuttipuram.</p>
         
            <Link to={'/login'} className='linkline d-flex justify-content-start d-inline-flex'>
              <button className=' d-flex gap-3 align-items-center px-4 py-2 border-0 fw-semibold rounded-5 text-center'>
                Let's Crack It! 
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </Link>
         
        </div>
      </main>
      <Footer/>
    </div> 
  )
}

export default Landingpage