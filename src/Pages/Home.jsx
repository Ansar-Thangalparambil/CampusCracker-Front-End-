import React from 'react'

import './Css/Home.css'
import '../HomeComponents/Css/modal.css'

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

          <div className="col-md-1"></div>

          {/* General Aptitude */}
          <GeneralApt/>

        </div>

        {/* Bottom row */}
        <div className="row">

          {/* Verbal Reasoning */}
          <VerbalRsng/>

          {/* Online tests */}
          <OnlineTests/>


        </div>


        

        
        

      </main>

      <Footer/>
    </div>
  )
}

export default Home