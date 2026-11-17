
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="recipe-card"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-image"
      />

      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>

        <div className="recipe-info">
          <span>{recipe.cuisine}</span>
          <span>{recipe.minutes} min</span>
        </div>
      </div>
    </Link>
  );
}
