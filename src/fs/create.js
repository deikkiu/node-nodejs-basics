import { writeFile } from "fs/promises";
import { FILES_PATH, ERROR_MSG } from "./constants.js";
import { getAbsoluteUrl } from "./utils.js";

const FILE_NAME = "fresh.txt";
const CONTENT = "I am fresh and young";
const url = getAbsoluteUrl(`${FILES_PATH}/${FILE_NAME}`);

const create = async () => {
  // Write your code here
  try {
    await writeFile(url, CONTENT, { flag: "wx" });
  } catch (err) {
    console.log(err);
    throw new Error(ERROR_MSG);
  }
};

await create();
