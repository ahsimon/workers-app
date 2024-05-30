import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as workerpool from 'workerpool';
import { join } from 'path';

@Injectable()
export class WorkerService  {
    private readonly pool: workerpool.Pool;

    constructor() {
        const workerPath = join(__dirname, 'workerApi.js')
        // Initialize the worker pool with a given number of threads
        this.pool = workerpool.pool(workerPath, {
            workerType: 'auto',
            minWorkers: 4, 
            maxWorkers: 8, // maximum number of workers/threads
        });

        console.log(`Worker Threads Enabled - Min Workers: ${this.pool.minWorkers} - Max Workers: ${this.pool.maxWorkers} - Worker Type: ${this.pool.workerType}`)
    }

    async callApiAsync(url: string, ms:number, id: string): Promise<any> {
        return this.pool.exec('callApi', [url,ms,id]);
      
    }


}