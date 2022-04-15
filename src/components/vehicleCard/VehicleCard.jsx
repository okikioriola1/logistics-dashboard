import React,{useState} from 'react'

import './vehicleCard.css'
import {FaTruck} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'

import VehicleModal from '../vehicleModal/VehicleModal'

const VehicleCard = ({ImgSrc, color, name, progress}) => {
    const[showModal, setShowModal]=useState(false)
    
    
    
    return (
        <div className="vehicle-card-container">
            <div className="vehicle-card-component-icon">
                <div className="vehicle-icon-truck">
                    <FaTruck/>
                </div>
                <div className="vehicle-card-text">
                    <h1>ET-272-KJA</h1>
                    <p>Toyota Highlander 2004</p>
                </div>
            </div>
            <div className="vehicle-card-component">
            <div className="vehicle-card-text">
                    <h1>Lagos</h1>
                    <p>Start Location</p>
                </div>
            </div>
            <div className="vehicle-card-component">
            <div className="vehicle-card-text">
                    <h1>Ikeja</h1>
                    <p>Destination</p>
                </div>
            </div>
            <div className="vehicle-card-component">
            <div className="vehicle-card-text">
                    <h1>In Transit</h1>
                    <p>Status</p>
                </div>
            </div>
            <div className="vehicle-card-component-icon-img">
                <div className="vehicle-card-img">
                    <img src={ImgSrc} alt="profile"/>
                </div>
                <div className="vehicle-card-text">
                    <h1>{name}</h1>
                    <p>Transporter</p>
                </div>
            </div>
            <div className="vehicle-card-component-icon-btn">
            <div className="vehicle-card-text">
                    <div className="vehicle-card-button">
                        <div className={`${color}`}></div>
                        <h1>{progress}</h1>
                    </div>
                    <div className="vehicle-card-link" onClick={()=>setShowModal(true)}>Track Shipment</div>
                </div>
                <div className="vehicle-icon">
                   <BsThreeDotsVertical/>
                </div>

            </div>
            { showModal && (
            <VehicleModal closeModal={() =>setShowModal(false)}
            />
            )
            }
        </div>
    )
}

export default VehicleCard
