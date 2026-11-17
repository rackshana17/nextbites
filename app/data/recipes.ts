
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Masala Dosa",
    cuisine: "Indian",
    minutes: 30,
    description: "Crispy dosa filled with spicy potato masala.",
  },
  {
    id: 2,
    title: "Paneer Butter Masala",
    cuisine: "Indian",
    minutes: 40,
    description: "Soft paneer cubes in rich creamy tomato gravy.",
  },
  {
    id: 3,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 50,
    description: "Aromatic basmati rice cooked with spicy chicken.",
  },
  {
    id: 4,
    title: "Idli Sambar",
    cuisine: "South Indian",
    minutes: 25,
    description: "Soft steamed idlis served with delicious sambar.",
  },
  {
    id: 5,
    title: "Creamy Garlic Pasta",
    cuisine: "Italian",
    minutes: 25,
    description: "Creamy pasta tossed with garlic and cheese.",
  },
  {
    id: 6,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 35,
    description: "Classic pizza topped with cheese and fresh basil.",
  },
  {
    id: 7,
    title: "Vegetable Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    description: "Fried rice mixed with fresh vegetables and sauces.",
  },
  {
    id: 8,
    title: "Veg Noodles",
    cuisine: "Chinese",
    minutes: 20,
    description: "Stir-fried noodles with crunchy vegetables.",
  },
  {
    id: 9,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 15,
    description: "Fluffy pancakes topped with melted chocolate.",
  },
  {
    id: 10,
    title: "Veg Tacos",
    cuisine: "Mexican",
    minutes: 25,
    description: "Crunchy tacos filled with vegetables and beans.",
  },
];
