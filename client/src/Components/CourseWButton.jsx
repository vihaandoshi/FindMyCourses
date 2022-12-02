import React from 'react'; 
import '../styles/ClassCard.css'; 
// courseName, units, handleClick, bName 
const CourseWButton = (props) => {
    return (
        <div className="container"> 
        <div className="courseInfo"> 
            <h3>{props.courseName}</h3>
            <h4> {props.units} units</h4> 
        </div> 
        <div className = "btnPos"> 
        <button className = "btnStyle" onClick={() => {props.handleClick()}}>{props.bName}</button> 
        </div> 
        </div> 
    ); 
        
}

export default CourseWButton; 