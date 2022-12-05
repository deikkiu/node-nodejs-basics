import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import("./files/c.js");
import Template1 from "./files/a.json" assert { type: "json" };
import Template2 from "./files/b.json" assert { type: "json" };
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

random > 0.5 ? (unknownObject = Template1) : (unknownObject = Template2);

console.log(unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject };
export { myServer };
