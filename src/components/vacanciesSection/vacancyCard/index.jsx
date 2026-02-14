import styles from './styles.module.css';

function VacancyCard({ vacancy }) {
  return (
    <div className={styles.vacancyCard}>
      <div className={styles.categoryItem}>
        <span
          style={{ backgroundColor: vacancy.category.color }}
          className={styles.categoryColor}></span>
        <h6 className={styles.categoryTitle}>{vacancy.category.name}</h6>
      </div>
      <h3 className={styles.title}>{vacancy.title}</h3>
      <div className={styles.location}>
        <img src={vacancy.location.locationIcon} alt="location icon" />
        <span>
          {vacancy.location.city}, {vacancy.location.country}
        </span>
      </div>
      <div className={styles.posted}>
        <img src={vacancy.company.logo} alt={vacancy.company.name} />
        <span>
          {vacancy.company.name}, {vacancy.postedAt}
        </span>
      </div>
    </div>
  );
}

export default VacancyCard;
