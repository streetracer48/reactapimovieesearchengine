import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './customNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="#" className="navbar-brand" >
        <i className="fa fa-camera" aria-hiden="true"></i>
                    <strong className="logo-text">MovieSearchDB</strong>
                </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}  href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2}  href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3}  href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
