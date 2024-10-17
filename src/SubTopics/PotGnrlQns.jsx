import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { arithQuestionAPI } from '../services/allAPI';
// import { useLocation } from 'react-router-dom';

function PotGnrlQns() {

  const [openIndexes, setOpenIndexes] = useState([])
  // const location = useLocation();
  const category = "PoT"
  const [arithQuestions, setArithQuestions] = useState([])
  // const [section, setSection] = useState(null)

  // const getSection = async()=>{
  //  try{
  //     const result = await arithQuestionAPI();
  //     console.log("API Result:", result);
  //     setSection(result)
  //   }catch(err){
  //     console.log(`Request failed due to ${err}`);
  //   }
  // };

  // useEffect(()=>{
  //   getSection();
  // },[])

  const getArithQuestions = async()=>{
    try {
      const result = await arithQuestionAPI();
      console.log(result.data);
      
      if(result && result.data && Array.isArray(result.data)){
        setArithQuestions(result.data);
      }else{
        console.log('No questions found!');  
      }
    } catch (error) {
      console.error('Error fetching Arithmetic aptitude questions:', error);
    }
  };

  useEffect(()=>{
    getArithQuestions();
  },[]);

 const toggleOpen = (index)=>{
    setOpenIndexes((prev)=>
      prev.includes(index) ? prev.filter((i)=>i !== index):[...prev, index]
    );
  };

  return (
    <>
      <div className="container">

        {arithQuestions?.length > 0? (
          arithQuestions?.map((item,index)=>(
          <div className="tot-qstn" key={index}>
          <div className="qstn d-flex gap-2">
            <div className="qno ">
              {index+1}
            </div>
            <div className="question ">
              <p>{item.question}</p>
            </div>
          </div>

          <div className="options ms-4">
            
            <div className="optA d-flex gap-3">
              <div className="a">a</div>
              <div className="option">
                <p>{item.option_a}</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">b</div>
              <div className="option">
                <p>{item.option_b}</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">c</div>
              <div className="option">
                <p>{item.option_c}</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">d</div>
              <div className="option">
                <p>{item.option_d}</p>
              </div>
            </div>

          </div>

          <div className="ms-4 ansandexplnsn">
          <>
            <Button className='d-flex align-items-center rounded-5 bg-warning border-transparent border' onClick={() => toggleOpen(index)} aria-controls={`example-collapse-text-${index}`} aria-expanded={openIndexes.includes(index)}>
              Solution <i class="ms-2 fa-solid fa-lightbulb"></i>
            </Button>
            <div><Collapse in={openIndexes.includes(index)}>
              <div id={`example-collapse-text-${index}`}>
                <p>
                  {item.answer}
                </p>
                <p>
                  {item.explanation}
                </p>
              </div>
            </Collapse></div>
        </>
          </div>

        </div> 
          ))
        )
          :
          (
          <div>
            <p>No questions available for {category}</p>
          </div>
        )}

      </div>
    </>
  )
}

export default PotGnrlQns