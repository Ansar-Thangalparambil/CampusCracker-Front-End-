import React from 'react'
import './timeandworks.css'


function TimeAndWorks() {
  
  return (
    <>
        <div className="examPage container">
            <div className="exmHead ">
                <div className="exmName">
                    <h1>Time and Works</h1>
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
                <div className="totQstn">
                    <div className="qstn d-flex gap-2">
                        <span>1:</span>
                        <p>What is the agakgj;ag of jkjjfhj in jdjkdnjk?</p>
                    </div>
                    <div className="options">
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionA" className="radio-input" />
                            <label htmlFor="optionA" className="option-label">
                                <span className="circle">A</span> 16
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionB" className="radio-input" />
                            <label htmlFor="optionB" className="option-label">
                                <span className="circle">B</span> 128
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionC" className="radio-input" />
                            <label htmlFor="optionC" className="option-label">
                                <span className="circle">C</span> 240
                            </label>
                        </div>
                        <div className="option d-flex align-items-center">
                            <input type="radio" name="answer" id="optionD" className="radio-input" />
                            <label htmlFor="optionD" className="option-label">
                                <span className="circle">D</span> 512
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TimeAndWorks