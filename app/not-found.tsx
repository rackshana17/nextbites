
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-container">
      <h1>Oops! Recipe Not Found 🍽️</h1>

      <p>
        Looks like this recipe isn't on our menu.
        Don't worry, there are plenty more delicious
        recipes waiting for you!
      </p>

      <Link href="/" className="home-button">
        Back to Home
      </Link>
    </main>
  );
}
