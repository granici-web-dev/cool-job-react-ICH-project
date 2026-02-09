import HeroSearchInput from '../heroSearchInput';
import Button from '../../button';

import styles from './styles.module.css';
import searchCompanyIcon from '../../../assets/icons/search_company.svg';
import searchCityIcon from '../../../assets/icons/search_city.svg';

function Form() {
  return (
    <form className={styles.form}>
      <HeroSearchInput
        type={'search'}
        placeholder={'Должность или компания'}
        name={'search_company'}
        style={{
          backgroundImage: `url("${searchCompanyIcon}")`,
          borderRight: '1px solid rgba(0, 0, 0, 0.2)',
        }}
      />
      <HeroSearchInput
        type={'search'}
        placeholder={'Город, Страна'}
        name={'search_city'}
        style={{
          backgroundImage: `url("${searchCityIcon}")`,
        }}
      />
      <Button title={'Поиск'} style={{ padding: '2.15rem 4rem', boxShadow: '6px 5px 9px 0 rgba(0, 0, 0, 0.35)'}} />
    </form>
  );
}

export default Form;
