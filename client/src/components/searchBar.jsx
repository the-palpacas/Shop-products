import React from 'react';

const SearchBar = function(props) {
  return (
    <div className="searchBar form-group">
      <form>
        <input className="form-control" type="text" name="search" placeholder="Search items" />
        <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
      </form>
    </div>
  )
}

export default SearchBar;
