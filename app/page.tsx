
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

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

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
