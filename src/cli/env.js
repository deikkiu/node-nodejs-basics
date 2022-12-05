import { env } from "process";

const parseEnv = () => {
  // Write your code here
  const pref = "RSS_";
  const rssInclude = Object.entries(env);

  rssInclude
    .filter((el) => {
      el[0].includes(pref);
    })
    .map((el) => {
      el.join("=");
    })
    .join(";");

  console.log(rssInclude);
};

parseEnv();
