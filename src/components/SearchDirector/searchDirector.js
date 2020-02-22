import React, { useState } from 'react';

import AuthorsList from './AuthorsList/authorsList';
import './searchDirector.css';

function SearchDirector({ authors }) {
    const [authorsList, authorsListHander] = useState(authors);

    const updateListHandler = (e) => {
        const newList = authors.filter(author => {
            return author.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        authorsListHander(newList);
    }

    return (
        <>
            <input
                type="text"
                onChange={updateListHandler}
                // className="search"
            />
            <AuthorsList 
                list={authorsList}
            />
        </>
    );
};

export default SearchDirector;