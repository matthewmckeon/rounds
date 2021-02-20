import React, { Component } from 'react';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg' className='sticky'>
        <Navbar.Brand href='/'>Rounds App - A CRUD app for golfers</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/create'>Create Round</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
