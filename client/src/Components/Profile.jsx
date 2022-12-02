import React from 'react'; 
import '../styles/Profile.css';
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'; 

const Profile = (props) => {
    return (
        <div className="card">
            <div className="content">
                <div className="img-container">
                    <img className="pfp" src={props.img} alt="anna"/>
                </div>
                <div className="des-container"> 
                    <div className="text"> 
                    <h3>{props.fname} {props.lname}</h3>
                    <h4>{props.role}</h4>
                    </div> 
                    <div className="icons"> 
                    <a href={props.lkn}><AiFillLinkedin className="icon"/></a> 
                    <a href={props.ig}><AiFillInstagram className="icon"/></a> 
                    </div> 
                </div>
            </div> 
          
               
              
        
        </div>
    )

}

export default Profile 