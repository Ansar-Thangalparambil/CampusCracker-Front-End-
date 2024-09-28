import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function PotGnrlQns() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container">

        <div className="tot-qstn">
          <div className="qstn d-flex gap-2">
            <div className="qno ">
              1.
            </div>
            <div className="question ">
              <p>A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?</p>
            </div>
          </div>

          <div className="options ms-4">
            
            <div className="optA d-flex gap-3">
              <div className="a">a</div>
              <div className="option">
                <p>120 metres</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">b</div>
              <div className="option">
                <p>120 metres</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">c</div>
              <div className="option">
                <p>120 metres</p>
              </div>
            </div>
            <div className="optA d-flex gap-3">
              <div className="a">d</div>
              <div className="option">
                <p>120 metres</p>
              </div>
            </div>

          </div>

          <div className="ms-4 ansandexplnsn">
          <>
            <Button className='d-flex align-items-center rounded-5 bg-warning border-transparent border' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
              Solution <i class="ms-2 fa-solid fa-lightbulb"></i>
            </Button>
            <div><Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse></div>
        </>
          </div>

        </div>

      </div>
    </>
  )
}

export default PotGnrlQns