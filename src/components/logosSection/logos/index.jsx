import styles from './styles.module.css';

import { logosImg } from '../../../data/logos';

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
