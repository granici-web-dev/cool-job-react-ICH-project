import styles from './styles.module.css';

function HeroTitle({ title, style }) {
  return (
    <h1 className={styles.heroHeadline} style={style}>
      {title}
    </h1>
  );
}

export default HeroTitle;
