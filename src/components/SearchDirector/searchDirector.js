import React, { useState } from 'react';

import AuthorsList from './AuthorsList/authorsList';
import { getFields } from "../../utils/fields"
import SearchInput from '../Input/SearchInput/SearchInput'

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
          <SearchInput
            outherClasses="mb-5"
            innerClasses=" search-bar"
            handleChange={updateListHandler}
            placeholder={getFields('searchPlaceholder', sourceFields, lang)} />
        </div>
      </div>
      <div className="min-vh-100">
        <AuthorsList
          list={authorsList} lang={lang} sourceFields={sourceFields} />
      </div>
    </>
  );
};

export default SearchDirector;
