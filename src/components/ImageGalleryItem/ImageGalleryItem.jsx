import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    searchText: '',
    error: null,
  };

  componentDidUpdate(nextProps, _) {
    const BASE_URl = 'https://pixabay.com/api/';
    const API_KEY = '16104754-fccb05fa4a4190bcc2750c19f';
    const page = 1;

    if (nextProps.searchText !== this.props.searchText) {
      fetch(
        `${BASE_URl}?key=${API_KEY}&q=${this.props.searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => {
          if (resp.ok) {
            resp.json();
          }
          return Promise.reject(new Error());
        })
        .then(data => console.log(data, 'data'))
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    console.log(this.state);
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.searchText}
          alt=""
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
