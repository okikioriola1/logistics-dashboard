import React from 'react'
import'./feature.css'
import {motion} from 'framer-motion'

const Feature = ({title, number, joined, color, icon, hover}) => {
    return (
        
            <motion.div className={`${hover} feature-card-container`}
            initial ={{x:1000}}
            animate={{x:0, transition:{type:"spring", duration:3}}}>
                <div className="feature-card-text">
                <h5>{title}</h5>
                <h1>{number}</h1>
                <p>{joined}</p>
                </div>
                <div className="feature-card-img">
                    <div className={`${color} feature-img-container`}>
                        {icon}
                    </div>

                </div>


            </motion.div>

            
      
    )
}

export default Feature
