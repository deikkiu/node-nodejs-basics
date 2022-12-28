import { access, readdir } from "fs/promises";
import { FILES_PATH, ERROR_MSG } from "./constants.js";
import { getAbsoluteUrl } from "./utils.js";

const folderUrl = getAbsoluteUrl(FILES_PATH);

const list = async () => {
  try {
    const dirContent = await readdir(folderUrl);
    console.log(dirContent);
  } catch {
    throw Error(ERROR_MSG);
  }
};

await list();
