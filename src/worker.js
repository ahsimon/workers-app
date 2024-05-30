// worker.js
const { workerData, parentPort } = require('worker_threads');

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

const primes = [];

for (let i = workerData.start; i < workerData.end; i++) {
  if (isPrime(i)) primes.push(i);
}
parentPort.postMessage(primes);