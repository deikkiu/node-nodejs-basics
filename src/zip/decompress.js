import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/zip/files";
  const gunzip = zlib.createGunzip();
  const inpt = fs.createReadStream(`${path}/archive.gz`);
  const out = fs.createWriteStream(`${path}/fileToCompress.txt`);

  inpt.pipe(gunzip).pipe(out);
};

await decompress();
