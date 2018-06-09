import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="form-group">
      <form className="col-xs-3">
        <input className="searchBar form-control" type="text" name="search" placeholder="Search items" />
        <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" />
      </form>
    </div>
  );
};

export default SearchBar;
