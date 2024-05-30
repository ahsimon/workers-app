const workerpool = require('workerpool');

import axios, { AxiosResponse } from 'axios';
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Define the function to be executed by the worker pool
// This function will be called by the worker pool to make the API request
async function callApi(url: string, ms: number): Promise<any> {
    console.log('Making API request to:', url);
    await delay(ms); // ms delayed
    
    try {
        const response: AxiosResponse<any> = await axios.get(url);
        console.log('response after',ms);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// create a worker and register public functions
workerpool.worker({
    callApi: callApi
  });