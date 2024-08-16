import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <> 
        <div className='align-items-center d-flex' style={{width:'100%',height:'50vh'}}>
            <div className="container bg-warning rounded-3">
                <h1>CampusCracker</h1>
                <Link to={'/home'}><button>Let's Crack your Placement</button></Link>
            </div>
            
            
        </div>
    </> 
  )
}

export default Landingpage