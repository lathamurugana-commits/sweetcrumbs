// Cake data with categories, pricing, ratings
const cakes = [
  {
    id: 1,
    name: "Velvet Rose Dream",
    price: 45.99,
    rating: 4.9,
    category: "wedding",
    description: "Elegant three-tier rose-infused vanilla cake with cream cheese frosting",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Midnight Truffle",
    price: 38.99,
    rating: 4.8,
    category: "chocolate",
    description: "Rich dark chocolate ganache cake with Belgian truffle filling",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Rainbow Carnival",
    price: 42.99,
    rating: 4.7,
    category: "birthday",
    description: "Vibrant six-layer rainbow sponge with buttercream and sprinkles",
    badge: null
  },
  {
    id: 4,
    name: "Berry Bliss Cupcakes",
    price: 24.99,
    rating: 4.9,
    category: "cupcakes",
    description: "Box of 6 mixed berry cupcakes with whipped cream topping",
    badge: "New"
  },
  {
    id: 5,
    name: "Golden Elegance",
    price: 89.99,
    rating: 5.0,
    category: "designer",
    description: "Hand-painted gold leaf fondant cake with edible flowers",
    badge: "Premium"
  },
  {
    id: 6,
    name: "Strawberry Cheesecake",
    price: 35.99,
    rating: 4.6,
    category: "birthday",
    description: "Classic New York cheesecake topped with fresh strawberry glaze",
    badge: null
  },
  {
    id: 7,
    name: "Chocolate Lava",
    price: 28.99,
    rating: 4.8,
    category: "chocolate",
    description: "Warm molten chocolate cake with a gooey center, served with vanilla ice cream",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Pastel Dream Tower",
    price: 120.00,
    rating: 5.0,
    category: "wedding",
    description: "Five-tier pastel ombré cake with sugar flowers and pearl accents",
    badge: "Premium"
  },
  {
    id: 9,
    name: "Salted Caramel Swirl",
    price: 32.99,
    rating: 4.7,
    category: "chocolate",
    description: "Chocolate sponge with salted caramel drizzle and caramel popcorn",
    badge: null
  },
  {
    id: 10,
    name: "Mini Red Velvet Pack",
    price: 19.99,
    rating: 4.5,
    category: "cupcakes",
    description: "Box of 4 red velvet cupcakes with cream cheese swirl",
    badge: null
  },
  {
    id: 11,
    name: "Unicorn Fantasy",
    price: 55.99,
    rating: 4.9,
    category: "designer",
    description: "Whimsical unicorn-themed cake with rainbow drip and meringue kisses",
    badge: "Trending"
  },
  {
    id: 12,
    name: "Classic Vanilla Bliss",
    price: 29.99,
    rating: 4.6,
    category: "birthday",
    description: "Fluffy vanilla sponge layered with fresh cream and seasonal fruits",
    badge: null
  }
];

export const categories = [
  { id: "all", label: "All Cakes" },
  { id: "chocolate", label: "Chocolate" },
  { id: "birthday", label: "Birthday" },
  { id: "wedding", label: "Wedding" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "designer", label: "Designer Cakes" }
];

export default cakes;
