import React, { useState } from 'react';

import AuthorsList from './AuthorsList/authorsList';
import './searchDirector.css';

function SearchDirector({ authors }) {
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
            <input
                type="text"
                onChange={updateListHandler}
                className="search-bar"
                placeholder="Type director name or city..."
            />
            <AuthorsList 
                list={authorsList}
            />
        </>
    );
};

export default SearchDirector;