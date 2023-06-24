import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import css from './ImageGallety.module.css';

const ImageGallery = ({ text, images }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageGallery;
