import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './gallery.css';

const Gallery = ({ authorGallery }) => (
    <>
        <Carousel 
            interval={null}
            className='carousel--wrapper'
        >
            {authorGallery.map(author => (
                <Carousel.Item>
                    <Carousel.Caption>
                        <div>
                            <img src={author.src} alt={author.alt} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </>
);

export default Gallery;