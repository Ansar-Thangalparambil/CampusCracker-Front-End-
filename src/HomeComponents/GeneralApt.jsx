import React from 'react'
import pot from '../assets/pot.png'
import pal from '../assets/profit-loss.png'
import taw from '../assets/time-works.png'
import had from '../assets/height-distance.png'
import poa from '../assets/poa.png'

import gaImg from '../assets/boy-questionmark.png'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

// import OnlineArithApt from '../Sections/OnlineArithApt';



function GeneralApt() {

 // For Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const datas = [
    {
      imgSrc:pot,
      route:'/generalqns',
      routeName:'Problems on Train',
      formulaRoute:'/potformulas',
      formulaName:'Problems on Train - Formulas',
      section_name:'Arithmetic_aptitude',
      category:'PoT'
    },
    {
      imgSrc:pal,
      route:'/generalqns',
      routeName:'Profit and Loss',
      section_name:'Arithmetic_aptitude',
      category:'ProfitLoss'
    },
    {
      imgSrc:poa,
      route:'/generalqns',
      routeName:'Problems on Ages',
      section_name:'Arithmetic_aptitude',
      category:'ProblemsAges'
    },
    {
      imgSrc:taw,
      route:'/generalqns',
      routeName:'Time and works',
      section_name:'Arithmetic_aptitude',
      category:'TimeWorks'
    },
    {
      imgSrc:had,
      route:'/generalqns',
      routeName:'Height and Distance',
      section_name:'Arithmetic_aptitude',
      category:'HeightDistance'
    }                
]
  

  return (
    <>

      <div className='col-md-7'>

        <div className="content-box">

          <div className="box-image">
            <img src={gaImg} alt="" />
          </div>

          <div className="all-content">

            <div>
              <div className="content-title">
                <span>General Aptitude</span>
              </div>
  
              <div className="content-info">
                <p className="m-0">
                  The General Aptitude section of CampusCracker is a dynamic and interactive learning platform designed to sharpen students' problem-solving and analytical skills.
                </p>
              </div>
            </div>

            <div className="showmore">
              <button onClick={handleShow}>
                Show more
                <i class="fa-solid fa-arrow-right fs-4"></i>
              </button>
            </div>
            
          </div>

        </div>

      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered className='content-modal'>

          <Modal.Header closeButton>
            <Modal.Title>General Aptitude</Modal.Title>
          </Modal.Header>

            <Modal.Body>

              <div className='modal-menu'>
                <span>Arithmetic Aptitude</span>

                <Link to={'/arithmetic'} state={{data:datas,mode:'/subtopicshome'}} className='path-link'>
                  <Button>Try now!</Button>
                </Link>

              </div>

              <div className='modal-menu'>
                <span>Online Aptitude Test</span>

                <Link to={'/arithmetic'} state={{data:datas,mode:'/generalexam'}} className='path-link'>
                  <Button>Try now!</Button>
                </Link>

              </div>

            </Modal.Body>

      </Modal>
      
    </>
  )
}

export default GeneralApt