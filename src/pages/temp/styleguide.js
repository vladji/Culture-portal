import React from 'react'
// import { Button } from 'react-bootstrap'

import '../../styles/bootstrap.min.css'
import './styleguide.css'

const Styleguide = (props) => {
  return (
    <div className="content-wrapper">
      <section className="colors">
        <h4>
          Colors
        </h4>
        <div className="colors-inner">
          <div style={{backgroundColor: '#010000'}} className="color-card">
            <span className="color-value"></span>
          </div>
          <div style={{backgroundColor: '#d9534f'}} className="color-card">
            <span className="color-value"></span>
          </div>
          <div style={{backgroundColor: '#6b6b6b'}} className="color-card">
            <span className="color-value "></span>
          </div>
          <div style={{backgroundColor: '#4bbf73'}} className="color-card">
            <span className="color-value"></span>
          </div>
          <div style={{backgroundColor: '#f7f7f9'}} className="color-card">
            <span className="color-value"></span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Styleguide