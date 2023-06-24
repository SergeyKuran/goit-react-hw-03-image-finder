import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchText: '',
  };

  hangleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchText: value.toLowerCase() });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { searchText } = this.state;

    if (searchText.trim() === '') {
      alert('Please enter text from search images and photos');
      return;
    }

    this.props.onFormSubmitApp(searchText);
    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.hangleChange}
            className={css.searchFormInput}
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
