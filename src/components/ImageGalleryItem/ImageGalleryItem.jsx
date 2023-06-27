import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isVisible: false,
    image: '',
  };

  onSaveImgModal = evt => {
    this.setState({
      image: evt,
      isVisible: true,
    });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.onHideModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.onHideModal();
    }
  };

  onHideModal = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { image, isVisible } = this.state;

    return (
      <>
        {this.props.images.map(({ id, largeImageURL, webformatURL }) => (
          <li
            key={id}
            className={css.imageGalleryItem}
            onClick={() => {
              this.onSaveImgModal(largeImageURL);
            }}
          >
            <img
              className={css.imageGalleryItemImage}
              src={webformatURL}
              alt=""
            />
          </li>
        ))}
        {isVisible && (
          <Modal
            image={image}
            handleOverlayClick={this.onHideModal}
            handleKeyDown={this.handleKeyDown}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  isVisible: PropTypes.bool,
  image: PropTypes.string,
};

export default ImageGalleryItem;
