import React, {useState, useEffect} from "react";
import { NavLink  } from 'react-router-dom';
import SearchCSS from '../styles/Search.module.css';
import ClassCard from '../Components/ClassCard.jsx';
import CourseWButton from "../Components/CourseWButton";
import Axios from "axios";

const Search = () => {
    const [listOfClasses, setListOfClasses] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3001/getCourseCards').then((response) => {
            setListOfClasses(response.data);
    });
    }, []);


    return (
        <div className={SearchCSS.container}>
            <form className={SearchCSS.form}>
                <div> 
                    <h1> Course Search </h1>
                    <input 
                        className={SearchCSS.course} 
                        type="text" 
                        placeholder="Example: CS61B"
                        onChange = {(e) => setQuery(e.target.value)} 
                    />
                </div>
            </form>
            <div>
                {listOfClasses
                // .filter((query) => {
                //     if (searchTitle === "") {
                //         return value;
                //     } else if {
                //         value.toLowerCase().includes(query.toLowerCase());
                //         return value;
                //       }
                // })
                .map((course) => {
                    return (
                        <div>
                            <ClassCard courseName={course.CourseName} department={course.Department} units={course.Units}> </ClassCard>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )

}


export default Search