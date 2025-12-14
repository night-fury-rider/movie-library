const fs = require("fs");
const path = require("path");

// Path to movies.json
const moviesPath = path.join(__dirname, "..", "public", "data", "movies.json");

try {
  // Read and parse movies.json
  const rawData = fs.readFileSync(moviesPath, "utf-8");
  const movies = JSON.parse(rawData);

  if (!Array.isArray(movies)) {
    throw new Error("movies.json must contain an array");
  }

  // Build "Title (Year)" strings
  const titlesWithYear = movies
    .filter((movie) => movie.title) // ensure title exists
    .map((movie) => {
      const year = movie.year ?? "";
      return year ? `${movie.title} (${year})` : movie.title;
    });

  // Print result as JSON array
  console.log(JSON.stringify(titlesWithYear, null, 2));
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
