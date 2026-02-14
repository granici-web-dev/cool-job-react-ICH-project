import styles from './styles.module.css';
import Headline from "../headline";
import CategoryList from './categoryList';

function CategoriesSection() {
  
  return (
    <div className={styles.category}>
      <div className={styles.categoryInner}>
        <Headline title={'Работа по категориям'} />
        <CategoryList />
      </div>
    </div>
  );
}

export default CategoriesSection;
