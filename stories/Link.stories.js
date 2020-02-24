import React from 'react'
import { Button } from 'react-bootstrap'

import '../src/styles/bootstrap.min.css'
import '../src/styles/main.css'

export default {
  title: 'Link',
}

export const regularLink = () => {
  return (
    <a href="/" className="link">
      This is just a regular link
    </a>
  )
}

export const buttonShapedLink = () => {
  return (
    <Button href="/" variant="outline-primary" className="btn btn-outline-primary">
      Link
    </Button>
  )
}