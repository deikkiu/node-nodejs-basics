import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  // Write your code here
  const path = "node-nodejs-basics/src/wt/worker.js";
  const worker = new Array(cpus().length).fill();

  worker.map((acc, i) => {
    new Worker(path), { workerData: i + 10 };
  });

  const workersRes = await Promise.allSettled(
    worker.map(
      (worker) =>
        new Promise((resolve, reject) => {
          worker.on("message", (data) => {
            resolve({ status: "resolved", data });
          });

          worker.on("error", () => {
            reject({ status: "error", data: null });
          });
        })
    )
  );

  console.log(workersRes);
};

await performCalculations();
