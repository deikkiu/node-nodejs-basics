import fs from "fs";

const remove = async () => {
  // Write your code here
  let filePath = "node-nodejs-basics/src/fs/files/fileToRemove.txt";

  fs.access(filePath, (err) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.unlink(filePath, (err) => {
        if (err) throw err;

        console.log("File deleted");
      });
    }
  });
};

await remove();
