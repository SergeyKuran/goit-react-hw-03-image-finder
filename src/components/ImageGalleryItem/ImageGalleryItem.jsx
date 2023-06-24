import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  onClickModal = () => {};

  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, largeImageURL, webformatURL }) => (
          <li key={id} className={css.imageGalleryItem}>
            <img
              className={css.imageGalleryItemImage}
              src={largeImageURL}
              alt=""
              onClick={() => {
                this.onClickModal();
              }}
            />
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  searchText: PropTypes.string,
  error: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageGalleryItem;
