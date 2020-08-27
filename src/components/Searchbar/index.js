import React from 'react'

const SearchBar = ({value, onChange}) => {
    return(
      <div className="searchbar">
        <div className="input-container">
          <input className="search-input" value={value} onChange={e => onChange(e.target.value)}/>
        </div>
      </div>
    )
  }

export default SearchBar