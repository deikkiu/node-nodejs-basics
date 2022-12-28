import { pipeline } from "stream/promises";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { fileCompressUrl, filearchiveUrl } from "./constants";

const decompress = async () => {
  await pipeline(
    createReadStream(filearchiveUrl),
    createGunzip(),
    createWriteStream(fileCompressUrl)
  );
};

await decompress();
