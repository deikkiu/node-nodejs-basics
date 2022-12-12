import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

export function getFilePath(url, filename) {
  const dirname = getDirPath(url);
  return path.resolve(dirname, filename);
}

export function getDirPath(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}

export const getAbsoluteUrl = (path) => new URL(path, import.meta.url);
