// worker.js
const { workerData, parentPort } = require('worker_threads');

async function callRest() {
 
  await fetch("https://www.google.com").then(async () => {

      const startTime = Date.now();
     
    return  await new Promise((resolve) => setTimeout(resolve, 5000));

   });
}

const primes = [];
 const startTime = Date.now();
 console.log (`Calling rest `)
 callRest();
 const ms = Date.now() - startTime;   
primes.push(`Fetch ${workerData.start} returned in ${ms / 1000}s`)
parentPort.postMessage(primes);