import React from 'react';
import Image from '../../../components/AppImage/AppImage';

import './authorsList.css';

const AuthorList = ({ list }) => {
    return (
        <ul className='authors-list--wrapper'>
            {list.map(author => (
                <a 
                    href={author.slug}
                    key={author.titleText}
                >
                    <Image 
                        className='image'
                        src={author.pathname} 
                    />
                    <li key={author.bday}>
                        <p className='author-name'>{author.name}</p>
                        <p className='author-years'>{author.bday}</p>
                        <p className='author-title'>{author.titleText}</p>
                    </li>
                </a>
            ))}
        </ul>
    );
};

export default AuthorList;