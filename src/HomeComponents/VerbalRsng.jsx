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
      centered>
        <Modal.Header closeButton>
          <Modal.Title>General Aptitude</Modal.Title>
        </Modal.Header>
        <div className='d-flex '> 
          <Modal.Body>
           <div className='d-flex justify-content-evenly mb-3'>
              Verbal Ability
              <Link to={'/verbalability'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>
           <div className='d-flex justify-content-evenly mb-3'>
              Logical Reasoning
              <Link to={'/logicalreasoning'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>
           <div className='d-flex justify-content-evenly mb-3'>
              Verbal Reasoning
              <Link to={'/vbrsng'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>
           <div className='d-flex justify-content-evenly mb-3'>
              Non Verbal Reasoning
              <Link to={'/nonvbrsng'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>

          </Modal.Body>
        </div>
      </Modal>
        
    </>
  )
}

export default VerbalRsng