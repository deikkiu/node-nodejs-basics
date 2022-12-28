import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const START_NUMBER = 10;
  const STATUS_RESOLVED = "resolved";
  const STATUS_ERROR = "error";
  const WORKER_PATH = "./worker.js";
  const workerUrl = new URL(WORKER_PATH, import.meta.url);

  const calculateNthFibonacci = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(workerUrl, { workerData });

      worker.on("message", (data) =>
        resolve({ status: STATUS_RESOLVED, data })
      );

      worker.on("error", () => resolve({ status: STATUS_ERROR, data: null }));
    });

  const calculate = new Array(cpus().length)
    .fill(null)
    .map((value, index) => calculateNthFibonacci(index + START_NUMBER));
  const data = await Promise.all(calculate);

  console.log(data);
};

await performCalculations();
