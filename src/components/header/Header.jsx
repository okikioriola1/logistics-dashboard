import React from 'react'
import './header.css' 
import profileImg from '../../images/profile-img.jpg'
import {MdOutlineNotifications} from 'react-icons/md'

const Header = () => {
    return (
        <div className="header">
             <div className="header-profile">
                    <div className="img-container">
                        <div className="notif-icon">
                        <MdOutlineNotifications/>
                        </div>
                    </div>
                    <div className="short-vertical-bar"></div>
                    <div className="img-container">
                        <img src={profileImg} alt="notifs" className="profile-img"/>
                    </div>

                </div>
            
        </div>
    )
}

export default Header
