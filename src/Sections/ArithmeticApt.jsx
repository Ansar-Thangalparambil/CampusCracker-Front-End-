import React, { useEffect, useState } from 'react'
// import pot from '../assets/pot.jpg'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header';
import './Css/SectionHome.css'
import Footer from '../components/Footer';
import SubtopicModal from './SubtopicModal';

function ArithmeticApt() {

  const passedData = useLocation().state?.data
  console.log(passedData);
  
  const mode = useLocation().state?.mode
  console.log(mode);

  // This function below is for deciding whether the page is for 'Practice' questions or 'Start tests' 
  // The respective data comes from GeneralApt.jsx

  // const [selectedMode, setSelectedMode] =  useState('')
  const [pageName,setPageName] = useState('')

  const handleMode =()=>{
    if(mode === '/subtopicshome'){
      // setSelectedMode('Practise')
      setPageName('Arithmetic Aptitude Topics')
    } else{
      // setSelectedMode('Start test')
      setPageName('Aptitude Test Topics')
    }
  }
  // Calling the function created above when the pageloads. 
  useEffect(()=>{
    handleMode()
  })

  // const pageName = 'Arithmetic Aptitude Topics'

  return (
    <>

      <Header pageName={pageName}/>

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
  
                {/* Practice */}
                {/* <div className='practice'>

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

                </div> */}

                <SubtopicModal state={{
                  section_name:item.section_name,
                  category:item.category,
                  routeName:item.routeName,
                  route:item.route,
                  formulaName:item.formulaName,
                  formulaRoute:item.formulaRoute,
                  mode,
                }}/>
  
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