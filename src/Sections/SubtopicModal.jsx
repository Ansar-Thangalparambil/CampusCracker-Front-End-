import React, { useEffect } from 'react'
// Modal imports
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function SubtopicModal({state}) {

// Here, passed data from ArithmeticApt.jsx as child as the SubtopicModal.jsx instead of passing data through Link as state.
// Inorder to do get the data here in the SubtopicModal.jsx pass the key as argument inside the function component.
// Still we can only access the complete object as a whole not each values inside the state. so, we need to wrap the key inside a '{ }' , ie: {state}, inside the function component

console.log(state);

const mode = state.mode
console.log(mode);

// This function below is for deciding whether the Button says 'Practice' questions or 'Start test' exams.
// The respective data comes from ArithmeticApt.jsx

const [selectedMode, setSelectedMode] =  useState('')

const [examMode,setExamMode] = useState(false)

 const handleMode =()=>{
     if(mode === '/subtopicshome'){
       setSelectedMode('Practise')

       
     } else if(mode === '/generalexam'){
       setSelectedMode('Start test')
       setExamMode(true)
     }
   }
   // Calling the function created above when the pageloads. 
   useEffect(()=>{
     handleMode()
   })

// For Modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>

        <div className='practice'>
        
            <button onClick={handleShow}>
                {selectedMode}
                <i class="fa-solid fa-arrow-right "></i>
            </button>
            
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered className='content-modal'>

            <Modal.Header closeButton>
            <Modal.Title>{state.routeName}</Modal.Title>
            </Modal.Header>

            {/* Conditional rendering modal */}
            {!examMode?

            // Practice modal
            <Modal.Body>

                <div className='modal-menu'>
                    <span>{state.routeName}</span>

                    <Link to={state.route} state={{data:{
                        section_name:state.section_name,
                        category:state.category,
                        routeName:state.routeName
                    }}}  
                    className='path-link'>
                        <Button>Practice</Button>
                    </Link>

                </div>

                <div className='modal-menu'>
                    <span>{state.formulaName}</span>

                    <Link to={state.formulaRoute}  className='path-link'>
                        <Button>View</Button>
                    </Link>

                </div>

            </Modal.Body>
            :

            // Exam modal
            <Modal.Body>

                <div className='modal-menu'>

                    <span>Number of questions:</span>

                    <span className='examdata'>10</span>

                </div>

                <div className='modal-menu'>

                    <span>Pass marks:</span>

                    <span className='examdata'>65%</span>

                </div>

                <div className='modal-menu'>

                    <span>Time for completing the test:</span>

                    <span className='examdata'>10 minutes</span>

                </div>

                <div className='start-test'>

                    <Link to={state.mode} state={{data:{
                        section_name:state.section_name,
                        category:state.category,
                        routeName:state.routeName
                    }}}
                    className='path-link'>
                        <Button>Start test!</Button>
                        
                    </Link>

                </div>

            </Modal.Body>
            }

        </Modal>
    </>
  )
}

export default SubtopicModal