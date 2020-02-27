import React from 'react'
import { Parallax } from "react-parallax";
import imageLinks from './image-links.js'

const ImageParallax = ({ children, imgKey }) => {
    return (
        <Parallax bgImage={imageLinks[imgKey]} strength={300} style={{marginBottom: '50px'}}>
          <div>
            { children }
          </div>
        </Parallax>
    )
}

export default ImageParallax