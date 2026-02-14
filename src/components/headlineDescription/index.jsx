import styles from './styles.module.css'

function HeadlineDescription({title}) {
  return <p className={styles.headlineDescription}>
    {title}
  </p>
}

export default HeadlineDescription;