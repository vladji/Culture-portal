import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery2.css';

const Gallery2 = ({ authorGallery }) => {
    return (
        <Carousel
            className='carousel-custom--wrapper'
            showArrows={true}
            infiniteLoop={true}
            showThumbs={true}
            >
            {authorGallery.map(author => (
                <img src={author.src} alt={author.alt} key={author.src} className='slide-image'/>
            ))}
        </Carousel>
    );
};

export default Gallery2;