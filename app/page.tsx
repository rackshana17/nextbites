
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <p className="hero-tagline">FRESH IDEAS. DELICIOUS MEALS.</p>

        <h1>Discover Your Next Favorite Bite!</h1>

        <p>
          Explore delicious recipes from around the world
          and find something amazing to cook today.
        </p>
      </section>

      <section id="recipes" className="recipes-section">
        <div className="section-heading">
          <h2>Explore Our Recipes</h2>
          <p>Find your next delicious meal.</p>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}
