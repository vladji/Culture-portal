import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { navigate } from "gatsby"

const Navigation = () => {
  const onLinkClickHandler = (e, target) => {
    e.preventDefault()
    navigate(target)
  }
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand
        href="/"
        onClick={e => {
          onLinkClickHandler(e, "/")
        }}
      >
        Belarusian Filmmakers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-mr_left">
          <Nav.Link
            href="/temp/main"
            onClick={e => {
              onLinkClickHandler(e, "/temp/main")
            }}
          >
            Main
          </Nav.Link>
          <Nav.Link
            href="#ho"
            onClick={e => {
              onLinkClickHandler(e, "/")
            }}
          >
            Filmmakers
          </Nav.Link>
          <Nav.Link
            href="/temp/author"
            onClick={e => {
              onLinkClickHandler(e, "/")
            }}
          >
            Our team
          </Nav.Link>
          <Nav.Link
            href="#ha"
            onClick={e => {
              onLinkClickHandler(e, "/")
            }}
          >
            Worklog
          </Nav.Link>
          <Nav.Link
            href="#hq"
            onClick={e => {
              onLinkClickHandler(e, "/")
            }}
          >
            Styleguide
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
