import React from "react";
import { NavLink  } from 'react-router-dom';
import SearchCSS from '../styles/Search.module.css';
import ClassCard from '../Components/ClassCard.jsx';


const Search = () => {
    return (
        <div className={SearchCSS.container}>
            <form className={SearchCSS.form}>
                <div> 
                    <h1> Course Search </h1>
                    <input className={SearchCSS.course} type="text" name="query" placeholder="Example: CS61B" />
                    <button className={SearchCSS.btn} type="submit"> Search </button>
                </div>
            </form>
            <ClassCard/>
        </div>
    )

}


export default Search