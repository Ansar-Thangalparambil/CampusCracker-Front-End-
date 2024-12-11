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
        centered className='content-modal'>

          <Modal.Header closeButton>
            <Modal.Title>Online Tests</Modal.Title>
          </Modal.Header>

            <Modal.Body>

              <div className='modal-menu'>
                <span>Aptitude Test</span>

                <Link to={'/arithtest'}>
                  <Button>Try now!</Button>
                </Link>
              </div>

              <div className='modal-menu'>
                <span>Verbal Ability Test</span>

                <Link to={'/vbabtytest'}>
                  <Button>Try now!</Button>
                </Link>
              </div>

              <div className='modal-menu'>
                <span>Logical Reasoning Test</span>

                <Link to={'/logirsngtest'}>
                  <Button>Try now!</Button>
                </Link>
              </div>

            </Modal.Body>

      </Modal>
        
    </>
  )
}

export default OnlineTests