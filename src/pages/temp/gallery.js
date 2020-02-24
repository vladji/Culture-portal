import React from 'react';
import Gallery from '../../components/Gallery/gallery';
import Gallery2 from '../../components/Gallery/gallery2';

const authorGallery = [
    {
        alt: 'Very old man with huge wings',
        src: '/assets/Authors/Belousov/gallery/belousovpic1.png',
    },
    {
        alt: 'Cube',
        src: '/assets/Authors/Belousov/gallery/belousovpic2.png',
    },
    {
        alt: 'Rook of despair',
        src: '/assets/Authors/Belousov/gallery/belousovpic3.png',
    },
    {
        alt: 'A Song about aurochs',
        src: '/assets/Authors/Belousov/gallery/belousovpic4.png',
    },
    {
        alt: 'Tale of a funny clown',
        src: '/assets/Authors/Belousov/gallery/belousovpic5.png',
    },
    {
        alt: 'Nesterka',
        src: '/assets/Authors/Belousov/gallery/belousovpic6.png',
    }
]

const myGallery = () => (
    <div>
        <Gallery authorGallery={authorGallery} />
        <Gallery2 authorGallery={authorGallery} />
    </div>
)

export default myGallery;