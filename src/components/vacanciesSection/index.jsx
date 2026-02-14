import Headline from '../headline';
import HeadlineDescription from '../headlineDescription'
import styles from './syles.module.css'
import VacancyList from './vacancyList';

function VacanciesSection() {
  return (
    <section className={styles.vacancies}>
      <div className={styles.vacanciesInner}>
        <Headline title={'Новые вакансии'} />
        <HeadlineDescription title={'Найди работу своей мечты прямо сейчас'} />
        <VacancyList />
      </div>
    </section>
  );
}

export default VacanciesSection;