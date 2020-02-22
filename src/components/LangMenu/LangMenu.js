import React from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const LangMenu = (props) => {
  let currentLang = null;
  let langTitle = React.createRef();

  const setLangTitle = () => {
    langTitle.current.firstElementChild.innerText = currentLang;
  }

  const setLocalStore = (e) => {
    window.localStorage.setItem('store-lang', e.target.dataset.lang);
    props.setLang(e.target.dataset.lang);
    
    currentLang = e.target.dataset.lang.toUpperCase();
    setLangTitle();
  }


  return (
    <DropdownButton alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      title="EN"
      ref={langTitle}>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="en">En</Dropdown.Item>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="by">By</Dropdown.Item>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="ru">Ru</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
