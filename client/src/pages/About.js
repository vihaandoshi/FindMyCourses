import React from "react";
import Profile from "../Components/Profile"; 
import anna from "../images/annacat.png"; 

const About = () => {
    return (
        <div> 
        <Profile fname="anna" lname="chung" role="clown" ig="https://www.instagram.com/anna_jimichu/" lkn="https://www.linkedin.com/in/annajchung" img={anna} > </Profile> 
        </div> 
    )
}

export default About 