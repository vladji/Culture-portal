import React from 'react';
import { navigate } from "gatsby"
import { DropdownButton, Dropdown } from 'react-bootstrap';

const LangMenu = (props) => {
  let langBtn = React.createRef();

  const setLangTitle = (langTitle) => {
    langBtn.current.firstElementChild.innerText = langTitle;
  }

  const onLinkClickHandler = (e) => {
    let contentLang = null;
    if (e.target.dataset.lang !== 'by') {
      contentLang = e.target.dataset.lang
    } else {
      contentLang = '';
    }
    console.log('contentLang', contentLang)
    props.setLang(contentLang);

    const langTitle = e.target.dataset.lang.toUpperCase();
    setLangTitle(langTitle);
    window.localStorage.setItem('store-lang', langTitle);

    const pathSplit = window.location.pathname.split('/')
    pathSplit.length = pathSplit.length - 1;
    const newPath = pathSplit.join('/');
    const path = newPath + '/' + contentLang;
    navigate(path);
  }


  return (
    <DropdownButton alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      title={window.localStorage.getItem('store-lang') ? window.localStorage.getItem('store-lang') : "BY"}
      ref={langBtn}>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="en">EN</Dropdown.Item>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="by">BY</Dropdown.Item>
      <Dropdown.Item as="button" onClick={onLinkClickHandler} data-lang="ru">RU</Dropdown.Item>
    </DropdownButton>
  )
}

export default LangMenu;
