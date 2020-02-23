import React from 'react'
import { Form, Button } from 'react-bootstrap'

import '../src/styles/bootstrap.min.css'

export default {
  title: 'Form',
}

/**
 * You have to provide unique id for input
 */

export const searchForm = () => {
  return (
    <Form className="form-inline">
      <Form.Control placeholder="Search..." type="text" className="form-control"/>
      <Button className="btn btn-primary ml-2" type="submit">Search</Button>
    </Form>
  )
}
