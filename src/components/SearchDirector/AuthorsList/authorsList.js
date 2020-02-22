import React from 'react';

const authorList = ({ list }) => {
    console.log(list);
    console.log(typeof(list))
    return (
        <ul>
            {list.map(author => (
                <li>
                    <p>{author.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default authorList;