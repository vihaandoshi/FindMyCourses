import React from 'react'; 
import '../styles/CourseInfo.css';

const CourseInfo = (props) => {
    return (
        <div className='container'>
           <span className="courseInfo"> 
                <h3>{props.className}</h3>
                <h4>{props.gradeRecieved} Grade Received: </h4> 
            </span>  
        </div>
    )
}
export default CourseInfo