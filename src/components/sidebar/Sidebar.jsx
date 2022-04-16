import React from 'react'
import {HiHome} from 'react-icons/hi'
import { RiTruckFill} from 'react-icons/ri'
import { MdPeopleAlt} from 'react-icons/md'
import {IoMdPerson} from 'react-icons/io'
import {TiChartLine} from 'react-icons/ti'
import {RiBarChart2Fill} from 'react-icons/ri'
import {MdSupport} from 'react-icons/md'
import {BsCreditCardFill} from 'react-icons/bs'
import {MdSettings} from 'react-icons/md'
import {FaReceipt} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

import './sidebar.css'

const Sidebar = ({hide}) => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <h1>IPl<span className="blue-dot">.</span></h1>
                <h4> Main Menu</h4>
                <div className ="sidebar-links">
                   
                        <NavLink exact to="/" onClick ={hide} className="sidebar-link-container" activeClassName="selected" activeStyle={{color: "green"}}>
                        <div className="sidebar-links-container">
                        <HiHome className="sidebar-link-icon" size={34}/><p>Home</p>
                        
                    </div>
                    </NavLink>

                    
                        <NavLink exact to="/vehicles" onClick={hide} className="sidebar-link-container two" activeClassName="selected" activeStyle={{color: "green"}}>
                        <div className="sidebar-links-container">
                        <RiTruckFill className="sidebar-link-icon" style={{transform:"scale(-1,1)"}} size={34}/>
                        <p>Vehicles</p>
                        </div>
                        </NavLink>
                    

                    

                    <div className="sidebar-link-container">
                        <MdPeopleAlt className="sidebar-link-icon" size={34}/>
                        <p>Transporters</p>
                    </div>
                    
                    <div className="sidebar-link-container">
                        <IoMdPerson className="sidebar-link-icon" size={34}/>
                        <p>Customers</p>
                    </div>

                    <div className="sidebar-link-container">
                        <TiChartLine className="sidebar-link-icon" size={34}/>
                        <p>Shipments</p>
                    </div>
                </div>
                <h4>Internal Tools</h4>
                <div className ="sidebar-links">
                    <div className="sidebar-link-container">
                        <MdSupport className="sidebar-link-icon" size={34}/>
                        <p>Support Tickets</p>
                    </div>

                    <div className="sidebar-link-container">
                        <FaReceipt className="sidebar-link-icon" size={34}/>
                        <p>Invoices</p>
                    </div>

                    <div className="sidebar-link-container">
                        <RiBarChart2Fill className="sidebar-link-icon" size={34}/>
                        <p>Analytics</p>
                    </div>

                    <div className="sidebar-link-container">
                        <BsCreditCardFill className="sidebar-link-icon" size={34}/>
                        <p>Payments</p>
                    </div>
                    <div className="sidebar-link-container">
                        <MdSettings className="sidebar-link-icon" size={34}/>
                        <p>Settings</p>
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default Sidebar
