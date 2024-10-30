import React, { useEffect, useState } from 'react'
import './generalexam.css'
import { getGeneralExamAPI } from '../services/allAPI'
import { useLocation } from 'react-router-dom'


function GeneralExam() {

    const passedData = useLocation().state?.data[0]
    console.log(passedData);
    
    const section_name = passedData.section_name
    const category = passedData.category
    
    

    const [examQns, setExamQns] = useState([])

    console.log(examQns);
    

    const getGeneralExam = async() =>{
        try {
            const result = await getGeneralExamAPI(section_name,category);
            console.log(result);
            setExamQns(result.data)
        } catch (error) {
            console.log(`Failed to load questions due to: ${error}`);
            
        }
    }

    useEffect(()=>{
        getGeneralExam()
    },[])

  return (
    <>
        <div className="examPage container">
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
                            <input type="radio" name="answer" id="optionA" className="radio-input" />
                            <label htmlFor="optionA" className="option-label">
                                <span className="circle">A</span> {item.option_a}
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionB" className="radio-input" />
                            <label htmlFor="optionB" className="option-label">
                                <span className="circle">B</span> {item.option_b}
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionC" className="radio-input" />
                            <label htmlFor="optionC" className="option-label">
                                <span className="circle">C</span> {item.option_c}
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionD" className="radio-input" />
                            <label htmlFor="optionD" className="option-label">
                                <span className="circle">D</span> {item.option_d}
                            </label>
                        </div>
                    </div>
                </div>
                    )):
                    (<h1 className='text-danger'>Sorry! There is no questions added yet. Visit again later.</h1>)    
                    }
            </div>
        </div>
    </>
  )
}

export default GeneralExam