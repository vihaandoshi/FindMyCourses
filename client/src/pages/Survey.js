import React, { useState, useEffect, useReducer } from "react";
import SurveyCSS from "../styles/Survey.css";
import Axios from "axios";

const Survey = () => {
    const [listOfReviews, setListOfReviews] = useState([]);
    const [ClassName, setClassName] = useState("");
    const [Professor, setProfessor] = useState("");
    const [Year, setYear] = useState(2022);
    const [Semester, setSemester] = useState("");
    const [Difficulty, setDifficulty] = useState(1);
    const [GradeReceived, setGrade] = useState("");
    const [textbooks, setTextbooks] = useState("");
    const [HWHours, setHWHours] = useState(0);
    const [midterms, setMidterms] = useState(0);
    const [prereqs, setPrereqs] = useState("");
    const [prepareClasses, setPrepareClasses] = useState("");
    const [nextClasses, setNextClasses] = useState("");
    const [noHW, setNoHW] = useState(false);
    const [clobber, setClobber] = useState(false);
    const [mandDisc, setMandDisc] = useState(false);
    const [comments, setComments] = useState("");

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/getReview").then((response) => {
    //         setListOfReviews(response.data);
    //     });
    // }, []);

    const createReview = () => {
        Axios.post("http://localhost:3001/addReview", {
            ClassName,
            Professor,
            Year,
            Semester,
            Difficulty,
            GradeReceived,
            textbooks,
            HWHours,
            midterms,
            prereqs,
            prepareClasses,
            nextClasses,
            noHW,
            clobber,
            mandDisc,
            comments
        }).then((response) => {
            alert("SUBMITTED!");
        })
    }

    return(
        <div>
            {/* <div className="userDisplay">
                {listOfReviews.map((user) => {
                    return (
                    <div>
                        <h1> Class Name: {user.className} </h1>
                    </div>
                    );
                })}
            </div> */}

            <div className="survey-container">
                <div className="rate-a-class">
                    <h1> Rate a class! </h1>
                </div>
                
                <form>
                    <div className="survey-questions">
                        <div className="question">
                            <label> Class name: </label>
                            <input
                                type="text"
                                onChange={(event) => {setClassName(event.target.value);}}
                                required
                            />                        
                        </div>
                        <div className="question">
                            <label> Professor: </label>
                            <input
                                type="text"
                                required
                                onChange={(event) => {setProfessor(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Year: </label>
                            <input
                                type="number"
                                min="1868"
                                max="2022"
                                placeholder="XXXX"
                                required
                                onChange={(event) => {setYear(event.target.value);}}
                                />
                        </div>
                        <div className="question">
                            <label> Semester: </label>
                            <input
                                type="text"
                                required
                                onChange={(event) => {setSemester(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Difficulty (1-10): </label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                required
                                onChange={(event) => {setDifficulty(event.target.value);}}
                                />
                        </div>
                        <div className="question">
                            <label> Grade Received: </label>
                            <input
                                type="text"
                                required
                                onChange={(event) => {setGrade(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Required textbooks: </label>
                            <input
                                type="text"
                                onChange={(event) => {setTextbooks(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Hours a week for homework: </label>
                            <input
                                type="number"
                                min="0"
                                max="168"
                                onChange={(event) => {setHWHours(event.target.value);}}
                                />
                        </div>
                        <div className="question">
                            <label> Number of midterms: </label>
                            <input
                                type="number"
                                min="0"
                                max="20"
                                onChange={(event) => {setMidterms(event.target.value);}}
                                />
                        </div>
                        <div className="question">
                            <label> Prereqs/coreqs: </label>
                            <input
                                type="text"
                                onChange={(event) => {setPrereqs(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Classes to help prepare: </label>
                            <input
                                type="text"
                                onChange={(event) => {setPrepareClasses(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Next classes to take: </label>
                            <input
                                type="numeric"
                                onChange={(event) => {setNextClasses(event.target.value);}}
                                />
                        </div>
                        <div className="checkbox-question">
                            <label> Has a no homework option? </label>
                            <input
                                type="checkbox"
                                onChange={(event) => {setNoHW(event.target.value);}}
                            />                        
                        </div>
                        <div className="checkbox-question">
                            <label> Has a clobber policy? </label>
                            <input
                                type="checkbox"
                                onChange={(event) => {setClobber(event.target.value);}}
                            />                        
                        </div>
                        <div className="checkbox-question">
                            <label> Has mandatory discussions? </label>
                            <input
                                type="checkbox"
                                onChange={(event) => {setMandDisc(event.target.value);}}
                            />                        
                        </div>
                        <div className="question">
                            <label> Comments? </label>
                            <input
                                type="text"
                                className="comment"
                                onChange={(event) => {setComments(event.target.value);}}
                            />
                        </div>
                        <div className="question next-line"> </div>
                        <div className="question next-line"> </div>

                    <div className="question">
                        <button className="submit-button" onClick={createReview}> Submit </button>
                    </div>

                    </div>
                </form>
            </div> 

        </div>
    )
}
export default Survey
