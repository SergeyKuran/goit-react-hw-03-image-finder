import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isVisible: false,
  };

  onSnowModal = () => {
    this.setState({ isVisible: true });
  };

  onHideModal = () => {
    this.setState({
      isVisible: false,
    });
  };

  // onClickEsc = evt => {
  //   if (evt.target.code === 'ESC') {
  //     this.onHideModal();
  //   }
  // };

  render() {
    const { isVisible } = this.state;
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
                this.onSnowModal();
              }}
            />
            {isVisible && (
              <Modal onClick={this.onHideModal} image={webformatURL} />
            )}
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  isVisible: PropTypes.bool,
};

export default ImageGalleryItem;
