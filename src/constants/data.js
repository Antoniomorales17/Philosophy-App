import images from './images';

const wines = [
  {
    title: 'La competencia de enseñar a pensar',
    price: '€21',
    tags: 'Ensayo filosófico | Universidad de Granada',
  },
  {
    title: 'El angel de las buenas noches',
    price: '€13',
    tags: 'Un cuento filosófico para adultos | Editorial Circulo Rojo',
  },
  // {
  //   title: 'La Vieillw Rose',
  //   price: '$44',
  //   tags: 'FR | 750 ml',
  // },
  // {
  //   title: 'Rhino Pale Ale',
  //   price: '$31',
  //   tags: 'CA | 750 ml',
  // },
  // {
  //   title: 'Irish Guinness',
  //   price: '$26',
  //   tags: 'IE | 750 ml',
  // },
];

const cocktails = [
  {
    title: 'Consulta filosófica',
    price: '€0',
    tags: 'Atrevete a pensar | 1 hora',
  },
  {
    title: "Escribeme un poema",
    price: '€10',
    tags: 'Elección libre',
  },
  {
    title: 'Oficiar una  boda poética',
    price: '€50',
    tags: 'Flexible ante otros eventos | 1 hora',
  },
  // {
  //   title: 'Old Fashioned',
  //   price: '$31',
  //   tags: 'Bourbon | Brown sugar | Angostura Bitters',
  // },
  // {
  //   title: 'Negroni',
  //   price: '$26',
  //   tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  // },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Entrevista sobre el método Lipman-Sharp',
    subtitle: 'Proyecto de filosofía para niños a través de narraciones y conversaciones filosóficas.',
  },
  {
    imgUrl: images.award01,
    title: 'Experiencias educativas de exito:Pequeños filósofos y aula de cine',
    subtitle: 'Enseñar a pensar en el aula | Pensar, hacer y sentir el cine',
  },
  {
    imgUrl: images.award05,
    title: 'Los relojes del sábado (cinepoema)',
    subtitle: 'Actriz: Virginia Gómez Ronda, Salinas de Cabo de Gata.',
  },
  {
    imgUrl: images.award03,
    title: 'Imperfección VIII - En el muro sentado',
    subtitle: 'Poema del Pozo del Cabo (2023).',
  },
];


const plan = [
  {
    imgUrl: images.plan,
    title: 'Ciclo de filosofía',
    subtitle: 'La Resistencia | Almería',
  }, 
  {
    imgUrl: images.plan2,
    title: 'Colegios y barrios',
    subtitle: 'Barrio de los Almendros| La voz de Almería',
  },
  {
    imgUrl: images.plan3,
    title: 'Filosofía en la calle',
    subtitle: 'La resistencia | Almería',
  }, 
  {
    imgUrl: images.gallery01,
    title: 'Cuento para nadie',
    subtitle: 'Los relojes del sábado | Cabo de gata',
  },
  {
    imgUrl: images.gallery02,
    title: 'Pequeños filósofos',
    subtitle: 'Ensayo filosófico | Universidad de Granada',
  }, 
  {
    imgUrl: images.gallery03,
    title: 'Cuento para nadie',
    subtitle: 'Imperfección VII | Pozo del Cabo',
  },
  {
    imgUrl: images.gallery04,
    title: 'Nadie',
    subtitle: 'Ensayo filosófico | Universidad de Granada',
  }
]

export default { wines, cocktails, awards, plan };
