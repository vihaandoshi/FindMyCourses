import {useState} from 'react'; 
import React from 'react'; 
import CourseWButton from './CourseWButton'; 
import TestBtn from './TestBtn'; 
import '../styles/Scheduler.css'; 
//takes in one argument that will be the courseAction (a function that specifies what the button for what the button in the CourseWButton will do generated will do)
//in this case courseAction will update the Schduler component and in the second it should redirect 
const CourseList = (props) => {
    const [courses, setList] = useState([]);
 
    const updateList = (course) => {
        var arr = [...courses]; 
        arr.unshift(course); 
        setList(arr); 
    } 

    const cList = courses.map( (eachCourse) => {
        
    var d = {
        courseName : eachCourse.courseName, 
        units: eachCourse.units
    };


    return (<CourseWButton courseName={eachCourse.courseName} units={eachCourse.units}
        handleClick={() => {props.courseAction(d)}} bName={eachCourse.bName}> </CourseWButton>); 
    }

    ); 

    return (
        <div> 
            <TestBtn update={updateList} ></TestBtn> 
            {/* /Search goes here should take in the updateList function  */}
            {cList}  
        </div> 
    ); 
} 

export default CourseList