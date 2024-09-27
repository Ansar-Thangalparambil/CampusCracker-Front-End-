import React from 'react'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function GeneralApt() {

 // For Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/* Modal */}
    <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>General Aptitude</Modal.Title>
        </Modal.Header>
        <div className='d-flex '> 
          <Modal.Body>
           <div className='d-flex justify-content-evenly mb-3'>
              Arithmetic Aptitude
              <Link to={'/arithmetic'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>
           <div className='d-flex justify-content-evenly mb-3'>
              Online Aptitude Test
              <Link to={'/arithtest'}><Button className='rounded-5' variant="primary" >Try now!</Button></Link>
           </div>

          </Modal.Body>
        </div>
      </Modal>
        <div>
            <button onClick={handleShow} className='btn-info border-0 rounded-5 px-3 py-2 fw-semibold '>Show more...</button>
        </div>
    </>
  )
}

export default GeneralApt