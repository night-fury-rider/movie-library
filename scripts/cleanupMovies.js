import { readFileContent, writeFileContent } from "./fileOperations.js";

console.log(`Movie Cleanup Started`);

let scriptPath = import.meta.dirname;
let dataFilePath = scriptPath.replace(/scripts/g, `public/movies.json`);

const moviesData = readFileContent(dataFilePath);
let updatedMoviesData = "";

const removeDuplicateMovies = (moviesData) => {
  let movieSet = new Set();

  let uniqueData = moviesData.filter((currentMovie) => {
    if (!movieSet.has(currentMovie.title)) {
      movieSet.add(currentMovie.title);
      return true;
    }
    return false;
  });

  return uniqueData;
};

const sortByYear = (moviesData) =>
  moviesData.sort((a, b) => (a.year > b.year ? -1 : 1));

const performIndexation = (moviesData) => {
  return moviesData.map((movieObj, index) => {
    return {
      ...movieObj,
      id: index + 1,
    };
  });
};

updatedMoviesData = removeDuplicateMovies(moviesData);
updatedMoviesData = sortByYear(updatedMoviesData);
console.log(updatedMoviesData[0].id);
updatedMoviesData = performIndexation(updatedMoviesData);
console.log(updatedMoviesData[0].id);

writeFileContent(dataFilePath, JSON.stringify(updatedMoviesData));

console.log(`Movie cleanup completed`);
