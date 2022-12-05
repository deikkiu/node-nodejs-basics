import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).replace(" ", ""));
    },
  });

  stdin.pipe(transform).pipe(stdout);
};

await transform();
