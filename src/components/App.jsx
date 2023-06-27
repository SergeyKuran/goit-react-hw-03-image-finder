import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';

import css from './App.module.css';

class App extends Component {
  state = {
    searchText: '',
    error: null,
    images: [],
    isLoading: false,
    page: 1,
    totalImages: 0,
  };

  componentDidUpdate(_, prevState) {
    const BASE_URl = 'https://pixabay.com/api/';
    const API_KEY = '16104754-fccb05fa4a4190bcc2750c19f';
    const { searchText, page } = this.state;

    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== page
    ) {
      this.setState({ isLoading: true });
      fetch(
        `${BASE_URl}?key=${API_KEY}&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(new Error());
        })
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            totalImages: data.total,
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  onSubmit = value => {
    this.setState({
      searchText: value,
      images: [],
      page: 1,
    });
  };

  onButtonClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, totalImages } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onFormSubmitApp={this.onSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && images.length < totalImages && (
          <Button onClick={this.onButtonClick} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  searchText: PropTypes.string,
  eror: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  totalImages: PropTypes.number,
};

export default App;
