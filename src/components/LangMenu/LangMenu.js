import React from 'react';
import {  NavDropdown } from 'react-bootstrap';
import { onLinkClickHandler } from "../../utils/language"

const LangMenu = ({ location, lang }) => {
  if (lang === 'be') lang = 'BY'

  return (
    <NavDropdown alignRight
      id="dropdown-menu-align-right"
      title={lang}>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('/en/', location.pathname, lang)}>EN</NavDropdown.Item>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('', location.pathname, lang)}>BY</NavDropdown.Item>
      <NavDropdown.Item  onClick={()=>onLinkClickHandler('/ru/', location.pathname, lang)}>RU</NavDropdown.Item>
    </NavDropdown>
  )
}

export default LangMenu;
