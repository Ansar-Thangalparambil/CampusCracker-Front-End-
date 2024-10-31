import React from 'react'
import dpcut from '../assets/dpcut.jpeg'
import './userPopup.css'

function UserPopup({ popup, setPopup, setIsPopup }) {
    const handleClosePopup = () => {
        setPopup(false)
        setIsPopup(false)
    }

    if (!popup) return null;

    const userDetails = JSON.parse(sessionStorage.getItem('existingUser'))
    console.log(userDetails);
    

    return (
        <div className="user-popup-container w-25">
            <div className='user-popup'>
                <div className="info-header text-center mb-4">
                    <div className="profile-picture">
                        <img className='rounded-5' src={dpcut} width={'60px'} alt="profile" />
                    </div>
                    <div className="name-email mt-3 d-flex flex-column">
                        <h6 className='fw-bold m-0'>{userDetails.fullname}</h6>
                        <span style={{ fontSize: '13px' }}>{userDetails.email}</span>
                        <span style={{ fontSize: '13px' }}>{userDetails.department}</span>
                    </div>
                    <div className="manage-account mt-3">
                        <button className='border border-primary border-2 text-white rounded-4 px-3 py-1 bg-black'>Manage your account</button>
                    </div>
                    <hr />
                </div>
                <div className="info-body mt-4">
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, eaque ratione! Aliquid quaerat, unde nisi esse sit provident.</p>
                </div>
                <div className="info-footer mt-auto text-center">
                    <button onClick={handleClosePopup} className='bg-transparent border-0 text-white w-100 py-3'>Logout <i className='fa-solid fa-power-off text-primary'></i></button>
                </div>
            </div>
        </div>
    )
}

export default UserPopup
