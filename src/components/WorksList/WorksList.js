import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './WorksList.css'

const WorksList = ({ data }) => {
	const items = data.map( el => {
		return (
			<tr key={el.description}>
		      <td>{el.date}</td>
		      <td>{el.description}</td>
		    </tr>
		)
	})

	return (
		<Table className="table table-hover works-list">
		  <thead>
		    <tr>
		      <th>Year</th>
		      <th>Film</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{items}
		  </tbody>
		</Table>
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