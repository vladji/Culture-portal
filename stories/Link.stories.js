import React from 'react'
import { storiesOf } from '@storybook/react'
import { Navbar, Nav } from 'react-bootstrap'

import '../src/styles/bootstrap.min.css'

export default {
  decorators: [story => <div style={{ padding: '3%', maxWidth: '300px' }}>{story()}</div>],
  title: 'Link',
}

export const NavLink = () => {
  return (
  <Navbar className="navbar navbar-dark bg-primary">
	  <Nav>
	    <Nav.Link href="/">
	      Home page
	    </Nav.Link>
	   </Nav>
   </Navbar>
  )
}