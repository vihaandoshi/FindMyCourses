import React from 'react'; 
import '../styles/Profile.css';
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'; 

const Profile = (props) => {
    return (
        <div className="card">
            <div className="content">
                <div className="img-container">
                    <img src={props.img} alt="anna"/>
                </div>
                <div className="des-container">
                    <h3>{props.fname} {props.lname}<br></br><span>{props.role}</span></h3>
                </div>
            </div> 
            <ul>
                <li>
                    <span > <a href={props.lkn}><AiFillLinkedin className="icon"/></a> </span>
                </li>
                <li>
                <span ><a href={props.ig}><AiFillInstagram className="icon"/></a> </span>
                </li>
            </ul>
        </div>
    )

}

export default Profile 