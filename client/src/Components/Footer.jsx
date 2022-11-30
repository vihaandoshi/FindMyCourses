import React from 'react'; 
import { NavLink  } from 'react-router-dom';
import '../styles/Footer.css';
import {FaLinkedin} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div > 
      <div className = "div-our-team"> 
        <h2>Our Team</h2> 
        <p>sleep deprived berkeley students :p</p>
        <p>we can do a grid of pictures and linkedins if you guys want </p> 
        <p>like <a href="https://www.linkedin.com/feed/"> <FaLinkedin className="icon"/> </a> </p>
      </div> 
      <div> 
        <h2>Resources</h2> 
          <div> 
           <p><a href="https://berkeleytime.com/landing">BerkeleyTime</a></p>
           <p><a href="https://classes.berkeley.edu/search/class">Berkeley Academic Guide: Class Schedule</a></p>
           <p><a href="https://guide.berkeley.edu/courses/">Berkeley Academic Guide: Courses</a> </p>
           <p><a href="https://berkeleytime.com/landing">Some other link idk</a></p>
          </div> 
       </div>

      <div> 
        <h2>Contact Us</h2> 
        <form> 
          <p><label>Comment or Concern? Let us know here!</label> </p>
          <input type="text" placeholder="Enter Message Here"></input>  
          <button>Submit</button> 
        </form> 
      </div> 
      </div>
    
  )
}
export default Footer 