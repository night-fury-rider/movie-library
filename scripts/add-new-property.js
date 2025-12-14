const fs = require("fs");
const path = require("path");

// Read CLI arguments
const [, , propertyName, propertyValue = ""] = process.argv;

if (!propertyName) {
  console.error("❌ Property name is required");
  process.exit(1);
}

// Path to movies.json
const moviesPath = path.join(__dirname, "..", "public", "data", "movies.json");

try {
  // Read and parse movies.json
  const rawData = fs.readFileSync(moviesPath, "utf-8");
  const movies = JSON.parse(rawData);

  if (!Array.isArray(movies)) {
    throw new Error("movies.json must contain an array");
  }

  // Add new property to each movie object
  const updatedMovies = movies.map((movie) => ({
    ...movie,
    [propertyName]: propertyValue,
  }));

  // Write back to file (pretty-printed)
  fs.writeFileSync(moviesPath, JSON.stringify(updatedMovies, null, 2), "utf-8");

  console.log(
    `✅ Added property "${propertyName}" with value "${propertyValue}" to ${updatedMovies.length} movies`
  );
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
