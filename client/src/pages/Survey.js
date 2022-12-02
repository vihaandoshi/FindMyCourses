import React, { useState, useEffect, useReducer } from "react";
import SurveyCSS from "../styles/Survey.css";
import Axios from "axios";

const Survey = () => {
    const [listOfReviews, setListOfReviews] = useState([
        {nameOfClass: "70"}
    ]);
    const [nameOfClass, setNameOfClass] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/getCourseReviews").then((response) => {
            setListOfReviews(response.data);
        });
    }, []);

    const createReview = () => {
        Axios.post("http://localhost:3001/addReview", {
            nameOfClass
        }).then((response) => {
            alert("SUBMITTED!");
        })
    }

    return(
        <div className="survey">
            <div className="userDisplay">
                {listOfReviews.map((user) => {
                    return (
                    <div>
                        <h1> Class Name: {user.nameOfClass} </h1>
                    </div>
                    );
                })}
            </div>

            <div className="question">
                <label> Class name: </label>
                <input
                    type="text"
                    onChange={(event) => {setNameOfClass(event.target.value);}}
                    required
                />
            </div>
            <button className="submit-button" onClick={createReview}> Submit </button>

            {/* <div className="container">
                <h1> Rate a class! </h1>
                
                <form>
                    <div className="survey-questions">
                        <div className="question">
                            <label> Class name: </label>
                            <input type="text" required/>
                        </div>
                        <div className="question">
                            <label> Professor: </label>
                            <input type="text" required/>
                        </div>
                        <div className="question">
                            <label> Year: </label>
                            <input type="number" min="1868" max="2022" placeholder="XXXX" required/>
                        </div>
                        <div className="question">
                            <label> Semester: </label>
                            <input type="text" required/>
                        </div>
                        <div className="question">
                            <label> Difficulty (1-10): </label>
                            <input type="number" min="1" max="10" required/>
                        </div>
                        <div className="question">
                            <label> Grade Received: </label>
                            <input type="text"/>
                        </div>
                        <div className="question">
                            <label> Required textbooks: </label>
                            <input type="text"/>
                        </div>
                        <div className="question">
                            <label> Hours a week for homework: </label>
                            <input type="number" min="0" max="168"/>
                        </div>
                        <div className="question">
                            <label> Number of midterms: </label>
                            <input type="number" min="0" max="20"/>
                        </div>
                        <div className="question">
                            <label> Prereqs/coreqs: </label>
                            <input type="text"/>
                        </div>
                        <div className="question">
                            <label> Classes to help prepare: </label>
                            <input type="text"/>
                        </div>
                        <div className="question">
                            <label> Next classes to take: </label>
                            <input type="numeric" maxlength="4"/>
                        </div>
                        <div className="checkbox-question">
                            <label> Has a no homework option? </label>
                            <input type="checkbox"/>
                        </div>
                        <div className="checkbox-question">
                            <label> Has a clobber policy? </label>
                            <input type="checkbox"/>
                        </div>
                        <div className="checkbox-question">
                            <label> Has mandatory discussions? </label>
                            <input type="checkbox"/>
                        </div>
                        <div className="question">
                            <label> Comments? </label>
                            <input type="text" className="comment"/>
                        </div>
                        <div className="question next-line"> </div>
                        <div className="question next-line"> </div>

                        <div className="question">
                            <button className="submit-button" onClick={createReview}> Submit </button>
                        </div>
                    </div>
                </form>
            </div>  */}

        </div>
        

    )

    // return (
    //     <div className={SearchCSS.container}>
    //         <form className={SearchCSS.form}>
    //             <div> 
    //                 <h1> Course Search </h1>
    //                 <input className={SearchCSS.course} type="text" name="query" placeholder="Example: CS61B" />
    //                 <button className={SearchCSS.btn} type="submit"> Search </button>
    //             </div>
    //         </form>
    //         <div>
    //             <ul>
    //             {listOfClasses.map((course) => {
    //                 return (
    //                     <div>
    //                         <h1>Name: {course.CourseName}</h1>
    //                         <h1>Department: {course.Department}</h1>
    //                         <h1>Units: {course.Units}</h1>
    //                     </div>
    //                 );
    //             })}
    //             </ul>
    //         </div>
    //         <ClassCard/>
    //     </div>
    // )

    // return (
    //     <div className="container">
    //         <h1> Rate a class! </h1>
            
    //         <form>
    //             <div className="survey-questions">
    //                 <div className="question">
    //                     <label> Class name: </label>
    //                     <input type="text" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Professor: </label>
    //                     <input type="text" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Year: </label>
    //                     <input type="number" min="1868" max="2022" placeholder="XXXX" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Semester: </label>
    //                     <input type="text" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Difficulty (1-10): </label>
    //                     <input type="number" min="1" max="10" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Grade Received: </label>
    //                     <input type="text"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Required textbooks: </label>
    //                     <input type="text"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Hours a week for homework: </label>
    //                     <input type="number" min="0" max="168"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Number of midterms: </label>
    //                     <input type="number" min="0" max="20"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Prereqs/coreqs: </label>
    //                     <input type="text"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Classes to help prepare: </label>
    //                     <input type="text"/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Next classes to take: </label>
    //                     <input type="numeric" maxlength="4" required/>
    //                 </div>
    //                 <div className="checkbox-question">
    //                     <label> Has a no homework option? </label>
    //                     <input type="checkbox" required/>
    //                 </div>
    //                 <div className="checkbox-question">
    //                     <label> Has a clobber policy? </label>
    //                     <input type="checkbox" required/>
    //                 </div>
    //                 <div className="checkbox-question">
    //                     <label> Has mandatory discussions? </label>
    //                     <input type="checkbox" required/>
    //                 </div>
    //                 <div className="question">
    //                     <label> Comments? </label>
    //                     <input type="text" className="comment"/>
    //                 </div>
    //                 <div className="question next-line"> </div>
    //                 <div className="question next-line"> </div>

    //                 <div className="question button">
    //                     <input type="submit"/>
    //                 </div>
    //             </div>
    //         </form>
    //  </div>
    // )


}
export default Survey
