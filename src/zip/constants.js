const FOLDER_PATH = "files";
const FILE_COMPRESS_NAME = "fileToCompress.txt";
const FILE_ARCHIVE_NAME = "archive.gz";

export const fileCompressUrl = new URL(
  `./${FOLDER_PATH}/${FILE_COMPRESS_NAME}`,
  import.meta.url
);

export const filearchiveUrl = new URL(
  `./${FOLDER_PATH}/${FILE_ARCHIVE_NAME}`,
  import.meta.url
);
