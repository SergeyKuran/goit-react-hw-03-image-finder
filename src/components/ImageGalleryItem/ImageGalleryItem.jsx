import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    searchText: '',
    error: null,
    images: [],
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
            return resp.json();
          }
          return Promise.reject(new Error());
        })
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .catch(error => this.setState({ error }));
    }
  }

  getImages = () => {};

  render() {
    const { images } = this.state;
    return (
      <>
        {images.map(({ id, largeImageURL }) => (
          <li key={id} className={css.ImageGalleryItem}>
            <img
              className={css.ImageGalleryItemImage}
              src={largeImageURL}
              alt=""
            />
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  searchText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageGalleryItem;
