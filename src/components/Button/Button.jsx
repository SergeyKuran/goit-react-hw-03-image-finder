import css from './Button.module.css';

const Button = ({ onClick }) => {
  console.log(onClick);
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
