// The menu, as plain data: one object per dish.
// Prices are plain numbers in Australian dollars (5.5 means $5.50).
// Change a price here and save — the page updates by itself.
const menu = [
  {
    id: 'flat-white',
    emoji: '☕',
    name: 'Flat White',
    description: 'Double shot, silky milk, the Melbourne classic',
    price: 5.5,
    tag: 'Hot',
  },
  {
    id: 'smashed-avo',
    emoji: '🥑',
    name: 'Smashed Avo',
    description: 'Sourdough, feta, lemon and chilli flakes',
    price: 19,
    tag: 'Popular',
  },
  {
    id: 'chicken-momo',
    emoji: '🥟',
    name: 'Chicken Momo',
    description: 'Eight steamed Nepali dumplings with tomato achar',
    price: 16,
    tag: 'Popular',
  },
  {
    id: 'masala-chai',
    emoji: '🫖',
    name: 'Masala Chai',
    description: 'Spiced milk tea, brewed the slow way',
    price: 5,
    tag: 'Hot',
  },
  {
    id: 'butter-chicken-pie',
    emoji: '🥧',
    name: 'Butter Chicken Pie',
    description: 'An Aussie meat pie with an Indian twist',
    price: 12,
    tag: 'Popular',
  },
  {
    id: 'lamington',
    emoji: '🍫',
    name: 'Lamington',
    description: 'Sponge, chocolate and coconut',
    price: 6,
    tag: 'Veg',
  },
]

export default menu
