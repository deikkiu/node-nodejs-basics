import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseString = (str) => str.split("").reverse().join("");

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk.toString()));
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
