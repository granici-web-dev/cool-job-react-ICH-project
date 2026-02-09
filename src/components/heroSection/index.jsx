import styles from './styles.module.css';
import searchCompanyIcon from '../../assets/icons/search_company.svg';


import HeroTitle from '../heroSection/heroTitle';
import HeroSearchInput from '../heroSection/heroSearchInput';

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <HeroTitle title={'Один клик и работа в кармане'} />
      <form>
        <HeroSearchInput
          type={'search'}
          placeholder={'Должность или компания'}
          name={'search_company'}
          style={{
            backgroundImage: `url(${searchCompanyIcon})`,
            backgroundRepeat: 'no-repeat',
          }}
        />
        <HeroSearchInput
          type={'search'}
          placeholder={'Должность или компания'}
          name={'search_company'}
        />
      </form>
    </div>
  );
}

export default HeroSection;
