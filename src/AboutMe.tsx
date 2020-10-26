import React from 'react';
import './App.css';
import Navigation from "./Navigation";

import { Carousel } from 'react-bootstrap';
import Sidebar from './Sidebar';

function AboutMe() {
  return (
    <div>
      <Navigation/>
      <div className="cardFormat">
      <Sidebar/>
      <h2 className="TitleText">About Me (In 300 words or more)</h2>
      <hr></hr>
      <h5>Introduction</h5>
      <p>Howdy, I’m a Junior majoring in Computer Science at Texas A&M University. Along with my Computer Science Degree, I’m looking at a possible Cybersecurity minor. </p>
      <p>Here are some of my past relevant courses are:</p>
        <ul>
          <li>CSCE121: Introduction to Programming Design</li>
          <li>CSCE222: Discrete Structures</li>
          <li>CSCE221: Data Structures</li>
          <li>CSCE312: Computer Organization</li>
          <li>CSCE411: Design/Analysis of Algorithms</li>
          <li>CSCE314: Programming Languages</li>
        </ul>
      <p>For the semester of Fall 2020, here are my relevant courses: </p>
        <ul>
            <li>CSCE313: Introduction to Computer Systems</li>
            <li>CSCE315: Programming Studio</li>
            <li>CSCE436: Human Computer Interaction</li>
        </ul>
        <h5>My Hobbies Outside of Computer Science!</h5>
      <p>I have been slacking a little on my photography, but it is something I turn towards for relaxing. Here's some of my work!</p>
      <Carousel className="photoSlide">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./bigSur.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Big Sur State Park</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./jinmao.JPG')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Shanghai</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./acadia.JPG')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Acadia National Park</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <h5>My Path in Computer Science</h5>
      <p>I first started coding with simple drag-in box programming for the First Lego League. It was then I knew I wanted to do something engineering related.</p>
      <p>I then proceeded to take my first Computer Science class at my high school, which was taught in Java.</p>
      <p>My first professional step in the Computer Science field was with Computer Science Summer Institute (CSSI) 2018. It was a high school senior experience that gave me my initial experience with web development. It was a month-long program, so concepts were taught at a fast pace. When I finished the program, I learned valuable technical and soft skills, such as working in a team and how the frontend and backend work together.</p>
      <p>Upon finishing the program, I had another opportunity to intern at Fidelity Investments. At my internship, I utilized my skills to help expedite internal business operations. My team got tasked with identifying discrepancies in data during a system-wide migration. But the process was not user-friendly, so I created a full-stack web application that gathered the file data and displayed any discrepancies in an interface. I also added in features that incorporated sorting and filtering. Upon leaving the internship, I realized how important it was to be proactive in a work environment, to create a user-friendly interface, and to collaborate in an Agile methodology setting. </p>
      <p>This past summer, I had the opportunity to be a New Technologist Intern at Cyborg Mobile/Microsoft. This experience taught me the lifecycle of the entire web development process. What set this internship apart from most others was that we had to identify a problem and come up with a solution ourselves. However, between the problem and solution, we had to conduct user research and prototype. Much like what my CSCE315 class taught me, our planning stage is more crucial than coding. For our problem statement, we identified that younger generations were not participating in local government, such as voting. You can learn more about my team’s solution in the “Portfolio” tab. I left this program with skills in using React, prototyping in Figma, and utilizing Git to collaborate with my team.</p>
      <p>In the future, I hope to experiment in full-stack development, data science, and cybersecurity work. I am trying to keep an open-mind in Computer Science, so I am open to any opportunities.</p>
    </div>
    </div>
  );
}

export default AboutMe;
