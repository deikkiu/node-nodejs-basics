import { argv } from "process";

const parseArgs = () => {
  // Write your code here
  const argument = argv.reduce((acc, el, i, arr) => {
    if (el.startsWith("--")) return [...acc, `${el.slice(2)} is ${arr[i + 1]}`];
    else return acc;
  }, []);

  console.log(argument);
};

parseArgs();
