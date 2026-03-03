const bags = [
  {
    id: 1,
    title: 'Eva',
    description: 'Shoulder bag - lamb nappa leather',
    defaultColor: 'black',
    for: 'Women',
    status: 'New',
    price: 1020,
    isFavorite: false,
    slug: 'eva',
    category: 'bag',
    stock: 5,

    colors: [
      {
        name: 'black',
        images: [
          '/images/eva.jpg',
          '/images/eva-full.jpg',
          '/images/eva-top.jpg',
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Bettina',
    description: 'Top handle bag - calf leather',
    defaultColor: 'black',
    for: 'Women',
    status: 'New',
    price: 1150,
    isFavorite: false,
    slug: 'bettina',
    category: 'bag',
    stock: 5,

    colors: [
      {
        name: 'black',
        images: [
          '/images/bettina-mini.jpg',
          '/images/bettina-mini-full.jpg',
          '/images/bettina-mini-top.jpg',
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Baggy',
    description: 'Crossbody bag - grained leather',
    defaultColor: 'black',
    for: 'Women',
    status: 'New',
    price: 980,
    isFavorite: false,
    slug: 'baggy',
    category: 'bag',
    stock: 5,

    colors: [
      {
        name: 'black',
        images: [
          '/images/baggy.jpg',
          '/images/baggy-full.jpg',
          '/images/baggy-top.jpg',
        ],
      },
    ],
  },
]

export default bags