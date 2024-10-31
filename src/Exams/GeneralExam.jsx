import React, { useEffect, useState } from 'react'
import './generalexam.css'
import { addResultsAPI, getGeneralExamAPI } from '../services/allAPI'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';


function GeneralExam() {

    const passedData = useLocation().state?.data[0]
    const section_name = passedData.section_name
    const category = passedData.category

    const [examQns, setExamQns] = useState([])
    const [userAnswers, setUserAnswers] = useState({})
    const [examResult, setExamResult] = useState(null)
    //state for holding token
    const [token, setToken] = useState("")

    //for obtaining token when page loads
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }
    },[])

    const navigate = useNavigate()
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        navigate('/home')
        sessionStorage.removeItem('examCompleted')
    }

    const handleShow = () => setShow(true);

    //checking whether exam completed or not
    useEffect(()=>{
        if(sessionStorage.getItem('examCompleted')){
            handleShow()
        }
    },[])
    
    
    const getGeneralExam = async() =>{
        try {
            const result = await getGeneralExamAPI(section_name,category);
            // console.log(result);
            setExamQns(result.data)
        } catch (error) {
            console.log(`Failed to load questions due to: ${error}`);
            
        }
    }

    const handleAnswers = (qId, selectedOption)=>{
        setUserAnswers(prevAnswers =>({
            ...prevAnswers,
            [qId]:selectedOption
        }))
    }

    //function for adding results into database
    const handleResults = async() =>{
        const {score, percentage, passed} = examResult
        
        if(token){
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            try {
                const result = await addResultsAPI(examResult,reqHeader)
            } catch (error) {
                console.log(`Request failed due to ${error}`);
                
            }
        }
    }
    
    const handleSubmit =()=>{
        let score = 0;

        examQns.forEach((question)=>{
            const userAnswer = userAnswers[question._id]
            if(userAnswer && userAnswer === question.answer){
                score += 1
            }
        });

        const totalQuestions = examQns.length;
        const percentage = (score / totalQuestions) * 100;
        const passed = percentage >= 65;

        const result = {score, percentage, passed}
        setExamResult(result);

        //clearing all the selected options
        setUserAnswers({})

        //setting exam status before showing results
        sessionStorage.setItem('examCompleted','true')

        //navigate to results page
        navigate('/examresults', {state:{results:result}})

        //open modal for showing results
        // handleShow()
    }

    const goHome = () =>{
        navigate('/home')
        sessionStorage.removeItem('examCompleted')
    }

    
    useEffect(()=>{
        getGeneralExam()
    },[])

  
  return (
    <>
        <div className="examPage container py-5">
            <div className="exmHead ">
                <div className="exmName">
                    <h1>{passedData.routeName} Exam</h1>
                </div>
                <div className="exmDetails d-flex justify-content-between">
                    <div className="totQns">
                        <h3>10 Questions</h3>
                    </div>
                    <div className="passMarks">
                        <h4>Pass Marks: 65%</h4>
                    </div>
                    <div className="timeRemaining">
                        <h3>Time remaining: 10.00</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="exmbody">
                {
                    examQns?.length>0?
                    examQns.map((item,index)=>(
                        <div className="totQstn my-5">
                    <div className="qstn d-flex gap-2">
                        <span>{index+1}:</span>
                        <p>{item.question}</p>
                    </div>
                    <div className="options">

                        <div className="option d-flex align-items-center">
                            <input type="radio"
                                name={`answer-${index}`}
                                id={`optionA-${index}`}
                                className="radio-input"
                                onChange={() => handleAnswers(item._id,item.option_a)}
                            />
                            <label htmlFor={`optionA-${index}`} className="option-label">
                                <span className="circle">A</span> {item.option_a}
                            </label>
                        </div>

                        <div className="option d-flex align-items-center">
                            <input type="radio"
                                name={`answer-${index}`}
                                id={`optionB-${index}`}
                                className="radio-input"
                                onChange={() => handleAnswers(item._id,item.option_b)}
                            />
                            <label htmlFor={`optionB-${index}`} className="option-label">
                                <span className="circle">B</span> {item.option_b}
                            </label>
                        </div>

                        <div className="option d-flex align-items-center">
                            <input type="radio"
                                name={`answer-${index}`}
                                id={`optionC-${index}`}
                                className="radio-input"
                                onChange={() => handleAnswers(item._id,item.option_c)}
                            />
                            <label htmlFor={`optionC-${index}`} className="option-label">
                                <span className="circle">C</span> {item.option_c}
                            </label>
                        </div>

                        <div className="option d-flex align-items-center">
                            <input type="radio"
                                name={`answer-${index}`}
                                id={`optionD-${index}`}
                                className="radio-input"
                                onChange={() => handleAnswers(item._id,item.option_d)}
                            />
                            <label htmlFor={`optionD-${index}`} className="option-label">
                                <span className="circle">D</span> {item.option_d}
                            </label>
                        </div>

                    </div>
                </div>
                    )):
                    (<h1 className='text-danger'>Sorry! There is no questions added yet. Visit again later.</h1>)    
                    }
            </div>
            {
                examQns.length>0 &&
                (
                    <div>
                        <hr />
                        <div>
                            <button className='bg-success border-0 py-2 px-3'  onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                )
            }
        </div>

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Notice!</Modal.Title>
        </Modal.Header>
        <div className='d-flex '> 
          <Modal.Body>
           <h4>Your current exam session is over. Please go back to<Link to={'/home'} onClick={goHome} className='border-0 py-1 px-2 rounded-4 text-white '>Home</Link></h4> 
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}

export default GeneralExam