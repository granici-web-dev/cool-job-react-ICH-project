import styles from './styles.module.css';
import Headline from '../headline';
import { footerCityList } from '../../data/footer_citys';
import { socialsLogos } from '../../data/footer_socials';
import Logo from '../../assets/logos/Cooljob_logo_light.svg';

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerInner}>
        <Headline title={'Популярные города'} style={{ color: '#fff' }} />
        <ul className={styles.city}>
          {footerCityList.map((city) => {
            return (
              <li key={city.id}>
                <a href={city.url} style={{ color: '#D0E8FF' }}>
                  {city.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.footerBottom}>
          <a href="/">
            <img src={Logo} alt="Cool-job logo" />
          </a>
          <div className={styles.footerSocials}>
            {socialsLogos.map((social) => {
              return (
                <a href={social.url}>
                  <img src={social.src} alt={social.title} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
