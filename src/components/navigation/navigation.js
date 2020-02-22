import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LangMenu from "../LangMenu/LangMenu";

const Navigation = () => {
  const [lang, setLang] = React.useState('en');

  const handleClick = (e) => {
    e.target.href = `${e.target.dataset.path}${lang}`;
    console.log('href', e.target.href);
    e.preventDefault();
  }

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Belarusian Filmmakers</Navbar.Brand>
      <LangMenu setLang={setLang} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-mr_left">
          <Nav.Link href="/" onClick={handleClick} data-path="main/">Main</Nav.Link>
          <Nav.Link href="/">Filmmakers</Nav.Link>
          <Nav.Link href="/temp/author">Our team</Nav.Link>
          <Nav.Link href="/">Worklog</Nav.Link>
          <Nav.Link href="/" onClick={handleClick} data-path="styleguide/">Styleguide</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
