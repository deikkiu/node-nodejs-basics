import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileCompressUrl, filearchiveUrl } from "./constants";

const compress = async () => {
  await pipeline(
    createReadStream(fileCompressUrl),
    createGzip(),
    createWriteStream(filearchiveUrl)
  );
};

await compress();
