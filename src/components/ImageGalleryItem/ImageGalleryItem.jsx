import searchText from 'Data/getPixebay';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  const { id } = searchText;
  console.log(searchText(), 'seach');
  console.log(id, 'id imageGallery');
  return (
    <li key={id} className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
