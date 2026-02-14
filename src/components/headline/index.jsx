import styles from './styles.module.css'

function Headline({title ,style}) {
  return (
    <h2 className={styles.headline} style={style}>
      {title}
    </h2>
  );
}

export default Headline;