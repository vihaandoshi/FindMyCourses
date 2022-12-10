import React from 'react'; 
import '../styles/CourseInfo.css';

const CourseInfo = (props) => {
    return (
        <div className='container'>
           <span className="courseInfo"> 
                <h3>{props.className}</h3>
                <h4>{props.gradeRecieved} Grade Received </h4>
                <h4>{props.professor} Professor </h4> 
                <h4>{props.semester} Semester </h4> 
                <h4>{props.midterms} Num Midterms </h4> 
                <h4>{props.clobber} Clobber </h4> 
                <h4>{props.difficulty} Difficulty </h4> 
                <h4>{props.classesForPrep} Classes for Prep </h4> 
            </span>  
        </div>
    )
}
export default CourseInfo