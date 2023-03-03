import { readdir, copyFile, mkdir, access } from "fs/promises";
import { getAbsoluteUrl } from "./utils.js";
import { ERROR_MSG, FILES_PATH } from "./constants.js";

const COPY_FOLDER_PATH = "files_copy";
const originalFolderUrl = getAbsoluteUrl(FILES_PATH);
const copyFolderUrl = getAbsoluteUrl(COPY_FOLDER_PATH);

const copy = async () => {
  // Write your code here
  if (await access(originalFolderUrl)) {
    throw Error(ERROR_MSG);
  } else {
    const [files] = await Promise.all([
      readdir(originalFolderUrl),
      mkdir(copyFolderUrl),
    ]);
    const promises = files.map((fileName) =>
      copyFile(
        getAbsoluteUrl(`${FILES_PATH}/${fileName}`),
        getAbsoluteUrl(`${COPY_FOLDER_PATH}/${fileName}`)
      )
    );

    await Promise.all(promises);
  }
};

await copy();
