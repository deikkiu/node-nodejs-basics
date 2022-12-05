import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/zip/files";
  const gzip = zlib.createGzip();
  const inpt = fs.createReadStream(`${path}/fileToCompress.txt`);
  const out = fs.createWriteStream(`${path}/archive.gz`);

  inpt.pipe(gzip).pipe(out);
};

await compress();
