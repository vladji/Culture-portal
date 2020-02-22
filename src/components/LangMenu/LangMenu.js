import React from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const LangMenu = (props) => {
  let langTitle = React.createRef();

  const setLangTitle = (currentLang) => {
    langTitle.current.firstElementChild.innerText = currentLang;
  }

  const setLocalStore = (e) => {
    window.localStorage.setItem('store-lang', e.target.dataset.lang);
    props.setLang(e.target.dataset.lang);

    const currentLang = e.target.dataset.lang.toUpperCase();
    setLangTitle(currentLang);
  }


  return (
    <DropdownButton alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      title={window.localStorage.getItem('store-lang') ? window.localStorage.getItem('store-lang') : "EN"}
      ref={langTitle}>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="en">EN</Dropdown.Item>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="by">BY</Dropdown.Item>
      <Dropdown.Item as="button" onClick={setLocalStore} data-lang="ru">RU</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
