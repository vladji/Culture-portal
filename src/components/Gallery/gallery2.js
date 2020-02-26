import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from '../AppImage/AppImage';
import './gallery2.css';

const Gallery2 = ({ authorGallery }) => (
    <>
        <Carousel 
            className='carousel-custom--wrapper'
            showArrows={true} 
            infiniteLoop={true}>
            {authorGallery.map(author => (
                <img src={author.src} alt={author.alt} key={author.src}/>
            ))}
        </Carousel>
    </>
);

export default Gallery2;