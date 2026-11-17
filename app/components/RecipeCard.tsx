
import { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <div className="recipe-card">
      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>

        <p>{recipe.description}</p>

        <div className="recipe-info">
          <span>{recipe.cuisine}</span>
          <span>{recipe.minutes} min</span>
        </div>
      </div>
    </div>
  );
}
