import React from 'react'
// Import modals
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import otImg from '../assets/girl-test.png'

function OnlineTests() {
  // For modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className='col-md-6'>

        <div className="content-box">

          <div className="box-image">
            <img src={otImg} alt="" />
          </div>

          <div className="all-content">

            <div>
              <div className="content-title">
                <span>online Tests</span>
              </div>
  
              <div className="content-info">
                <p className="m-0">
                The Online Test section of CampusCracker offers a seamless and comprehensive platform for students to take timed assessments, mimicking real-world placement exams and competitive tests.
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
        centered>
          <Modal.Header closeButton>
            <Modal.Title>General Aptitude</Modal.Title>
          </Modal.Header>
          <div className='d-flex '> 
            <Modal.Body>
            <div className='d-flex justify-content-evenly mb-3'>
                Aptitude Test
                <Link to={'/arithtest'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
            </div>
            <div className='d-flex justify-content-evenly mb-3'>
                Verbal Ability Test
                <Link to={'/vbabtytest'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
            </div>
            <div className='d-flex justify-content-evenly mb-3'>
                Logical Reasoning Test
                <Link to={'/logirsngtest'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
            </div>
            </Modal.Body>
          </div>
      </Modal>
        
    </>
  )
}

export default OnlineTests