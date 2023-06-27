import PropTypes from 'prop-types';

import css from './Modal.module.css';

const Modal = ({ image, handleKeyDown, handleOverlayClick }) => {
  return (
    <>
      <div className={css.overlay} onClick={handleOverlayClick}>
        <div className={css.modal} onKeyDown={handleKeyDown}>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};

export default Modal;
