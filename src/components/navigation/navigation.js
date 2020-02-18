import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Belarusian Filmmakers</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="custom-mr_left">
        <Nav.Link href="/temp/main">Main</Nav.Link>
        <Nav.Link href="#ho">Filmmakers</Nav.Link>
        <Nav.Link href="#hm">Our team</Nav.Link>
        <Nav.Link href="#ha">Worklog</Nav.Link>
        <Nav.Link href="#hq">Styleguide</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar >
)

export default Navigation