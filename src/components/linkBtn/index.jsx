import styles from './styles.module.css';

function LinkBtn({ name, link, style }) {
  return (
    <>
      <a className={styles.linkBtn} href={link} style={style}>
        {name}
      </a>
    </>
  );
}

export default LinkBtn;
