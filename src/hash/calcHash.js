import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/hash/files/fileToCalculateHashFor.txt";

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) throw err;

    const hash = crypto.createHash("sha256").update(data).digest("hex");

    console.log(hash);
  });
};

await calculateHash();
