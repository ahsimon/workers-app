const workerpool = require('workerpool');
import axios from 'axios';
// Define the function to be executed by the worker pool
// This function will be called by the worker pool to make the API request
async function callApi(url) {
    return new Promise(async (resolve, reject) => {
   
            try {
                const response = await axios.get(url);
                resolve(response.data);
            } catch (error) {
                reject(new Error(error.message));
            }
   
    });
}

// create a worker and register public functions
workerpool.worker({
    callApi: callApi
  });