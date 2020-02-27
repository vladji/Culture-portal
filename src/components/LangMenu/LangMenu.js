import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { onLinkClickHandler } from "../../utils/language"

const LangMenu = ({ location, lang }) => {




  return (
    <DropdownButton alignRight
      id="dropdown-menu-align-right"
      title={lang}>
      <Dropdown.Item as="button" onClick={()=>onLinkClickHandler('/en/', location.pathname, lang)} data-lang="en">EN</Dropdown.Item>
      <Dropdown.Item as="button" onClick={()=>onLinkClickHandler('', location.pathname, lang)} data-lang="be">BY</Dropdown.Item>
      <Dropdown.Item as="button" onClick={()=>onLinkClickHandler('/ru/', location.pathname, lang)} data-lang="ru">RU</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
