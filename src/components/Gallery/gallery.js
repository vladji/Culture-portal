import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './gallery.css';

const Gallery = ({ ptashuk: { gallery } }) => (
    <>
        <Carousel 
            interval={null}
            className='carousel--wrapper'
        >
            {gallery.map(picture => (
                <Carousel.Item>
                    <Carousel.Caption>
                        <div>
                            <img src={picture} />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </>
);

export default Gallery;