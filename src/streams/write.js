import fs from "fs";
import { stdin } from "process";

const write = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/streams/files/fileToWrite.txt";

  const writeable = fs.createWriteStream(path);
  stdin.pipe(writeable);
};

await write();
