import styles from './styles.module.css';

import disney from '../../../assets/logos/Disney.svg';
import facebook from '../../../assets/logos/Facebook.svg';
import microsoft from '../../../assets/logos/Microsoft.svg';
import sony from '../../../assets/logos/Sony.svg';
import cocaCola from '../../../assets/logos/CocaCola.svg';

const logosImg = [
  {
    src: disney,
    title: 'disney logo',
    url: 'www.disnay.com',
  },
  {
    src: facebook,
    title: 'facebook logo',
    url: 'www.facebook.com',
  },
  {
    src: microsoft,
    title: 'microsoft logo',
    url: 'www.microsoft.com',
  },
  {
    src: sony,
    title: 'sony logo',
    url: 'www.sony.com',
  },
  {
    src: cocaCola,
    title: 'coca-cola logo',
    url: 'www.coca-cola.com',
  },
];

function Logos() {
  return (
    <div className={styles.logosImg}>
      {logosImg.map((logo) => {
        return (
          <a href={logo.url} target="_blanc" key={logo.title}>
            <img src={logo.src} alt={logo.title} />
          </a>
        );
      })}
    </div>
  );
}

export default Logos;
