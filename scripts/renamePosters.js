import { readdirSync } from "fs";

import { readFileContent, renameFile } from "./fileOperations.js";

console.log(`Poster Renaming Started`);

const init = (fileName) => {
  let fileContent = "";
  let oldPosterName = "";

  let scriptPath = import.meta.dirname;
  let dataFilesPath = scriptPath.replace(/scripts/g, `public/movie-thumbnails`);

  try {
    readdirSync("movie_jsons").forEach((fileName) => {
      fileContent = readFileContent(`movie_jsons/${fileName}`);

      fileContent.cards.forEach((movieObj) => {
        oldPosterName = `${dataFilesPath}/${movieObj?.img}`;
        if (movieObj?.img?.indexOf("-197") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-197/, "_197"));
        } else if (movieObj?.img?.indexOf("-198") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-198/, "_198"));
        } else if (movieObj?.img?.indexOf("-199") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-199/, "_199"));
        } else if (movieObj?.img?.indexOf("-200") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-200/, "_200"));
        } else if (movieObj?.img?.indexOf("-201") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-201/, "_201"));
        } else if (movieObj?.img?.indexOf("-202") > -1) {
          renameFile(oldPosterName, oldPosterName.replace(/-202/, "_202"));
        }
      });
    });
    console.log(`Renaming movies is successful`);
  } catch (err) {
    console.error(`Error in reading the directory ${fileName}`);
  }
};

init(`movie_jsons`);
