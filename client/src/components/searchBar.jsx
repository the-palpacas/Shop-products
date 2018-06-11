import React from 'react';

const SearchBar = (props) => {
  return (
      <form className="searchBar form-inline input-group mb-3">
        <div className="input-group-prepend">
          <button type="submit" className="btn btn-outline-secondary" onClick={props.handleSearch} >
          <span></span>
          </button>
        </div>
       <input type="text" className="form-control searchInput" id="inlineFormInputName2" placeholder="Search items" 
          onChange={props.updateSearchState} />
      </form>
  );
};

export default SearchBar;
