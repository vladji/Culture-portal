import React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Navbar, Nav } from "react-bootstrap";
import LangMenu from "../LangMenu/LangMenu";
import Logo from '../Logo/Logo'
import { getLangPath } from "../../utils/language"
import { getFields } from "../../utils/fields"

import './navigation.css'


const Navigation = ({ location }) => {
  const query = useStaticQuery(graphql`
  query {
    logo: markdownRemark(
      frontmatter: { type: { eq: "page" }, name: { eq: "main" } }
    ) {
      frontmatter {
        fields {
          fieldName
          fieldData {
            ru
            be
            en
          }
        }
      }
    }
    navigation: markdownRemark(
      frontmatter: { type: { eq: "navigation" } }
    ) {
      frontmatter {
        navigations {
          name
          navigation {
            ru
            be
            en
          }
        }
      }
    }
  }
  `)

  const navigationData = query.navigation.frontmatter.navigations;
  const getLang = () => {
    switch (true) {
      case (location.pathname.indexOf('/ru/') !== -1): return 'ru';
      case (location.pathname.indexOf('/en/') !== -1): return 'en';
      default: return 'be';
    }
  }
  const lang = getLang();
  const logoSource = query.logo.frontmatter.fields;
  const logoTitle = getFields("logo", logoSource, lang)

  const getLabel = (name) => {
    return navigationData.find(el => el.name === name).navigation[lang];
  }

  const onLinkClickHandler = (e, path) => {
    e.preventDefault();
    navigate(path + getLangPath(lang));
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-primary">
      <Navbar.Brand href="/" onClick={(e) => onLinkClickHandler(e, '')} className="navbar-brand">
        <Logo title={logoTitle} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-mr_left">
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, '')}>{getLabel('main')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'search/')}>{getLabel('filmmakers')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'developers/')}>{getLabel('ourTeam')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'worklog/')}>{getLabel('worklog')}</Nav.Link>
          <Nav.Link href="/" onClick={(e) => onLinkClickHandler(e, 'styleguide/')}>{getLabel('styleguide')}</Nav.Link>
          <LangMenu location={location} lang={lang} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
