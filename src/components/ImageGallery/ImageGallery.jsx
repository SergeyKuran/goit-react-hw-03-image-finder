import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallety.module.css';

const ImageGallery = text => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem searchText={text} />
    </ul>
  );
};

export default ImageGallery;
