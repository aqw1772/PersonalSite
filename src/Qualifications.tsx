import React from 'react';
import './App.css';
import MyResume from './CSE2020.pdf';
import Sidebar from './Sidebar';
import Navigation from "./Navigation";

import { Card, CardDeck, Button, Badge } from 'react-bootstrap';

function Qualifications() {
  return (
    <div>
      <Navigation/>
      <div className="cardFormat">
        <Sidebar/>
        <h1> Qualifications </h1>
        <hr></hr>
        <h4>Attached below is my resume, you can download it as you wish.</h4>
        <p>I'm most interested in working with Full-Stack, Data Science, and Cybersecurity work. However, I am still open to any other opportunities. </p>
        <p>Languages I'm most to least proficient: 
        <Badge pill variant="success">
          Java
        </Badge>{' '}
        <Badge pill variant="primary">
          C++
        </Badge>{' '}
        <Badge pill variant="info">
          Python
        </Badge>{' '}
        </p>

        <iframe src={MyResume} height="800px" width="700px"></iframe>
        <hr></hr>
          <h4>Here's more information on my experiences:</h4>
          <CardDeck className="cardDeck">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./TNT.png')} />
              <Card.Body>
                <Card.Title>The New Technologist Internship</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Implemented a state-of-the-art interactive user experience with bubble-topic animated components in React.</li>
                    <li>Built a latest up-to-date news feed to increase participation in young viewers and help users stay informed in React.</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="https://newtechnologists.com/">More Info on TNT</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./Fidelity.png')} />
              <Card.Body>
                <Card.Title>Fidelity Investment LEAP Internship</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Decreased analysis time ~2x for discovering extreme discrepancies among financial data for system-wide migrations
and other internal business usage by creating a comprehensive full-stack web app with Angular, STS, Postman,
VScode, Git, and Java.</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="https://jobs.fidelity.com/page/show/students">More Info of LEAP</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./CSSI.jpg')} />
              <Card.Body>
                <Card.Title>Computer Science Summer Institute</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Created a full-stack social-media platform, A New Path, that dynamically tracked active miles during various
sustainable activities (walking, biking, and carpooling) to encourage people to live a greener and healthier lifestyle.</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="https://students.googleblog.com/2020/02/googles-computer-science-summer.html">More Info on CSSI</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        
    </div>
    </div>
  );
}

export default Qualifications;