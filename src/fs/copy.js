import fs from "fs";

const copy = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/fs";

  fs.access(`${path}/files_copy`, fs.constants.F_OK, (err) => {
    if (!err) throw new Error("FS operation failed");
    else {
      fs.mkdir(`${path}/files_copy`, { recursive: true }, (err) => {
        if (err) throw err;

        console.log("The folder was created");
      });
    }
  });

  fs.access(`${path}/files`, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
    else {
      fs.cp(
        `${path}/files`,
        `${path}/files_copy`,
        { recursive: true },
        (err) => {
          if (!err) console.error("Error");

          console.log("The copy was completed");
        }
      );
    }
  });
};

await copy();
