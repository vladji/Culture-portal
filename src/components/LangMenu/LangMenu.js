import React from 'react';
import { navigate } from "gatsby"
import { DropdownButton, Dropdown } from 'react-bootstrap';

const LangMenu = ({ lang, location }) => {
  let currentLang = lang;
  if (!lang) currentLang = 'BY'

  const onLinkClickHandler = (e) => {
    let contentLang = null;
    if (e.target.dataset.lang !== 'by') {
      contentLang = e.target.dataset.lang
    } else {
      contentLang = '';
    }

    const pathSplit = location.pathname.split('/')
    pathSplit.length = pathSplit.length - 1;
    const newPath = pathSplit.join('/');
    const path = newPath + '/' + contentLang;
    navigate(path);
  }


  return (
    <DropdownButton
      id="dropdown-menu-align-right"
      title={currentLang}>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="en">EN</Dropdown.Item>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="by">BY</Dropdown.Item>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="ru">RU</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
