import React, { Component } from 'react';

export default class SearchBar extends Component {


  render() {
    const {handleSearchInput, handleSubmit} = this.props
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button  type="submit" className="SearchForm-button" >
            <span>Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            onChange={handleSearchInput}
          />
        </form>
      </header>
    );
  }
}
