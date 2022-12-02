import fs from "fs";

const rename = async () => {
  // Write your code here
  let filePath = "node-nodejs-basics/src/fs/files";

  fs.access(filePath, (err) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.rename(
        `${filePath}/wrongFilename.txt`,
        `${filePath}/properFilename.md`,
        (err) => {
          if (err) throw new Error("FS operation failed");

          console.log("File was renamed");
        }
      );
    }
  });
};

await rename();
