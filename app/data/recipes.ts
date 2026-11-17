
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
  ingredients: string[];
  steps: string[];
  image:string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Masala Dosa",
    cuisine: "Indian",
    minutes: 30,
    description: "Crispy dosa filled with spicy potato masala.",
    ingredients: [
      "2 cups dosa batter",
      "3 potatoes",
      "1 onion",
      "Green chillies",
      "Mustard seeds",
      "Curry leaves",
      "Salt and oil"
    ],
    steps: [
      "Boil and mash the potatoes.",
      "Heat oil and add mustard seeds, curry leaves, onions and chillies.",
      "Add mashed potatoes and salt. Mix well.",
      "Spread dosa batter on a hot pan.",
      "Add potato masala and fold the dosa.",
      "Serve hot with chutney and sambar."
    ],
    image: "https://www.yummyfoodrecipes.com/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg",
  },
  {
    id: 2,
    title: "Paneer Butter Masala",
    cuisine: "Indian",
    minutes: 40,
    description: "Soft paneer cubes in rich creamy tomato gravy.",
    ingredients: [
      "200g paneer",
      "3 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "Fresh cream",
      "Ginger garlic paste",
      "Indian spices"
    ],
    steps: [
      "Heat butter in a pan.",
      "Add onions and ginger garlic paste.",
      "Add chopped tomatoes and cook until soft.",
      "Blend the mixture into a smooth gravy.",
      "Add spices, paneer cubes and cream.",
      "Simmer for a few minutes and serve."
    ],
    image: "https://veggiedesserts.com/wp-content/uploads/2021/04/paneer-butter-masala-sq.jpg",
  },
  {
    id: 3,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 50,
    description: "Aromatic basmati rice cooked with spicy chicken.",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 onions",
      "2 tomatoes",
      "Yogurt",
      "Ginger garlic paste",
      "Biryani masala",
      "Mint and coriander leaves"
    ],
    steps: [
      "Wash and soak the basmati rice.",
      "Marinate chicken with yogurt and spices.",
      "Fry onions until golden brown.",
      "Add chicken and cook with tomatoes and spices.",
      "Add partially cooked rice over the chicken.",
      "Cover and cook on low heat until done."
    ],
    image:"https://sinfullyspicy.com/wp-content/uploads/2026/03/5-1.jpg",
  },
  {
    id: 4,
    title: "Idli Sambar",
    cuisine: "South Indian",
    minutes: 25,
    description: "Soft steamed idlis served with delicious sambar.",
    ingredients: [
      "2 cups idli batter",
      "1 cup toor dal",
      "1 tomato",
      "1 onion",
      "Mixed vegetables",
      "Sambar powder",
      "Mustard seeds",
      "Curry leaves"
    ],
    steps: [
      "Pour idli batter into greased idli moulds.",
      "Steam until the idlis are soft and cooked.",
      "Pressure cook toor dal until soft.",
      "Cook vegetables with tomato and sambar powder.",
      "Add cooked dal and simmer.",
      "Prepare a mustard seed and curry leaf tempering.",
      "Serve idlis with hot sambar."
    ],
    image:"https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg"
  },
  {
    id: 5,
    title: "Creamy Garlic Pasta",
    cuisine: "Italian",
    minutes: 25,
    description: "Creamy pasta tossed with garlic and cheese.",
    ingredients: [
      "200g pasta",
      "4 garlic cloves",
      "1 cup milk",
      "2 tbsp butter",
      "Grated cheese",
      "Black pepper",
      "Salt"
    ],
    steps: [
      "Boil pasta until cooked and drain.",
      "Melt butter in a pan.",
      "Add chopped garlic and sauté.",
      "Pour in milk and add cheese.",
      "Add cooked pasta and mix well.",
      "Season with pepper and serve."
    ],
    image:"https://cookingandcussing.com/wp-content/uploads/2022/05/Creamy-Garlic-Chicken-Pasta-6-1024x1024.jpg"
  },
  {
    id: 6,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 35,
    description: "Classic pizza topped with cheese and fresh basil.",
    ingredients: [
      "1 pizza base",
      "Tomato pizza sauce",
      "Mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Oregano"
    ],
    steps: [
      "Place the pizza base on a baking tray.",
      "Spread tomato sauce over the base.",
      "Add mozzarella cheese.",
      "Sprinkle oregano and add basil leaves.",
      "Bake until the cheese melts and crust is golden.",
      "Slice and serve hot."
    ],
    image:"https://ouritaliantable.com/wp-content/uploads/2023/06/Grilled-Pizza-2.jpg"
  },
  {
    id: 7,
    title: "Vegetable Fried Rice",
    cuisine: "Chinese",
    minutes: 20,
    description: "Fried rice mixed with fresh vegetables and sauces.",
    ingredients: [
      "2 cups cooked rice",
      "1 carrot",
      "1 capsicum",
      "Spring onions",
      "Soy sauce",
      "Garlic",
      "Salt and pepper"
    ],
    steps: [
      "Heat oil in a wok.",
      "Add garlic and chopped vegetables.",
      "Stir-fry until slightly tender.",
      "Add cooked rice.",
      "Add soy sauce, salt and pepper.",
      "Mix well and garnish with spring onions."
    ],
    image:"https://www.jcookingodyssey.com/wp-content/uploads/2019/07/burnt-garlic-fried-rice-3.jpg"
  },
  {
    id: 8,
    title: "Veg Noodles",
    cuisine: "Chinese",
    minutes: 20,
    description: "Stir-fried noodles with crunchy vegetables.",
    ingredients: [
      "200g noodles",
      "1 carrot",
      "1 capsicum",
      "1 onion",
      "Soy sauce",
      "Chilli sauce",
      "Garlic"
    ],
    steps: [
      "Boil noodles and drain them.",
      "Heat oil in a wok.",
      "Add garlic, onions and vegetables.",
      "Stir-fry on high heat.",
      "Add noodles, soy sauce and chilli sauce.",
      "Toss everything together and serve."
    ],
    image:"https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg"
  },
  {
    id: 9,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 15,
    description: "Fluffy pancakes topped with melted chocolate.",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tbsp sugar",
      "2 tbsp cocoa powder",
      "1 tsp baking powder",
      "Chocolate syrup"
    ],
    steps: [
      "Mix flour, cocoa powder, sugar and baking powder.",
      "Add egg and milk.",
      "Whisk into a smooth batter.",
      "Pour batter onto a heated pan.",
      "Flip when bubbles appear.",
      "Cook both sides and serve with chocolate syrup."
    ],
    image:"https://pancakerecipes.com/wp-content/uploads/2020/12/double-chocolate-whole-wheat-pancakes-web-27.jpg"
  },
  {
    id: 10,
    title: "Veg Tacos",
    cuisine: "Mexican",
    minutes: 25,
    description: "Crunchy tacos filled with vegetables and beans.",
    ingredients: [
      "4 taco shells",
      "1 cup boiled beans",
      "1 tomato",
      "1 onion",
      "Lettuce",
      "Grated cheese",
      "Taco seasoning"
    ],
    steps: [
      "Heat oil in a pan.",
      "Add onions, tomatoes and boiled beans.",
      "Add taco seasoning and mix.",
      "Warm the taco shells.",
      "Fill shells with the vegetable mixture.",
      "Top with lettuce and cheese.",
      "Serve immediately."
    ],
    image:"https://www.feastingathome.com/wp-content/uploads/2017/03/Baked-Tacos.jpg"
  }
];

export function getRecipe(id: number): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
