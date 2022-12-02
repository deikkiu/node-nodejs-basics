import fs from "fs";

const list = async () => {
  // Write your code here
  const filePath = "node-nodejs-basics/src/fs/files";

  fs.access(filePath, (err) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.readdir(filePath, "utf-8", (err, data) => {
        if (err) throw err;

        console.log(data);
      });
    }
  });
};

await list();
