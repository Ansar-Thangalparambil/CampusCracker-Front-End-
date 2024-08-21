import React from 'react'
import './Home.css'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="home container my-5 " >

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://images.shiksha.com/mediadata/images/articles/1565072398phpMhDAk7.jpeg"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">General Aptitude</h5>
                    <p class="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <button className='btn-info border-0 rounded-5 px-3 py-2 fw-semibold '>Show more...</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://www.jobtestsuccess.com/wp-content/uploads/2019/11/Inductive-Reasoning-Test-1.jpg"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">Verbal Reasoning</h5>
                    <p class="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <button className='btn-success border-0 rounded-5 px-3 py-2 fw-semibold '>Show more...</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='row mt-5'>
          <div className="col-md-12 d-flex justify-content-center">
            
            <div class="mb-3 w-100 rounded-5 overflow-hidden  shadow" style={{backgroundColor:"white"}}>
              <div class="row g-0">
                <div class="col-md-5 ">
                  <img src="https://elearningindustry.com/wp-content/uploads/2017/12/5-advantages-of-online-mock-tests-1.png"  alt="... " className=' img-fluid'/>
                </div>
                <div class="col-md-7 text-start d-flex justify-content-center flex-column">
                  <div class="p-3 text-dark">
                    <h5 class="">Onlne Tests</h5>
                    <p class="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    {/* <p class="card-text"><small class="">Last updated 3 mins ago</small></p> */}
                    <button className='btn-dark text-light border-0 rounded-5 px-3 py-2 fw-semibold '>Show more...</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Home