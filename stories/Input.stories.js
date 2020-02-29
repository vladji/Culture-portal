import React from 'react'
import SearchInput from '../src/components/Input/SearchInput/SearchInput'

export default {
  title: 'Input',
  decorators: [
    (story) => (
      <div style={{ padding: '3%' }}>
        {story()}
      </div>
    )
  ]
}

const handleChange = () => {
}

const mockData = {
  outherClasses: "mb-5",
  innerClasses: "search-bar",
  handleChange: handleChange,
  placeholder: "Type name or city..."
}

export const Search = () => {
  return (
    <div className="row">
      <div className="col-6">
        <SearchInput {...mockData} />
      </div>
    </div>
  )
}
