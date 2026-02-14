import styles from './styles.module.css';
import Headline from "../headline";
import CategoryList from './categoryList';

function CategoriesSection() {
  
  return (
    <section className={styles.category}>
      <div className={styles.categoryInner}>
        <Headline title={'Работа по категориям'} />
        <CategoryList />
      </div>
    </section>
  );
}

export default CategoriesSection;
