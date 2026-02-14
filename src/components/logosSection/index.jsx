import Logos from './logos';
import LogosTitle from './logosTitle';
import styles from './styles.module.css';

function LogosSection() {
  return (
    <section className={styles.logos}>
      <div className={styles.logosInner}>
        <LogosTitle title={'Помогаем найти работу:'} />
        <Logos />
      </div>
    </section>
  );
}

export default LogosSection;
