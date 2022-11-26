import React from "react";
import { NavLink  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to="/home"> Home </NavLink>
            <NavLink to="/search"> Search </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/survey"> Survey </NavLink>
        </div>
    )
}

export default Navbar