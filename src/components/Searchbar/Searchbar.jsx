import React, { Component } from 'react';
import { searchText } from 'Data/pixebayApi';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchText: '',
    value: '',
  };

  componentDidUpdate() {
    searchText(this.state.searchText);
  }

  hangleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchText: value });
  };

  onSubmit = () => {};

  render() {
    // const { value } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.hangleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
