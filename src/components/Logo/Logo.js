import React from 'react'

import './Logo.css'

const Logo = ({ title }) => {
	return (
		<>
			<span role="img" className="logo-image">📽</span>️
	        <span className="logo-text link">
				{title}
			</span>
		</>
	)
}

export default Logo
