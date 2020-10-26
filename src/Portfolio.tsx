import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navigation from "./Navigation";

import { CardDeck, Card, ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap';

function Portfolio() {
  return (
    <div>
      <Navigation/>
      <div className="cardFormat">
      <Sidebar/>
      <h2 className="TitleText">My Portfolio</h2>
      <hr></hr>
      <h4>Take a look at some of my work! You can see more of it at my <a href="https://github.com/aqw1772">Github</a>, or live demo them!</h4>
      <CardDeck className="cardDeck">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ require('./CivilSupporter.PNG')} />
          <Card.Body>
            <Card.Title>Localized</Card.Title>
            <Card.Text>
              An innovative project designed to help increase local government participation for younger generations by using news aggregation and a chatbot.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>Tools: </strong>
              <Badge pill variant="primary">
                React
              </Badge>{' '}
              <Badge pill variant="secondary">
                HTML
              </Badge>{' '}
              <Badge pill variant="success">
                CSS
              </Badge>{' '}
              <Badge pill variant="info">
                Typescript
              </Badge>{' '}
              <Badge pill variant="dark">
                Microsoft Bot Framework
              </Badge>{' '}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="outline-primary" href="https://github.com/aqw1772/Localized">See the Code!</Button>{' '}
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ require('./Fidelity.png')} />
          <Card.Body>
            <Card.Title>Fidelity Investments LEAP Intern</Card.Title>
            <Card.Text>
              A project that created a user interface that showed discrepancies in data. Users can sort, search, and filter through their data. Note: I do not have the code since it was company policy.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
            <strong>Tools: </strong>
              <Badge pill variant="danger">
                Angular
              </Badge>{' '}
              <Badge pill variant="secondary">
                HTML
              </Badge>{' '}
              <Badge pill variant="success">
                CSS
              </Badge>{' '}
              <Badge pill variant="info">
                Typescript
              </Badge>{' '}
              <Badge pill variant="light">
                Java
              </Badge>{' '}
              <Badge pill variant="warning">
                Spring Boot
              </Badge>{' '}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="outline-primary" href="https://jobs.fidelity.com/page/show/leap">More Information on LEAP</Button>{' '}
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ require('./ANewPath.PNG')} />
          <Card.Body>
            <Card.Title>A New Path</Card.Title>
            <Card.Text>
              A web app that encouraged people to walk, bike, and carpool through positive commenting and tracking miles.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>Tools: </strong>
              <Badge pill variant="secondary">
                HTML
              </Badge>{' '}
              <Badge pill variant="success">
                CSS
              </Badge>{' '}
              <Badge pill variant="warning">
                Google App Engine
              </Badge>{' '}
              <Badge pill variant="light">
                Python
              </Badge>{' '}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="outline-primary" href="https://github.com/victorfigueroabuilds/ANewPath">See the Code!</Button>{' '}
            <Button variant="outline-primary" href="https://euphoric-oath-279716.nn.r.appspot.com/home">Live Demo</Button>{' '}
          </Card.Body>
        </Card>

      </CardDeck>
    </div>
    </div>
  );
}

export default Portfolio;