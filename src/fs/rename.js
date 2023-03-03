import { access, rename as renameFile } from "fs/promises";
import { FILES_PATH, ERROR_MSG } from "./constants.js";
import { getAbsoluteUrl } from "./utils.js";

const ORIGINAL_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const originalFileUrl = getAbsoluteUrl(`${FILES_PATH}/${ORIGINAL_FILE_NAME}`);
const newFileUrl = getAbsoluteUrl(`${FILES_PATH}/${NEW_FILE_NAME}`);

const rename = async () => {
  // Write your code here
  if (await access(newFileUrl)) {
    throw Error(ERROR_MSG);
  } else {
    await renameFile(originalFileUrl, newFileUrl);
  }
};

await rename();
