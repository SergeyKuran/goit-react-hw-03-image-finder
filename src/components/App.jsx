import React, { Component } from 'react';
import Searchbar from './Searchbar';

import css from './App.module.css';
import ImageGallery from './ImageGallery';
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

export default App;
