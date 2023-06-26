import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import css from './ImageGallety.module.css';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageGallery;
