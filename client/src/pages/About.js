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
        <Profile fname="Anna" lname="Chung" role="clown" ig="https://www.instagram.com/anna_jimichu/" lkn="https://www.linkedin.com/in/annajchung" img={anna} > </Profile>
        <Profile fname="Jennifer" lname="Yin" role="warrior" ig="https://www.instagram.com/jenniferyin00/" lkn="https://www.linkedin.com/in/jenniferyin0" img={jenjen} > </Profile> 
        <Profile fname="Julia" lname="Zhang" role="fisherwoman" ig="" lkn="https://www.linkedin.com/in/julia-zhang-b4a707225" img={julia} > </Profile> 
        </div> 
        <div className="row1">
            <Profile fname="Kelly" lname="Yeh" role="superhero" ig="" lkn="https://www.linkedin.com/in/kelly-yeh-b08217232/" img={kelly} > </Profile> 
            <Profile fname="Risheek" lname="Somu" role="messiah" ig="" lkn="https://www.linkedin.com/in/sheek/" img={risheek} > </Profile> 
            <Profile fname="Tanya" lname="Mehta" role="butcher" ig="" lkn="https://www.linkedin.com/in/tanyamehta005/" img={tanya} > </Profile> 
            <Profile fname="Vihaan" lname="Doshi" role="illusionist" ig="" lkn="https://www.linkedin.com/in/vihaandoshi/" img={vihaan} > </Profile> 
        </div> 
        </div> 
    )
}

export default About 