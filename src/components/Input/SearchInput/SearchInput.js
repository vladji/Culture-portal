import React from 'react'

const SearchInput = ({ outherClasses, innerClasses, placeholder, handleChange }) => {
	return (
		<div className={`form-group ${outherClasses}`}>
          <input
            type="text"
            placeholder={placeholder}
            className={`form-control ${innerClasses}`}
            onChange={handleChange} />
	    </div>
	)
}

export default SearchInput