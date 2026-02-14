import locationIcon from '../assets/icons/location-icon.svg';

import sonyLogo from '../assets/logos/sony_small.svg';
import facebookLogo from '../assets/logos/sony_small.svg';
import cocaColaLogo from '../assets/logos/sony_small.svg';

export const vacanciesList = [
  {
    id: 1,
    category: {
      name: 'Финансы',
      color: '#5182FF',
    },
    title: 'Менеджер по управлению финансами в крупной компании',
    location: {
      locationIcon: locationIcon,
      city: 'Осака',
      country: 'Япония',
    },
    company: {
      name: 'Sony',
      logo: sonyLogo,
    },
    postedAt: '3 дня назад',
  },
  {
    id: 2,
    category: {
      name: 'Продажи',
      color: '#FF51EE',
    },
    title: 'Специалист по продажам',
    location: {
      locationIcon: locationIcon,
      city: 'Коясан',
      country: 'Япония',
    },
    company: {
      name: 'Facebook',
      logo: facebookLogo,
    },
    postedAt: '7 дней назад',
  },
  {
    id: 3,
    category: {
      name: 'Служба поддержки',
      color: '#58D94D',
    },
    title: 'Оператор колл центра',
    location: {
      locationIcon: locationIcon,
      city: 'Томаму',
      country: 'Япония',
    },
    company: {
      name: 'CocaCola',
      logo: cocaColaLogo,
    },
    postedAt: '1 день назад',
  },
  {
    id: 4,
    category: {
      name: 'Мультимедиа',
      color: '#FF9051',
    },
    title: 'Системный администратор',
    location: {
      locationIcon: locationIcon,
      city: 'Токио',
      country: 'Япония',
    },
    company: {
      name: 'Sony',
      logo: sonyLogo,
    },
    postedAt: '3 дня назад',
  },
  {
    id: 5,
    category: {
      name: 'Дизайн',
      color: '#F84242',
    },
    title: 'Дизайнер интерьера в профессиональную студию в центре города',
    location: {
      locationIcon: locationIcon,
      city: 'Йокогама',
      country: 'Япония',
    },
    company: {
      name: 'Facebook',
      logo: facebookLogo,
    },
    postedAt: '7 дней назад',
  },
  {
    id: 6,
    category: {
      name: 'Грузоперевозки',
      color: '#383838',
    },
    title: 'Водитель на дальние дистанции',
    location: {
      locationIcon: locationIcon,
      city: 'Кобе',
      country: 'Япония',
    },
    company: {
      name: 'CocaCola',
      logo: cocaColaLogo,
    },
    postedAt: '1 день назад',
  },
];

export default vacanciesList;