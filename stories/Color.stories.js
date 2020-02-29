import React from 'react'

export default {
  title: 'Color',
  decorators: [
    (story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {story()}
      </div>
      )
    ]
};

export const Primary = () => {
  return (
    <div style={{backgroundColor: '#1a1a1a'}} className="color-card">
      <span className="color-value">#1a1a1a</span>
    </div>
  )
}

export const Secondary = () => {
  return (
    <div style={{backgroundColor: '#ffffff'}} className="color-card">
      <span className="color-value">#ffffff</span>
    </div>
  )
}

export const Font = () => {
  return (
    <div style={{backgroundColor: '#55595c'}} className="color-card">
      <span className="color-value">#55595c</span>
    </div>
  )
}

export const Accent = () => {
  return (
    <div style={{backgroundColor: '#4bbf73'}} className="color-card">
      <span className="color-value">#4bbf73</span>
    </div>
  )
}

export const Black = () => {
  return (
    <div style={{backgroundColor: '#010000'}} className="color-card">
        <span className="color-value">#010000</span>
    </div>
  )
}

export const Grey = () => {
  return (
    <div style={{backgroundColor: '#f7f7f9'}} className="color-card">
      <span className="color-value">#f7f7f9</span>
    </div>
  )
}
