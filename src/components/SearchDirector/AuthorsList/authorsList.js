import React from 'react';
import Image from '../../../components/AppImage/AppImage';
import { Button } from 'react-bootstrap';
import {navigate} from 'gatsby';

import './authorsList.css';
import { getLangPath } from "../../../utils/language"
import { getFields } from "../../../utils/fields"

const AuthorList = ({ list, lang, sourceFields }) => {
    const items = list.map((author) => {
        return (
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 col-xl-4 mb-5"
                key={author.name}>
                <div className="card">
                    <div className="card-body">
                        <Image
                            src={author.pathname}
                            alt={author.name}
                        />
                        <h4 className="author-name">
                            {author.name}
                        </h4>
                        <h5>{author.city}</h5>
                        <div className="card-text">
                          <p className='author-years'>{author.bday}</p>
                          <p className='author-title'>{author.titleText}</p>
                        </div>
                        <div className="link-wrapper">
                            <Button href={author.slug} className="btn btn-primary" onClick={(e)=>{
                                e.preventDefault();
                                navigate(`directors/${author.slug}/${getLangPath(lang)}`);
                            }}>
                                {getFields('labelMore', sourceFields, lang)}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {items}
        </div>
    )
}

export default AuthorList
