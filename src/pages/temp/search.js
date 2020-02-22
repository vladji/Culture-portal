import React from 'react';

import SearchDirector from '../../components/SearchDirector/searchDirector';

const authors = [
    {
        name: 'Oleg Pavlovich Belousov',
        city: 'Slutsk',
    },
    {
        name: 'Victor Nikiforovich Dashuk',
        city: 'Valoki village',
    },
    {
        name: 'Igor Mikhailovich Dobrolyubov',
        city: 'Novosibirsk city',
    },
    {
        name: 'Yury Khashchavatski',
        city: 'Odessa',
    },
    {
        name: 'Vladimir Vladimirovich Korsh-Sablin',
        city: 'Minsk',
    },
    {
        name: 'Mikhail Ptashuk',
        city: 'Minsk',
    },
]

const Search = () => (
    <SearchDirector authors={authors}/>
);

export default Search;