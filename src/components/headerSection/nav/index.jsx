import styles from './styles.module.css';

const navList = [
  {
    title: 'Поиск работы',
    url: '#',
  },
  {
    title: 'Поиск стартапов',
    url: '#',
  },
];

function Nav() {
  return (
    <ul className={styles.nav}>
      {navList.map((link) => {
        return (
          <li key={link.title}>
            <a href={link.url}>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
