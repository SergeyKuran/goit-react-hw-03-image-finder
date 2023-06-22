import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchText: '',
  };

  hangleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchText: value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;

    if (this.state.searchText.trim() === '') {
      alert('Please enter text from search images and photos');
      return;
    }

    onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.hangleChange}
            className={css.SearchFormInput}
            value={searchText}
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

Searchbar.propTypes = {
  searchText: PropTypes.string,
};

export default Searchbar;
