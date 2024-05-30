import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerService } from './worker.service';
import { time } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly workerService: WorkerService,
  ) {}



  @Get('fetch-multiple')
  async fetchMultiple( @Query('count') count: number) {
      // Convert count to a number
      const numRequests = Number(count) || 10000;

      try {
            const start = Date.now();
            await this.workerService.callApiAsync("https://jsonplaceholder.typicode.com/todos/",numRequests);
            const  end = (Date.now() - start)/1000;
          return { 'status':'ok' , 'time in seconds'  : end};
      } catch (error) {
          return { error: error.message };
      }
  }





}
