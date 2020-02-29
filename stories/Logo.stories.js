import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../src/components/Logo/Logo.js'

export default {
  component: Logo,
  title: 'Logo',
  decorators: [story => <div style={{ padding: '3%' }}>{story()}</div>],
}

export const ProjectLogo = () => {
	return (
		<Logo />
	)
}

export const NavbarProjectLogo = () => {
	return (
		<div className="col-6">
			<Navbar className="navbar navbar-dark bg-primary">
				<Navbar.Brand href="#">
					<Logo />
				</Navbar.Brand>
			</Navbar>
		</div>
	)
}
