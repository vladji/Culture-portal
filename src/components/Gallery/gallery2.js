import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery2.css';

const Gallery2 = ({ ptashuk: { gallery } }) => (
    <>
        <Carousel 
            className='carousel-custom--wrapper'
            showArrows={true} 
            infiniteLoop={true}>
            {gallery.map(picture => (
                <img src={picture} />
            ))}
        </Carousel>
    </>
);

export default Gallery2;