import fs from "fs";

const read = async () => {
  // Write your code here
  let filePath = "node-nodejs-basics/src/fs/files/fileToRead.txt";

  fs.access(filePath, (err) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) throw err;

        console.log(data);
      });
    }
  });
};

await read();
