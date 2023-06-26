import css from './Modal.module.css';

import PropTypes from 'prop-types';

const Modal = ({ onClick, image }) => {
  return (
    <div
      className={css.overlay}
      onClick={() => {
        onClick();
      }}
    >
      <div className={css.modal}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
