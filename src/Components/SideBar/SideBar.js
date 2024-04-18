import React, { useState } from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { LiaUserCogSolid } from "react-icons/lia";
import { FiSettings, FiScissors } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiArrowLineRightFill, PiArrowLineLeftFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import "./SideBar.css"
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Calender from '../Calender/Calender';
import Team from '../Team/Team';
import Services from '../Services/Services';
import Client from '../Clients/Client';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "",
            name: "Home",
            icon: <GrHomeRounded />
        },
        {
            path: "/calender",
            name: "Calender",
            icon: <SlCalender />
        },
        {
            path: "/team",
            name: "Team",
            icon: <FaUsers />
        },
        {
            path: "/services",
            name: "Services",
            icon: <FiScissors />
        },
        {
            path: "/clients",
            name: "Clients",
            icon: <LiaUserCogSolid />
        },
        {
            path: "/insights",
            name: "Insights",
            icon: <AiOutlineDollar />
        },
        {
            path: "/setup",
            name: "SetUp",
            icon: <FiSettings />
        }
    ]
    return (
        <div>
            <div className="Sidebarbox">
                <div style={{ width: isOpen ? "180px" : "80px" }} className="sidebar">
                    <div className={isOpen ? 'topSection' : 'topSectionClosed'}>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    </div>
                    <div className={isOpen ? 'bottomSection' : 'bottomSectionClosed'}>
                        <div className='link'>
                            <div className='icon'>{isOpen ? <PiArrowLineLeftFill onClick={toggle} /> : <PiArrowLineRightFill onClick={toggle} />}</div>
                            <div style={{ display: isOpen ? "block" : "none"}} className="collapseText">Collapse</div>
                        </div>
                    </div>
                </div>
                <div className='children' >
                    <Routes>
                        <Route path="" element={<Dashboard props={isOpen}></Dashboard>}></Route>
                        <Route path="calender" element={<Calender></Calender>}></Route>
                        <Route path="team" element={<Team></Team>}></Route>
                        <Route path="services" element={<Services></Services>}></Route>
                        <Route path="clients" element={<Client></Client>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;