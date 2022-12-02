import React from "react";
import '../styles/Home.css';
import { NavLink  } from 'react-router-dom';

const Home= () => {
    return (
    <div className="home">
        <div>
            <h1> Berkeley's course information in one place. </h1>
            <p> Can't decide which courses to take? Find My Courses is a 
                website created by a group of Berkeley students designed to
                make it convenient for students to choose their courses by
                easily accessing up-to-date information and student feedback. 
                All reviews are anonymous!</p>
            <NavLink to="/search" className="btn"> Get Started </NavLink>
            <NavLink to="/about" className="btn"> About Us</NavLink>
        </div>
        <img src={require('../images/berkeley.jpg')} className="berkeley" alt="berkeley campus"/>
    </div>
    )
}

export default Home

