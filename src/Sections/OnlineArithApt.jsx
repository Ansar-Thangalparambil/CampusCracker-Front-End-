import React from 'react'
import pot from '../assets/pot.jpg'
import proloss from '../assets/proloss.jpg'
import { Link } from 'react-router-dom'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OnlineArithApt() {
    // For Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='container mt-5'>
      {/* pot card (stretched link) */}
      <div className="pot mb-5">

        <div class="d-flex position-relative">
          <img className='' style={{borderRadius:'15px'}} width={125} src={pot} class="flex-shrink-0 me-3" alt="..."/>
          <div>
            <h5 class="mt-0">Time And Works</h5>
            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <div>
            {/* <button onClick={handleShow} className='btn-info border-0 rounded-5 px-3 py-2 fw-semibold '>nn</button> */}
            <Link onClick={handleShow} to={''} class="stretched-link">Go to test.</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="proloss">

      <div class="d-flex position-relative">
          <img className='' style={{borderRadius:'15px'}} width={125} src={proloss} class="flex-shrink-0 me-3" alt="..."/>
          <div>
            <h5 class="mt-0">Height And Distance</h5>
            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <Link to={''}>Go somewhere</Link>
          </div>
        </div>

      </div>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton >
          <Modal.Title>Time and Works</Modal.Title>
        </Modal.Header>
        <div className=''> 
          <Modal.Body>
           <p>This Test consist of 10 Questions</p>
           <p>You need to secure 65% or more to pass this test.</p>
           <p>Test duration will be 10 minutes.</p>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center'>
            <Link to={'/exmtimeworks'}><Button className='rounded-4'>Start Your Test</Button></Link>
          </Modal.Footer>
        </div>
      </Modal>

    </div>
  )
}

export default OnlineArithApt