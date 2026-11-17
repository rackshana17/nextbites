
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Explore delicious recipes from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">🍴 NextBites</h1>

            <div className="nav-links">
              <a href="/">Home</a>
              <a href="#recipes">Recipes</a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
