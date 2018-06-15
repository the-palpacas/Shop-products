import React from 'react';
// import styled from 'styled-components';

// const SearchBarWrapper = styled.form`
//   margin-bottom: 1rem!important;
//   display: flex;
//   align-items: stretch;
//   width: 100%;
//   margin-top: 5px;
//   height: 30px;
//   border-radius: 2px;
//   border: 1px solid #ced4da;
// `

// const Button = styled.button`
//   margin-right: -1px;
//   display: flex;
//   background-image: url('https://www.w3schools.com/css/searchicon.png');
//   background-repeat: no-repeat;
//   background-position: 5px 5px;
//   background-size: 18px 18px;
//   border: none;
//   width: 30px;
//   border-right-color: white;
//   box-sizing: border-box;
// `
// const SearchInput = styled.input`
//   font-weigth: 100;
//   width: 100%;
//   padding: .375rem .75rem;
//   font-size: 14px;
//   color: gray;
//   padding-bottom: 4px;
//   box-sizing: border-box;
//   border: none;
// `

const SearchBar = (props) => {
  return (
      <form className="searchBarWrapper btn-outline-secondary">
          <button className="searchButton" type="submit" onClick={props.handleSearch}>
          </button>
         <input className="SearchInput" type="text" className="form-control searchInput" id="inlineFormInputName2" placeholder="Search items" 
          onChange={props.updateSearchState} />
      </form>
  );
};

export default SearchBar;

