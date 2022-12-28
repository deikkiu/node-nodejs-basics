const PREFIX = "--";

const parseArgs = () => {
  // Write your code here

  const argument = process.argv.slice(2).reduce((acc, value, index, array) => {
    if (value.startsWith(PREFIX)) {
      const formattedProp = `${value.replace(PREFIX, "")} is ${
        array[index + 1]
      }`;
      return [...acc, formattedProp];
    }
    return acc;
  }, []);

  const stringifiedArgument = argument.join(", ");

  console.log(stringifiedArgument);
};

parseArgs();
