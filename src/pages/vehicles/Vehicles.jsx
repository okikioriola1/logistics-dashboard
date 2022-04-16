import React, { useState } from 'react'
import './vehicles.css'
import Header from '../../components/header/Header'

import { MdSearch } from 'react-icons/md'

import ProfileImg from '../../images/profile-img.jpg'
import VehicleCard from '../../components/vehicleCard/VehicleCard'
import {AnimatePresence, motion} from 'framer-motion'

const Vehicles = () => {
    const [showForm, setShowForm] = useState(false);
    const boxMotion = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 2.5, ease: "easeInOut" },
        },
      };
    return (
        <AnimatePresence>
        <div className="logistics-vehicles-section">
            <Header/>
            <div className="vehicle-text">
                    <motion.h1 
              initial={{ y: -200 }}
              transition={{ type: "spring", duration: 0.5 }}
              animate={{ y: 0 }}>Vehicles</motion.h1>
            <motion.p 
              initial={{ y: -200 }}
              transition={{ type: "spring", duration: 0.5 }}
              animate={{ y: 0 }}>Manage and track all vehicles on the IPI Network</motion.p>
                </div>
            <motion.div variants={boxMotion}
            initial="hidden"
            animate = "visible"
             className="vehicle-container">
                <div className="top-vehicle-container">
                    
                        <div className="vehicle-links-item">
                        <div className="link clicked"><h4> All Vehicles</h4></div>
                            <div className="link"><h4>Trucks</h4></div>
                            <div className="link"><h4>Trailers</h4></div>
                            <div className="link"><h4>Tankers</h4></div>
                        </div>

                       
                        <div className="search-bar">
                        { showForm && (
                            <form>
                                <input type="text" className="search-input"/>
                                
                            </form>
                            )}

                            <button onClick={()=>setShowForm(!showForm)} className="search-btn"><MdSearch/></button>
                            
                            </div>                   
                </div>

                <div className="vehicle-container-body">
                    <VehicleCard ImgSrc={ProfileImg} color={"green"} name={"Johnson C"} progress={"In Transit"}/>
                    <VehicleCard ImgSrc={ProfileImg} color={"red"} name={"Jeremy Lopez"} progress={"Cancelled"}/>
                    <VehicleCard ImgSrc={ProfileImg} color={"blue"} name={"Indiana Jones"} progress={"Completed"}/>
                    <VehicleCard ImgSrc={ProfileImg} color={"green"} name={"Johnson C"} progress={"In Transit"}/>
                </div>



            </motion.div>

            
        </div>
        </AnimatePresence>
    )
}

export default Vehicles
