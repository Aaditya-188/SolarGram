import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import image1 from "./image/solarlogo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const username = sessionStorage.getItem('username');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div className='container-fluid'>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#" className="navbar-logo">
                        <img src={image1} alt="Solar Logo" />
                    </a>

                    <ul className="nav-menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                        <div className="dropdown">
                            <div className="dropdown-button">
                                <li><NavLink to="/services">Services <IoIosArrowDown /></NavLink></li>
                            </div>
                            <div className="dropdown-content">
                                <NavLink to="/">On-Grid Solar</NavLink>
                                <NavLink to="/">Off-Grid Solar</NavLink>
                                <NavLink to="/">Government Projects</NavLink>
                                <NavLink to="/">Solar Upgrade & Maintenance</NavLink>
                                <NavLink to="/">Housing Society</NavLink>
                            </div>
                        </div>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/contactus">Contact Us</NavLink></li>
                        <li><NavLink to="/enquiry">Enquiry</NavLink></li>

                        {isLoggedIn ? (
                            <div className="profile-section">
                                <FaUserCircle size={25} />
                                <span className="username"> {username}</span>
                                <button className="logout-btn" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                          <div className='login'>
                          <div className='buttn1'>
                                <li className='login-btn'><NavLink to="/login">Login</NavLink></li>
                                <li className='login-btn'><NavLink to="/register">Register</NavLink></li>
                            </div>
                          </div>
                          
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
