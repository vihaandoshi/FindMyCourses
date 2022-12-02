import React from "react";
import Profile from "../Components/Profile"; 
import '../styles/About.css';
import anna from "../images/annacat.png"; 
import jenjen from "../images/jenjencat.png"
import julia from "../images/juliacat.png"
import kelly from "../images/kellycat.png"
import risheek from "../images/risheekcat.png"
import tanya from "../images/tanyacat.png"
import vihaan from "../images/vihaancat.png"

const About = () => {
    return (
        <div className="bigbox"> 
        <h1 className="title">OUR TEAM</h1> 
        <div className="row1"> 
        <Profile fname="anna" lname="chung" role="clown" ig="https://www.instagram.com/anna_jimichu/" lkn="https://www.linkedin.com/in/annajchung" img={anna} > </Profile>
        <Profile fname="jennifer" lname="yin" role="role" ig="https://www.instagram.com/jenniferyin00/" lkn="https://www.linkedin.com/in/jenniferyin0" img={jenjen} > </Profile> 
        <Profile fname="julia" lname="zhang" role="role" ig="" lkn="" img={julia} > </Profile> 
        </div> 
        <div className="row1">
            <Profile fname="kelly" lname="yeh" role="role" ig="" lkn="" img={kelly} > </Profile> 
            <Profile fname="risheek" lname="" role="role" ig="" lkn="" img={risheek} > </Profile> 
            <Profile fname="tanya" lname="mehta" role="role" ig="" lkn="" img={tanya} > </Profile> 
            <Profile fname="vihaan" lname="" role="role" ig="" lkn="" img={vihaan} > </Profile> 
        </div> 
        </div> 
    )
}

export default About 