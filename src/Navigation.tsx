import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './App.css';

export default class Navigator extends Component {
  render(){
    return (
      <div>
          <Navbar sticky="top" bg="primary" variant="dark">
          <Navbar.Brand>Alex Wu</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink tag={Link} to="/" >Home</NavLink>
              <NavLink tag={Link} to="/AboutMe" >About Me</NavLink>
              <NavLink tag={Link} to="/portfolio" >Portfolio</NavLink>
              <NavLink tag={Link} to="/Qualifications" >Qualifications</NavLink>
              <NavLink tag={Link} to="/Services" >Services</NavLink>
            </Nav>
          </Navbar>
      </div>
    );
  }
}