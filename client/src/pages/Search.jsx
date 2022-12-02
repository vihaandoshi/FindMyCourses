import React, {useState, useEffect} from "react";
import { NavLink  } from 'react-router-dom';
import SearchCSS from '../styles/Search.module.css';
import ClassCard from '../Components/ClassCard.jsx';
import Axios from "axios";

const Search = () => {
    const [listOfClasses, setListOfClasses] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getCourseCards").then((response) => {
            setListOfClasses(response.data);
    });
    }, []);


    return (
        <div className={SearchCSS.container}>
            <form className={SearchCSS.form}>
                <div> 
                    <h1> Course Search </h1>
                    <input className={SearchCSS.course} type="text" name="query" placeholder="Example: CS61B" />
                    <button className={SearchCSS.btn} type="submit"> Search </button>
                </div>
            </form>
            <div>
                {listOfClasses.map((course) => {
                    return (
                        <div>
                            {/* <CourseWButton courseName={course.CourseName} units={course.Units}> </CourseWButton> */}
                        </div>
                    );
                })
            }
            </div>
        </div>
    )

}


export default Search