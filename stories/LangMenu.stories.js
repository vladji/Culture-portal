import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default {
	title: 'LangMenu',
	decorators: [story => <div style={{ padding: '3% 150px', maxWidth: '400px' }}>{story()}</div>],
}

export const LangMenu = () => {
	return (
		<Nav>
			<NavDropdown alignRight
				id="dropdown-menu-align-right"
				title="En">
				<NavDropdown.Item>EN</NavDropdown.Item>
				<NavDropdown.Item>BY</NavDropdown.Item>
				<NavDropdown.Item>RU</NavDropdown.Item>
			</NavDropdown>
		</Nav>
	)
}

export const LangMenuInNav = () => {
	return (
		<Navbar className="navbar navbar-dark bg-primary">
			<Nav>
				<NavDropdown alignRight
					id="dropdown-menu-align-right"
					title={mockData.title}>
					<NavDropdown.Item>EN</NavDropdown.Item>
					<NavDropdown.Item>BY</NavDropdown.Item>
					<NavDropdown.Item>RU</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</Navbar>
	)
} 
