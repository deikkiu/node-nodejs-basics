import fs from "fs";
import { stdout } from "process";

const read = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/streams/files/fileToRead.txt";
  const readable = fs.createReadStream(path);

  readable.pipe(stdout);
  readable.on("end", () => {
    stdout.end("\n");
  });
};

await read();
