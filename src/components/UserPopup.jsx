import React from 'react'
// import dpcut from '../assets/dpcut.jpeg'
import './userPopup.css'
import { Link } from 'react-router-dom'
import userImg from '../assets/default-avatar-icon-of-social-media-user-vector.jpg'
import { BASE_URL } from '../services/baseurl'

function UserPopup({ popup, setPopup, setIsPopup }) {
    const handleClosePopup = () => {
        setPopup(false)
        setIsPopup(false)
    }

    if (!popup) return null;

    const userDetails = JSON.parse(sessionStorage.getItem('existingUser'))
    console.log(userDetails);
    

    return (
        <div className="user-popup-container ">

            <div className='user-popup'>

                <div className="info-header text-center">

                    <div className="profile-picture mx-auto">
                        <img src={userDetails.profileimg?`${BASE_URL}/uploads/${userDetails.profileimg}` : userImg}  alt="profile" />
                    </div>
                    
                    <div className="name-email mt-3 d-flex flex-column">
                        <span className='fullname'>{userDetails.fullname}</span>
                        <span className='em-dip'>{userDetails.email}</span>
                        <span className='em-dip'>{userDetails.department}</span>
                    </div>

                    <div className="manage-account mt-3">
                        <Link to={'/manageaccounts'}>
                            <button className='mng-acc-btn px-2 py-1'>
                                Manage your account
                            </button>
                        </Link>
                    </div>
  
                </div>

                <div className="info-body mt-3">

                    <Link to={'/usercontrols'} className='text-decoration-none fw-semibold text-light'>
                        <div className=' ps-2 exm-history  py-2' role='button' >
                            <li className=''>Exam History</li>
                        </div>
                    </Link>

                    <Link to={'/usercontrols'} className='text-decoration-none fw-semibold text-light'>
                        <div className=' ps-2 results  py-2' role='button' >
                            <li className=''>Results</li>
                        </div>
                    </Link>

                    <Link to={'/usercontrols'} className='text-decoration-none fw-semibold text-light'>
                        <div className=' ps-2 performance py-2' role='button' >
                            <li className=''>Performance</li>
                        </div>
                    </Link>
                    
                </div>

                <div className="info-footer my-3 text-center ">
                    <button onClick={handleClosePopup} className='bg-transparent   w-100 '>
                        Logout <i className='fa-solid fa-power-off '></i>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default UserPopup
