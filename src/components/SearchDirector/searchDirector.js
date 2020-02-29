import React, { useState } from 'react';

import AuthorsList from './AuthorsList/authorsList';
import { getFields } from "../../utils/fields"

import './searchDirector.css';

function SearchDirector({ authors, lang, sourceFields }) {
  const [authorsList, authorsListHander] = useState(authors);

  const updateListHandler = (e) => {
    const value = e.target.value.toLowerCase();
    const newList = authors.filter(author => {
      return (
        author.name.toLowerCase().includes(value) ||
        author.city.toLowerCase().includes(value)
      );
    });
    authorsListHander(newList);
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6">
          <div className="form-group mb-5">
            <input
              type="text"
              placeholder={getFields('searchPlaceholder', sourceFields, lang)}
              className="form-control search-bar"
              onChange={updateListHandler} />
          </div>
        </div>
      </div>
      <AuthorsList
        list={authorsList} lang={lang} sourceFields={sourceFields}
      />
    </>
  );
};

export default SearchDirector;
