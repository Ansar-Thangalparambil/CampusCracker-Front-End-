import React, { useEffect } from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../Exams/generalexam.css'
import { Link, useLocation } from 'react-router-dom';
import { getGeneralQuestionAPI } from '../services/allAPI';
import ccLogoBlack from '../assets/ccLogoBlack.png'

function GeneralQns() {

    const passedData = useLocation().state?.data
    // console.log(passedData);
    
    const section_name = passedData.section_name
    const category = passedData.category

    const [openIndexes, setOpenIndexes] = useState([])
    const [generalQuestions, setGeneralQuestions] = useState([])
    
    const getArithQuestions = async()=>{
        try {
          const result = await getGeneralQuestionAPI(section_name,category);
          console.log(result.data);
          
          if(result && result.data && Array.isArray(result.data)){
            setGeneralQuestions(result.data);
          }else{
            console.log('No questions found!');  
          }
        } catch (error) {
          console.error('Error fetching Arithmetic aptitude questions:', error);
        }
      };
    
      useEffect(()=>{
        getArithQuestions();
      });
    
    //  const [collapseOn,setCollapseOn] = useState(false) 

     const toggleOpen = (index)=>{
        setOpenIndexes((prev)=>
          prev.includes(index) ? prev.filter((i)=>i !== index):[...prev, index]
        );

        // setCollapseOn(!collapseOn)

      };
    
      const [selectedAnswers, setSelectedAnswers] = useState({});
    
      const handleOption = (questionId, selectedOption) => {
        const question = generalQuestions.find((q) => q._id === questionId);
        const isCorrect = selectedOption === question.answer;
        setSelectedAnswers((prev) => ({
          ...prev,
          [questionId]: { selected: selectedOption, isCorrect },
        }));
      };
    

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
                    <span>{passedData.routeName}</span>
                </div>

            </div>

            <div className='col-md-6 '>

                <div className="exmDetails d-flex justify-content-end align-items-center">

                    <div className='tot-pass d-flex flex-column gap-3'>
                        <img src={ccLogoBlack} alt="" />
                    </div>

                </div>

            </div>

        </div>

        {/* Exam body */}
        <div className='exambody row'>
          <div className='col-12'>
            {generalQuestions?.length > 0? (
            generalQuestions?.map((item,index)=>(
    
            <div className="totQstn pt-3" key={index}>
    
              <div className="qstn d-flex gap-2">
                <span>
                  {index+1}:
                </span>
    
                <p>
                  {item.question}
                </p>
              </div>
    
               <div className="options pb-4 d-flex">

                  <div className="leftside">

                    <div className="option d-flex align-items-center">

                      <div className={`option-label gap-1 d-flex ${
                        selectedAnswers[item._id]?.selected === item[`option_a`]?
                        selectedAnswers[item._id].isCorrect?'correct':'incorrect':''
                      }`} onClick={() => handleOption(item._id, item[`option_a`])}>

                        <span className='circle'>A</span>
                        {item['option_a']}

                      </div>

                    </div>

                    <div className="option d-flex align-items-center">

                      <div className={`option-label gap-1 d-flex ${
                        selectedAnswers[item._id]?.selected === item[`option_c`]?
                        selectedAnswers[item._id].isCorrect?'correct':'incorrect':''
                      }`} onClick={() => handleOption(item._id, item[`option_c`])}>

                        <span className='circle'>C</span>
                        {item['option_c']}

                      </div>

                    </div>

                  </div>

                  <div className="rightside">

                    <div className="option d-flex align-items-center">

                      <div className={`option-label gap-1 d-flex ${
                        selectedAnswers[item._id]?.selected === item[`option_b`]?
                        selectedAnswers[item._id].isCorrect?'correct':'incorrect':''
                      }`} onClick={() => handleOption(item._id, item[`option_b`])}>

                        <span className='circle'>B</span>
                        {item['option_b']}

                      </div>

                    </div>

                    <div className="option d-flex align-items-center">

                      <div className={`option-label gap-1 d-flex ${
                        selectedAnswers[item._id]?.selected === item[`option_d`]?
                        selectedAnswers[item._id].isCorrect?'correct':'incorrect':''
                      }`} onClick={() => handleOption(item._id, item[`option_d`])}>

                        <span className='circle'>D</span>
                        {item['option_d']}

                      </div>

                    </div>

                  </div>

               </div>
    
              {/* Solution */}
              <div className={`pb-2 ${openIndexes.includes(index)?'working':'ansandexplnsn'}`}>
              
                <button className='d-flex align-items-center gap-1' onClick={() => toggleOpen(index)} aria-controls={`example-collapse-text-${index}`} aria-expanded={openIndexes.includes(index)}>

                  Solution
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"/><path d="M14 10c-.613.643-1.289 1-2 1s-1.387-.357-2-1m-2.617 7.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19m3-3.5V11"/></g></svg>

                </button>
    
                <div className='solution-box'>

                  <Collapse in={openIndexes.includes(index)}  enter={false} exit={false}>
                    <div id={`example-collapse-text-${index}`}>
    
                      <div className='sol-answer'>
                        <span>
                          {item.answer}
                        </span>
                      </div>
    
                      <div className='sol-explanation'>
                        <span>
                          {item.explanation}
                        </span>
                      </div>
    
                    </div>
                  </Collapse>

                </div>
            
              </div>
              
              <hr />
    
            </div> 
              ))
            )
              :
              (<div>
                <p>No questions available for {passedData.routeName}</p>
              </div>)
              }
          </div>
        </div>

      </div>
    </>
  )
}

export default GeneralQns


/* Options */
/* <div className="options pb-3 d-flex ">
    {['a', 'b', 'c', 'd'].map((opt) => (
      <div
        key={opt}
        className={`optA d-flex gap-3 ${
          selectedAnswers[item._id]?.selected === item[`option_${opt}`]
            ? selectedAnswers[item._id].isCorrect
              ? 'correct'
              : 'incorrect'
            : ''
        }`}
        onClick={() => handleOption(item._id, item[`option_${opt}`])}
      >
        <div className="a">{opt}</div>
        <div className="option">
          <p>{item[`option_${opt}`]}</p>
        </div>
      </div>
    ))}
</div> */