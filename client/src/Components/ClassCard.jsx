import React from "react";
import '../styles/ClassCard.css';

// const ClassCard = ({ classInfo, addClass }) => {
//     return (
//         <div className="class-card">
//             <div className="class-card__info">
//                 <h3>{classInfo.name}</h3>
//                 <p>{classInfo.instructor}</p>
//             </div>
//             <button onClick={() => addClass(classInfo)}>Add</button>
//         </div>
//     );
// };
const ClassCard = (props) => {
    return (
        <div className="container"> 
            <span className="courseInfo"> 
                <h3> {props.courseName}</h3>
                <p> {props.units} units</p>
                <p> {props.department} </p> 
            </span>
        </div> 
        )
}

export default ClassCard