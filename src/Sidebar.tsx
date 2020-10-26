import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import profPic from "../src/profile.jpg";
import './main.css';

import { Button } from "react-bootstrap";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {FiMail} from "react-icons/fi";



function Sidebar() {
  return (
    <div className="myContentSidebar">
        <div className="nameAndPic">
            {/* Insert profile pic here */}
            <img alt="avatar" src={profPic}></img>
            {/* Insert profile name here */}
            <h4>Alex Wu</h4>
            <h3>E-Mail: <a href="mailto:aqw99@tamu.edu">aqw99@tamu.edu</a></h3>
            <hr></hr>
            <h3>About</h3>
            <p className="ShortBio">Howdy! I am a Junior at Texas A&M University majoring in Computer Science. I enjoy creating websites like these and have some experience in developing full-stack projects.</p>
            <Button variant="outline-primary"><Link to='/Qualifications'>Learn More!</Link></Button>{' '}
            <hr></hr>
            <div className="icon">
              <a href="https://www.linkedin.com/in/alex-wu-3118a3168/">
                <FiLinkedin size={32}/>
              </a>
              <a href="https://github.com/aqw1772">
                <FiGithub size={32}/> 
              </a>
              <a href="mailto:aqw99@tamu.edu">
               <FiMail size={32}/>
              </a>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
