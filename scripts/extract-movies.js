import { readFileContent, writeFileContent } from "./file-operations.js";

console.log(`Movie Extraction Started`);

let movieId = 0;
const extractMovies = (rawMovies, genre) => {
  return rawMovies.map((movieObj) => {
    return {
      customRating: 0,
      genres: [genre],
      imdbRating: 0,
      title: movieObj.title,
      year: movieObj.year,
      poster: `/movie-thumbnails/${movieObj.img}`,
    };
  });
};

let refinedMovies = [
  ...extractMovies(readFileContent(`movie_jsons/action.json`).cards, "Action"),
  ...extractMovies(
    readFileContent(`movie_jsons/adventure.json`).cards,
    "Adventure"
  ),
  ...extractMovies(readFileContent(`movie_jsons/alien.json`).cards, "Alien"),
  ...extractMovies(
    readFileContent(`movie_jsons/animation.json`).cards,
    "Animation"
  ),
  ...extractMovies(readFileContent(`movie_jsons/comedy.json`).cards, "Comedy"),
  ...extractMovies(readFileContent(`movie_jsons/dance.json`).cards, "dance"),
  ...extractMovies(
    readFileContent(`movie_jsons/dynasours-and-animals.json`).cards,
    "Dynasours and Animals"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/fantasy.json`).cards,
    "Fantasy"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/ghost-and-horror.json`).cards,
    "Horror Ghost"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/melody-and-drama.json`).cards,
    "Drama"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/mystery.json`).cards,
    "Mystery"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/planning.json`).cards,
    "Planning"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/romance.json`).cards,
    "Romance"
  ),
  ...extractMovies(readFileContent(`movie_jsons/sci-fi.json`).cards, "Sci-Fi"),
  ...extractMovies(
    readFileContent(`movie_jsons/superhero.json`).cards,
    "Superhero"
  ),
  ...extractMovies(
    readFileContent(`movie_jsons/vampire-vs-zombies.json`).cards,
    "Vampire vs Zombies"
  ),
  ...extractMovies(readFileContent(`movie_jsons/wars.json`).cards, "Wars"),
];

refinedMovies = refinedMovies.sort((a, b) => a.title.localeCompare(b.title));

refinedMovies = refinedMovies.map((currentMovie) => {
  return {
    id: ++movieId,
    ...currentMovie,
  };
});

writeFileContent(`0_extracted_movies.json`, JSON.stringify(refinedMovies));

console.log(`Extracted ${refinedMovies.length} movies`);
