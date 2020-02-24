import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default {
	title: 'Dropdown',
}


export const LangSwitcher = () => {
	return (
		<DropdownButton
	      title='En'>
	      <Dropdown.Item as="button" data-lang="en">EN</Dropdown.Item>
	      <Dropdown.Item as="button" data-lang="by">BY</Dropdown.Item>
	      <Dropdown.Item as="button" data-lang="ru">RU</Dropdown.Item>
	    </DropdownButton>
    )
} 
