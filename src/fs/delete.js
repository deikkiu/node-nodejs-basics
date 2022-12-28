import { rm, access } from "fs/promises";
import { FILES_PATH, ERROR_MSG } from "./constants.js";
import { getAbsoluteUrl } from "./utils.js";

const FILE_NAME = "fileToRemove.txt";
const fileUrl = getAbsoluteUrl(`${FILES_PATH}/${FILE_NAME}`);

const remove = async () => {
  try {
    await rm(fileUrl);
  } catch {
    throw Error(ERROR_MSG);
  }
};

await remove();
