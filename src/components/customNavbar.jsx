import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import './customNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (

      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="#" className="navbar-brand" >
          <Link to ="/"><i className="fas fa-video"></i></Link>
        <strong style={{fontSize:20, marginLeft:10,}}><Link to ="/"> Moviesearch DB</Link></strong>
                </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link}  href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link}  href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}
