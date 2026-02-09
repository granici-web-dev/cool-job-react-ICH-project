import styles from './styles.module.css';

import HeroTitle from '../heroSection/heroTitle';
import Form from '../heroSection/form'


function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <HeroTitle title={'Один клик и работа в кармане'} style={{maxWidth: '36rem'}} />
        <Form />
      </div>
    </section>
  );
}

export default HeroSection;
