import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='navBar'>
        <Link to="/home" className='logo'>
          <img src="logo.jpg" alt="Logo" />
        </Link>
        <Link className='profileOuter'>
        <FaRegUser className='profile' />
        </Link>
      </div>
    </>
  )
}

export default Header
