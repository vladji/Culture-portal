import React from 'react'

import '../src/pages/temp/styleguide.css'

export default {
  title: 'Color',
};

export const primary = () => {
  return (
    <div style={{backgroundColor: '#010000'}} className="color-card">
        <span className="color-value">#010000</span>
    </div>
  )
}

export const secondary = () => {
  return (
    <div style={{backgroundColor: '#1a1a1a'}} className="color-card">
      <span className="color-value">#1a1a1a</span>
    </div>
  )
}

export const green = () => {
  return (
    <div style={{backgroundColor: '#4bbf73'}} className="color-card">
      <span className="color-value">#4bbf73</span>
    </div>
  )
}

export const red = () => {
  return (
    <div style={{backgroundColor: '#d9534f'}} className="color-card">
      <span className="color-value">#d9534f</span>
    </div>
  )
}

export const grey = () => {
  return (
    <div style={{backgroundColor: '#f7f7f9'}} className="color-card">
      <span className="color-value">#f7f7f9</span>
    </div>
  )
}
