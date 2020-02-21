import React from 'react';
import Gallery from '../../components/Gallery/gallery';

import exmp1 from '../../images/directors/Ptashuk/gallery/pic1.png';
import exmp2 from '../../images/directors/Ptashuk/gallery/pic2.png';
import exmp3 from '../../images/directors/Ptashuk/gallery/pic3.png';
import exmp4 from '../../images/directors/Ptashuk/gallery/pic4.png';
import exmp5 from '../../images/directors/Ptashuk/gallery/pic5.png';
import exmp6 from '../../images/directors/Ptashuk/gallery/pic6.png';
import exmp7 from '../../images/directors/Ptashuk/gallery/pic7.png';

const ptashuk = {
    gallery: [
        exmp1, 
        exmp2, 
        exmp3, 
        exmp4, 
        exmp5, 
        exmp6, 
        exmp7,
    ],
};

const myGallery = () => (
    <div>
        <Gallery ptashuk={ptashuk} />
    </div>
)

export default myGallery;