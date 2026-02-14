import {vacanciesList} from '../../../data/vacancy';
import VacancyCard from '../vacancyCard'
import styles from './styles.module.css'


function VacancyList() {
  return <div className={styles.vacancyList}>
    {vacanciesList.map((vacancy) => {
      return <VacancyCard vacancy={vacancy} key={vacancy.id}/>;
    })}
    </div>;
}

export default VacancyList;