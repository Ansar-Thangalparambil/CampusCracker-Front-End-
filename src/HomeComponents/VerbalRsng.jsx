import React from 'react'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import vbImg from '../assets/boygirl-questionmark.png'

function VerbalRsng() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>

      <div className='col-md-6'>

        <div className="content-box">

          <div className="box-image">
            <img src={vbImg} alt="" />
          </div>

          <div className="all-content">

            <div>
              <div className="content-title">
                <span>Verbal Reasoning</span>
              </div>
  
              <div className="content-info">
                <p className="m-0">
                The Verbal Reasoning section of CampusCracker is designed to enhance students' language proficiency and communication skills, crucial for success in campus placements and competitive exams.
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
          <Modal.Title>Verbal Reasoning</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <div className='modal-menu'>
            <span>Verbal Ability</span>

            <Link to={'/verbalability'}>
              <Button>Try now!</Button>
            </Link>
          </div>

          <div className='modal-menu'>
            <span>Logical Reasoning</span>

            <Link to={'/logicalreasoning'}>
              <Button>Try now!</Button>
            </Link>
          </div>

          <div className='modal-menu'>
            <span>Verbal Reasoning</span>

            <Link to={'/vbrsng'}>
              <Button>Try now!</Button>
            </Link>
          </div>
          
          <div className='modal-menu'>
            <span>Non Verbal Reasoning</span>

            <Link to={'/nonvbrsng'}>
              <Button>Try now!</Button>
            </Link>
          </div>

        </Modal.Body>
        
      </Modal>
        
    </>
  )
}

export default VerbalRsng