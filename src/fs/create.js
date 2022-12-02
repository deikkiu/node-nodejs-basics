import fs from "fs";

const create = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/fs/files/fresh.txt";

  fs.access(path, fs.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    } else {
      fs.open(path, "w", (err) => {
        if (err) throw err;

        fs.writeFile(path, "I am fresh and young", "utf8", (err) => {
          if (err) throw err;

          console.log("File created");
        });
      });
    }
  });
};

await create();
