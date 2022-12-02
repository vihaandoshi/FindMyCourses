import React, {useState, useEffect} from "react";
import { NavLink  } from 'react-router-dom';
import NavbarCSS from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={NavbarCSS.menu}>
            <div className={NavbarCSS.branding}>
                <img src={require('../images/logo.png')} alt="logo" className={NavbarCSS.logo}/>
                <p className={NavbarCSS.website}> Find My Courses </p>
            </div>
            <ul className = {NavbarCSS.list}>
                <NavLink to="/" className={NavbarCSS.btn}> Home </NavLink>
                <NavLink to="/search" className={NavbarCSS.btn}> Search </NavLink>
                <NavLink to="/scheduler" className={NavbarCSS.btn}> Scheduler </NavLink>
                <NavLink to="/about" className={NavbarCSS.btn}> About </NavLink>
                <NavLink to="/survey" className={NavbarCSS.btn}> Review a Class </NavLink>
            </ul>
        </div>
    )
}

export default Navbar