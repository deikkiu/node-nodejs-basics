import { readFile } from "fs/promises";
import { FILES_PATH, ERROR_MSG } from "./constants.js";
import { getAbsoluteUrl } from "./utils.js";

const FILE_NAME = "fileToRead.txt";
const fileUrl = getAbsoluteUrl(`${FILES_PATH}/${FILE_NAME}`);

const read = async () => {
  try {
    const fileContent = await readFile(fileUrl, "utf-8");
    console.log(fileContent);
  } catch {
    throw Error(ERROR_MSG);
  }
};

await read();
