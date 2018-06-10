import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="form-group input-group mb-3">
      <form>
        <div className="input-group-prepend">
          <button type="submit" className="btn btn-outline-secondary" onClick={props.handleSearch} >
            button
          </button>
        </div>
        <input type="text" className="form-control" placeholder="Search" 
          onChange={props.updateSearchState} />
      </form>
    </div>
  );
};

export default SearchBar;
