import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navigation from "./Navigation";

import { CardDeck, Card, Button } from 'react-bootstrap';

function Services() {
  return (
    <div>
      <Navigation/>
      <div className = "cardFormat">
      <Sidebar/>
      <h1>Services</h1>
      <hr></hr>
      <CardDeck className="cardDeck">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./dfwAirport.png')} />
              <Card.Body>
                <Card.Title>Navigator's Program at DFW Airport</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Helped international passengers to their destination gate at the large DFW airport.</li>
                    <li>Volunteered 4 hours a week each time I volunteered.</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="https://www.dfwairport.com/ambassadors/">More Info on Navigator Program</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./NLGC.png')} />
              <Card.Body>
                <Card.Title>NLGC Missionary Trip</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Helped host an 8-day summer camp for a school in the GanSu province in China.</li>
                    <li>Assisted in teaching some Science and English courses.</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="http://nlgcenglish.org/">More Info of NLGC</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ require('./Baylor.jpg')} />
              <Card.Body>
                <Card.Title>Baylor Scott&White</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Provided guidance for patients at Baylor Scott&White</li>
                    <li>Volunteered about 80 hours in total</li>
                  </ul>
                </Card.Text>
                <Button variant="primary" href="https://www.bswhealth.com/about/pages/become-a-volunteer.aspx">More Info on Baylor Scott&White</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          <br></br>
          <CardDeck className="cardDeck">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ require('./bigevent.png')} />
                <Card.Body>
                  <Card.Title>Big Event</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Helped any residents at College Station, with anything they wanted</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="https://bigevent.tamu.edu/">More Info on Big Event</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ require('./intellichoice.png')} />
                <Card.Body>
                  <Card.Title>IntelliChoice</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Provided free math tutoring for students in the DFW area weekly.</li>
                      <li>IntelliChoice serves to support economically disadvantaged kids to succeed in mathematics and education.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="https://www.intellichoice.org/">More Info on IntelliChoice</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ require('./metrocrest.jpg')} />
                <Card.Body>
                  <Card.Title>Metrocrest Volunteer</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Helped at Metrocrest's food and supply pantry</li>
                      <li>Metrocrest serves local Dallas communities by providing family programs to be self sufficient</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="https://www.metrocrestservices.org/">More Info on Metrocrest</Button>
                </Card.Body>
              </Card>
          </CardDeck>
    </div>
    </div>
  );
}

export default Services;
