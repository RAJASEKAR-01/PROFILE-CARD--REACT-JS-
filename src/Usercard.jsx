import React from 'react'
import PropTypes from "prop-types"
const userdata=[
    {
        name:"RAJASEKAR.M",
        city:"Tirupur",
        job:"Front-end development",
        skills:["UI/UX","HTML","CSS","BOOTSTRAP","JAVASCRIPT","REACT JS","GIT","C++"],
        online:true,
        profile:"./images/Raja.JPG"
    },
    {
        name:"DHARSHAN.M",
        city:"Madhurai",
        job:"Accountant",
        skills:["UI/UX","C++","C","EXCEL","JAVA","HTML","CSS"],
        online:true,
        profile:"./images/Dharshan.jpg"
    },
    {
        name:"PANDISELVAM.S",
        city:"Tiruppur",
        job:"Front end developer",
        skills:["HTML","CSS","JAVASCRIPT","BOOTSTRAP","C","PYTHON","GIT"],
        online:false,
        profile:"./images/Pandi.jpg"
    }
]
function User(props){
    return (
        <>
        <div className="container">
        <span className={props.online? "pro online":"pro offline"}>{props.online? "ONLINE":"OFFLINE"}</span>
            <img src={props.profile} alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.job}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                   {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                   ))}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export const Usercard = () => {
  return (
    <>
    <div className="header"><h1>PROFILE CARD</h1></div>
    <div className="main">
    {
        userdata.map((user,index)=>(
            <User key={index} 
            name={user.name}
            city={user.city}
            job={user.job}
            skills={user.skills}
            online={user.online}
            profile={user.profile}
            />
        ))}
        </div>
    </>
  )
}
User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    job:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    profile:PropTypes.string.isRequired,
    online:PropTypes.bool.isRequired
}