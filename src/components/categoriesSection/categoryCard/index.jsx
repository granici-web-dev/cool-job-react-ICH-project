import styles from './styles.module.css';

function CategoryCard({ category }) {
  return (
    <a className={styles.categoryCard} href={category.href}>
      <img src={category.icon} alt={category.title} />
      <h5>{category.title}</h5>
    </a>
  );
}


export default CategoryCard;
