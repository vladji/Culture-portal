import React from 'react'
import { Form } from 'react-bootstrap'

import '../src/styles/bootstrap.min.css'
import '../src/pages/temp/styleguide.css'

export default {
  title: 'Input',
}

/**
 * You have to provide unique id for input
 */

export const defaultInput = () => {
  return (
    <Form.Group className="form-group">
      <Form.Label className="col-form-label" htmlFor="inputDefault"> 
        Default input
      </Form.Label>
      <Form.Control className="form-control" id="inputDefault" placeholder="Default input" />
    </Form.Group>
  )
}
