import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './WorksList.css'

const WorksList = ({ data, yearHeader, filmHeader }) => {
	const items = data.map(el => {
		return (
			<tr key={el.description}>
				<td>{el.date}</td>
				<td>{el.description}</td>
			</tr>
		)
	})

	return (
		<div className="table-wrapper">
			<Table className="table table-hover works-list">
				<thead>
					<tr>
						<th>{yearHeader}</th>
						<th>{filmHeader}</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
			</Table>
		</div>
	)
}

WorksList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape(
			{
				date: PropTypes.string,
				description: PropTypes.string,
			}
		)
	).isRequired
}

export default WorksList