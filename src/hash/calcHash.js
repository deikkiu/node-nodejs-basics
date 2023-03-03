import { readFile } from "fs/promises";
import { createHash } from "crypto";

const FILE_PATH = "./files/fileToCalculateHashFor.txt";
const fileUrl = new URL(FILE_PATH, import.meta.url);

const calculateHash = async () => {
  const content = await readFile(fileUrl);
  const data = createHash("sha256").update(content);
  const encoding = data.digest("hex");

  console.log(encoding);
};

await calculateHash();
