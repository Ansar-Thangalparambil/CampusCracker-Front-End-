import React, { useEffect, useState } from 'react'
import './generalexam.css'
import { addResultsAPI, getGeneralExamAPI } from '../services/allAPI'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';


function GeneralExam() {

    const passedData = useLocation().state?.data[0]
    console.log(passedData);
    
    const section_name = passedData.section_name
    const category = passedData.category

    const [examQns, setExamQns] = useState([])
    
    const [userAnswers, setUserAnswers] = useState({})

    //state for holding token
    const [token, setToken] = useState("")

     // Timer state
     const [timeRemaining, setTimeRemaining] = useState(10 * 60); // 10 minutes in seconds

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

    // Timer countdown logic
    // useEffect(() => {
    //     if (timeRemaining <= 0) {
    //         handleSubmit(); // Automatically submit when time runs out
    //         return;
    //     }
    //     const timer = setInterval(() => {
    //         setTimeRemaining((prev) => prev - 1);
    //     }, 1000);
        
    //     return () => clearInterval(timer); // Clean up timer on component unmount
    // }, [timeRemaining]);

    // Convert seconds to minutes and seconds for display
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    
    
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
    const handleResults = async(result) =>{
        
        if(token){
            const reqBody={
                examResult:{
                    score:result.score,
                    percentage:result.percentage,
                    passed:result.passed
                },
                category,
            }
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }

            try {
                const result = await addResultsAPI(reqBody,reqHeader)
                if(result.status === 200){
                    console.log(result.data);
                    alert('Your result saved successfully.')
                    
                }else{
                    alert(result.response.data)
                }
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
        let percentage = (score / totalQuestions) * 100;
        if(percentage%10 !== 0){
            percentage = ((score/totalQuestions)*100).toFixed(2)
        }
        const passed = percentage >= 65;

        const result = {score, percentage, passed}
        
        //clearing all the selected options
        setUserAnswers({})

        //setting exam status before showing results
        sessionStorage.setItem('examCompleted','true')

        //calling handleResults function for saving results after clicking submit
        handleResults(result)

        //navigate to results page
        navigate('/examresults', {state:{data:{results:result,outOf:examQns.length}}})

        
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
        <div className="examPage d-flex flex-column gap-3 pb-4">

            <Link to={'/home'} className="back-btn d-inline-flex">
                <button className='d-flex align-items-center gap-3 py-1 ps-2 pe-2'>
                    <i class="fa-solid fa-arrow-right "></i>
                    <span>Home</span>
                </button>
            </Link>

            {/* Exam head */}
            <div className="examHead row">

                <div className='col-md-6 d-flex align-items-center'>

                    <div className="examName">
                        <span>{passedData.routeName} Exam</span>
                    </div>

                </div>

               <div className='col-md-6 '>

                    <div className="exmDetails d-flex justify-content-between align-items-center">
    
                        <div className='tot-pass d-flex flex-column gap-3'>

                            <div className="totQns">
                                <span><span className='fw-semibold'>{examQns.length}</span> Questions</span>
                            </div>
        
                            <div className="passMarks">
                                <span>Pass Marks:<span className='fw-semibold'> 65%</span></span>
                            </div>

                        </div>
    
                        <div className="timeRemaining d-flex flex-column justify-content-center align-items-center ">
                            <span className='time-rem  text-center'>Time<br />Remaining</span>
                            <span className='time-num mb-2'>{formatTime(timeRemaining)}</span>
                        </div>
    
                    </div>

               </div>

            </div>

            {/* Exam body */}
            <div className='exambody row'>
                <div className="col-12">
    
                    {
                        examQns?.length>0?
                        examQns.map((item,index)=>(
    
                        <div className="totQstn pt-3">
    
                            <div className="qstn d-flex gap-2">
                                <span>
                                    {index+1}:
                                </span>
                                
                                <p>
                                    {item.question}
                                </p>
                            </div>
                            
                            {/* Options */}
                            <div className="options pb-3 d-flex ">
    
                                <div className='leftside'>

                                    <div className="option d-flex align-items-center">
    
                                        <input type="radio"
                                            name={`answer-${index}`}
                                            id={`optionA-${index}`}
                                            className="radio-input"
                                            onChange={() => handleAnswers(item._id,item.option_a)}
                                        />
    
                                        <label htmlFor={`optionA-${index}`} className="option-label d-flex gap-1">
                                            <span className="circle">A</span> {item.option_a}
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
                                </div>
    
                                <div className='rightside'>

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

                            <hr />

                        </div>
                    
                        ))
                        :
                        (<h1 className='text-danger'>Sorry! There is no questions added yet. Visit again later.</h1>)    
                    }

                    
                    {
                        examQns.length>0 &&(
                                    
                        <div>
                            <button className='submit-btn py-2 px-3 fw-semibold'  onClick={handleSubmit}>Submit</button>
                        </div>
                    )}
    
                </div>

            </div>

        </div>

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Notice!</Modal.Title>
            </Modal.Header>
            <div className='d-flex '> 
                <Modal.Body>
                    <span>
                        Your last exam session was over. Please go back to<Link to={'/home'} onClick={goHome} className='border-0 py-1 px-2 rounded-4 text-white '>Home</Link>
                    </span> 
                </Modal.Body>
            </div>
        </Modal>
    </>
  )
}

export default GeneralExam