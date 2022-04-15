import React from 'react'
import ProfileImg from '../../images/profile-img.jpg'

import './vehicleModal.css'
import { FaTruck } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import {RiCloseLine} from 'react-icons/ri'

import {AnimatePresence, motion} from 'framer-motion'

const VehicleModal = ({closeModal}) => {
    const modalMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
        },
      };


    return (
        <AnimatePresence>
        <motion.div variants={modalMotion}
            initial="hidden"
            animate="visible"
         className="vehicle-modal-main-container">
            <motion.div variants={modalMotion}
            initial="hidden"
            animate="visible"
            className="vehicle-modal-inner-container">
                <div className="top-vehicle-modal">
                    <div className="top-vehicle-modal-text">
                    <h1>Tracking Vehicle</h1>
                    <p>Please hold on. Location Vehicle on IPI Network</p>
                    </div>
                    <div className="close-modal-icon">
                        <button onClick={()=>closeModal()}><RiCloseLine/></button>
                    </div>
                </div>

                <div className="middle-vehicle-modal">
                    <div className="middle-modal-img-container">
                        <img src={ProfileImg} alt="profile"/>
                       <div className="middle-modal-img-container-text"> <h1>Johnson C</h1>
                       <p>Transporter</p>
                       </div>
                    </div>
                    <div className="middle-circle">
                        <div className="circle-1">
                            <div className="circle-2">
                                <div className="circle-3">
                                    <MdSearch/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bottom-vehicle-modal">
                    <div className="bottom-modal-icon-container">
                        <div className="bottom-modal-icon">
                        <FaTruck/>
                        </div>
                        <div className="bottom-modal-text">
                            <h1>ET-272-KJA</h1>
                            <p>Toyota Highlander 2004</p>
                        </div>

                    </div>
                    <div className="bottom-modal-text-container">
                        <div className="bottom-modal-text">
                            <h1>Lagos</h1>
                            <p>Start Location</p>
                        </div>

                    </div>
                    <div className="bottom-modal-text-container">
                        <div className="bottom-modal-text">
                            <h1>Ikeja </h1>
                            <p>Destination</p>
                        </div>

                    </div>
                    <div className="bottom-modal-text-container">
                        <div className="bottom-modal-text">
                            <h1>In Transit</h1>
                            <p>Status</p>
                        </div>

                    </div>

                </div>
                


            </motion.div>
            
        </motion.div>
        </AnimatePresence>
    )
}

export default VehicleModal
