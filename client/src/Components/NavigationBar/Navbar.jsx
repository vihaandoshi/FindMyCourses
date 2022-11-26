import React from "react";
import { NavLink  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1> Check </h1> 
            <NavLink to="/dummy">
                <h1> Navbar </h1>
            </NavLink>
        </div>
    )
}

export default Navbar