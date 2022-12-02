import {useState} from 'react'; 
import React from "react";
import Search from "./Search"; 
import ClassCard from "../Components/ClassCard"; 
import CourseList from "../Components/CourseList";
import CourseWButton from '../Components/CourseWButton';
import  '../styles/Scheduler.css';

const Scheduler = () => {
    const [cards, setCards] = useState([]); 

    //card is a dict with card info courseName and units 
    const updateSchedule = (card) => {
        var arr = [...cards]; 
        arr.unshift(card);
        setCards(arr);  
    }

    const sch = cards.map( (info) => 
        <CourseWButton courseName={info.courseName} units={info.units} bName="remove"/>
    );

    var dict= { 
        courseName: "cs 61c: machine structure", 
        units: 4
     }; 

    return (
    <div> 
    <div className="r">
        <div className="c abs">
            <CourseList courseAction={updateSchedule}></CourseList>  
        </div>
        <div className = "schedule c" id = "schedule">
            {sch}
        </div>
    </div> 
    </div> 
    
); 

}; 

export default Scheduler