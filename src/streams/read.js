import fs from "fs";
import process from "process";

const read = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/streams/files/fileToRead.txt";
  const readable = fs.createReadStream(path, { highWaterMark: 9 });

  readable.on("data", (chunk) => {
    console.log(String(chunk));
  });
};

await read();
