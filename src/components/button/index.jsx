import styles from './styles.module.css';

function Button({ title, style }) {
  return (
    <button className={styles.button} style={style}>
      {title}
    </button>
  );
}

export default Button;
