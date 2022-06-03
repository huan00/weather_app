import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ handleZipcode, handleSearch, zipcode }) => {
  return (
    <div className="search">
      <div className="search-container">
        <input
          className="search-input"
          type="number"
          value={zipcode}
          placeholder="Enter Zipcode"
          onChange={handleZipcode}
        ></input>
        <BsSearch className="search-icon" onClick={handleSearch} />
      </div>
    </div>
  )
}

export default Search
