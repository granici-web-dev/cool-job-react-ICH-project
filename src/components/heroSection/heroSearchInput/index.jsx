import styles from './styles.module.css';

function HeroSearchInput({ type, placeholder, name, style }) {
  return (
    <>
      <input type={type} placeholder={placeholder} name={name} className={styles.searchInput} style={style} />
    </>
  );
}

export default HeroSearchInput;
