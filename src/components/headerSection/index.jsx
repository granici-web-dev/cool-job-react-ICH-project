import styles from './styles.module.css';
import LinkBtn from './linkBtn';
import Logo from './logo';
import Nav from './nav';

function HeaderSection() {
  return (
    <section className={styles.header}>
      <div className={styles.headerInner}>
          <div className={styles.headerLeft} >
            <Logo />
            <Nav />
          </div>
          <div className={styles.headerRight}>
            <LinkBtn name={'Регистрация'} link={'#'} />
            <LinkBtn
              style={{ backgroundColor: '#FFF', fontWeight: '700' }}
              name={'Вход'}
              link={'#'}
            />
          </div>   
        </div>
    </section>
  );
}

export default HeaderSection;
