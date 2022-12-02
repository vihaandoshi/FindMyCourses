import {useState} from 'react'; 
import React from "react";
import Search from "./Search"; 
import ClassCard from "../Components/ClassCard"; 
import CourseList from "../Components/CourseList";
import TestBtn from "../Components/TestBtn"
import  '../styles/Scheduler.css';

const Scheduler = () => {
    const [cards, setCards] = useState([]); 

    //card is a dict with card info courseName and units 
    const updateSchedule = (card) => {
        var arr = [...cards]; 
        arr.unshift(card);
        setCards(arr);  
    }; 

    const sch = cards.map( (info) => 
        <ClassCard courseName={info.courseName} units={info.units}/>
    );

    return (
    <div> 
    <div className="r">
        {/* <div className="c">
            <Search></Search>
        </div> */}
        <div className="c">
            <CourseList courseAction={updateSchedule}></CourseList> 
        </div>
        <div className = "schedule c" id = "schedule">
            <ClassCard courseName="CS61C: Machine Structures" units="4"> </ClassCard>
            <ClassCard courseName="CS61C: Machine Structures"  units="4"> </ClassCard>
        </div>
    </div> 
    </div> 
    
); 

}; 

export default Scheduler