import React from 'react'; 
import { NavLink  } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="row"> 

      <div className = "div-resources column"> 
        <h3>Resources</h3> 
          <div className="links row"> 
          <div className="column"> 
           <p><a href="https://berkeleytime.com/landing">BerkeleyTime</a></p>
           <p><a href="https://classes.berkeley.edu/search/class">Berkeley Academic Guide: Class Schedule</a></p>
          </div> 
          <div className="column">
           <p><a href="https://guide.berkeley.edu/courses/">Berkeley Academic Guide: Courses</a> </p>
           <p><a href="https://berkeleytime.com/landing">Some other link idk</a></p>
          </div>
          </div> 
       </div>

      <div className = "div-contact-us column"> 
        <h3>Contact Us</h3> 
        <form> 
          <p><label>Comment or Concern? Let us know here!</label> </p>
          <input type="text" placeholder="Enter Message Here"></input>  
          <button className = "btn">Submit</button> 
        </form> 
      </div> 
      </div>
    
  )
}
export default Footer 