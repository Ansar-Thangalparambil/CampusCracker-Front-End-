import React from 'react'
import './Css/Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GeneralApt from '../HomeComponents/GeneralApt'
import VerbalRsng from '../HomeComponents/VerbalRsng'
import OnlineTests from '../HomeComponents/OnlineTests'
import UserPopup from '../components/UserPopup'
import Overview from '../HomeComponents/Overview'



function Home() {

  return (
    <div className=''>
    
      <Header/>

      <UserPopup/>

      <main className="home" >
        
        {/* Top row */}
        <div className="row my-3">

          {/* Overview */}
          <Overview/>

        </div>


        

        

        <div class="p-3 text-dark">
          <h5 class="">General Aptitude</h5>
          <p class="">The General Aptitude section of CampusCracker is a dynamic and interactive learning platform designed to sharpen students' problem-solving and analytical skills.</p>
          {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
          <GeneralApt/>
        </div>

        <div class="p-3 text-dark">
          <h5 class="">Verbal and Reasoning</h5>
          <p class="">The Verbal Ability section of CampusCracker is designed to enhance students' language proficiency and communication skills, crucial for success in campus placements and competitive exams.</p>
          {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
          <VerbalRsng/>
        </div>

        <div class="p-3 text-dark">
          <h5 class="">Onlne Tests</h5>
          <p class="">The Online Test section of CampusCracker offers a seamless and comprehensive platform for students to take timed assessments, mimicking real-world placement exams and competitive tests.</p>
          {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
          <OnlineTests/>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default Home