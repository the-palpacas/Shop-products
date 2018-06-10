import React from 'react';

const SearchBar = (props) => {
  return (
      <form className="form-inline input-group mb-3">
        <div className="input-group-prepend">
          <button type="submit" className="btn btn-outline-secondary" onClick={props.handleSearch} >
          <span></span>
          </button>
        </div>
       <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Search" 
          onChange={props.updateSearchState} />
      </form>
  );
};

export default SearchBar;
