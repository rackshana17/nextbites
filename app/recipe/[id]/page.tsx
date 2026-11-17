
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getRecipe } from "../../data/recipes";

async function RecipeContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(Number(id));

  if (!recipe) {
    notFound();
  }

 
return (
  <main className="detail-container">
    <div className="detail-header">
      <p className="detail-tagline">LET'S MAKE SOMETHING DELICIOUS</p>

      <h1>{recipe.title}</h1>

      <p className="detail-description">
        {recipe.description}
      </p>

      <div className="detail-meta">
        <span>{recipe.cuisine}</span>
        <span>⏱ {recipe.minutes} minutes</span>
      </div>
    </div>

    <div className="recipe-detail-grid">
      <section className="detail-section">
        <h2>Ingredients</h2>
        <p className="section-subtitle">
          Everything you need
        </p>

        <ul className="ingredient-list">
          {recipe.ingredients.map((item) => (
            <li key={item}>
              <span className="ingredient-dot">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Cooking Instructions</h2>
        <p className="section-subtitle">
          Follow these simple steps
        </p>

        <ol className="steps-list">
          {recipe.steps.map((step, index) => (
            <li key={index}>
              <span className="step-number">
                {index + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  </main>
);

}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading recipe...</p>}>
      <RecipeContent params={params} />
    </Suspense>
  );
}
