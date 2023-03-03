const PREFIX = "RSS_";

const parseEnv = () => {
  // Write your code here

  const rssValiables = Object.entries(process.env).reduce(
    (acc, [key, value]) => {
      if (key.startsWith(PREFIX)) {
        const formattedProp = `${key}=${value}`;
        return [...acc, formattedProp];
      }

      return acc;
    },
    []
  );

  const stringifiedArgument = rssValiables.join(", ");

  console.log(stringifiedArgument);
};

parseEnv();
