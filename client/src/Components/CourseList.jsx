import {useState} from 'react'; 
import React from 'react'; 
import CourseWButton from './CourseWButton'; 
import TestBtn from './TestBtn'; 
//takes in one argument that will be the courseAction (a function that specifies what the button for what the button in the CourseWButton will do generated will do)
//in this case courseAction will update the Schduler component and in the second it should redirect 
const CourseList = (props) => {
    const [courses, setList] = useState([]);
    //basically takes in a dictionary that looks like 
    //  var dict={
    //     courseName: "cs 61c: machine structure", 
    //     units: 4, 
    //     handleClick = () => do something, 
    //     bName = "add course"
    //  }; 
    
    const updateList = (course) => {
        var arr = [...courses]; 
        arr.unshift(course); 
        setList(arr); 
    } 

    const cList = courses.map( (eachCourse) => {
        
    var dict = {
        courseName : eachCourse.courseName, 
        units : eachCourse.units
    };
    return (<CourseWButton courseName={eachCourse.courseName} units={eachCourse.units}
        handleClick={() => {props.courseAction({dict})}} bName={eachCourse.bName}> </CourseWButton>); 
    }
    ); 

    return (
        <div> 
            <TestBtn update={updateList} ></TestBtn> 
            {/* /Search goes here should take in the updateList function  */}
        <div> 
            {cList} 
        </div>
        </div> 
    ); 
} 

export default CourseList