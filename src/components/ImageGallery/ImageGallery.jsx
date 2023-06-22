import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import css from './ImageGallety.module.css';

const ImageGallery = ({ text }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem searchText={text} />
    </ul>
  );
};

ImageGallery.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ImageGallery;
