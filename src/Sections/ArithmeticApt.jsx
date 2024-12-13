import React, { useEffect, useState } from 'react'
// import pot from '../assets/pot.jpg'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import './Css/SectionHome.css'
import Footer from '../components/Footer';

function ArithmeticApt() {

  const passedData = useLocation().state?.data
  console.log(passedData);
  
  const mode = useLocation().state?.mode
  console.log(mode);

  const [selectedMode, setSelectedMode] =  useState('')
  
  const handleMode =()=>{
    if(mode === '/subtopicshome'){
      setSelectedMode('Practise')
    } else{
      setSelectedMode('Start test')
    }
  }

  useEffect(()=>{
    handleMode()
  })

  return (
    <>

      <Header/>

      {/* pot card (stretched link) */}
      <div className="pot row g-4 mt-1">

        {passedData?.length>0?
          passedData.map((item)=>(

          <div className='col-md-6'>

            <div class="section-card" >
  
              <div className='section-image'>
                <img src={item.imgSrc}  alt="..."/>
              </div>
  
              <div className='section-details'>

                <div className='section-name'>
                  <span>{item.routeName}</span>
                </div>

                <div className='section-info'>
                  <span>
                    This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.
                  </span>
                </div>
  
                <div className='practice'>

                  <Link to={mode} state={{data:[
                  {
                    section_name:item.section_name,
                    category:item.category,
                    routeName:item.routeName,
                    route:item.route,
                    formulaName:item.formulaName,
                    formulaRoute:item.formulaRoute
                  }
                  ]}}>
                    <button>
                      {selectedMode}
                      <i class="fa-solid fa-arrow-right "></i>
                    </button>
                  </Link>

                </div>
  
              </div>
              
            </div>

          </div>

        ))
        :
        (<p>Nothing to display!</p>)

      }

      </div>

      <Footer/>

    </>
  )
}

export default ArithmeticApt