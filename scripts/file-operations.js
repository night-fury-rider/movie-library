import { readFileSync, renameSync, writeFileSync } from "fs";

const changeDirectory = (directoryPath) => {
  try {
    process.chdir(directoryPath);
    console.log("New directory: " + process.cwd());
  } catch (err) {
    console.log("Error in changing the directory: " + err);
  }
};

const readFileContent = (filePath) => {
  let fileContent = "";
  try {
    fileContent = JSON.parse(readFileSync(filePath, "utf8"));
  } catch (err) {
    console.error(`Error in reading ${filePath}: ${err}`);
  }
  return fileContent;
};

const renameFile = (oldName, newName) => {
  try {
    renameSync(oldName, newName);
  } catch (err) {
    console.error(`Error in renaming ${oldName}: ${err}`);
  }
};

const writeFileContent = (filePath, content) => {
  try {
    writeFileSync(filePath, content);
  } catch (err) {
    console.error(`Error in writing to ${filePath}: ${err}`);
  }
};

export { changeDirectory, readFileContent, renameFile, writeFileContent };
