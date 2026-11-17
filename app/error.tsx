
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-container">
      <h1>Oops! Something went wrong 😢</h1>

      <p>
        Don't worry! Something unexpected happened.
        Let's try again.
      </p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}
