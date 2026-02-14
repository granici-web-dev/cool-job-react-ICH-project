import CategoryCard from '../categoryCard';
import { categoryCards } from '../../../data/categories';
import styles from './styles.module.css';

function CategoryList() {
  return (
    <div className={styles.categoryList}>
      {categoryCards.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
}

export default CategoryList;
