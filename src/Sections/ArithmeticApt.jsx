import React from 'react'
import pot from '../assets/pot.jpg'
import proloss from '../assets/proloss.jpg'

function ArithmeticApt() {
  return (
    <div className='container mt-5'>
      {/* pot card (stretched link) */}
      <div className="pot mb-5">

        <div class="d-flex position-relative">
          <img className='' style={{borderRadius:'15px'}} width={125} src={pot} class="flex-shrink-0 me-3" alt="..."/>
          <div>
            <h5 class="mt-0">Custom component with stretched link</h5>
            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <a href="" class="stretched-link">Go somewhere</a>
          </div>
        </div>

      </div>

      <div className="proloss">

      <div class="d-flex position-relative">
          <img className='' style={{borderRadius:'15px'}} width={125} src={proloss} class="flex-shrink-0 me-3" alt="..."/>
          <div>
            <h5 class="mt-0">Custom component with stretched link</h5>
            <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
            <a href="" class="stretched-link">Go somewhere</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ArithmeticApt