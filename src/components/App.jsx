import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import css from './App.module.css';
// import Modal from './Modal';

class App extends Component {
  state = {
    searchText: '',
  };

  onSubmit = text => {
    this.setState({ searchText: text });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery text={searchText} />
      </div>
    );
  }
}

App.propTypes = {
  searchText: PropTypes.string,
};

export default App;
