import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerService } from './worker.service';

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

            this.workerService.callApiAsync("https://jsonplaceholder.typicode.com/todos/",numRequests);
  
          return { 'status':'ok' };
      } catch (error) {
          return { error: error.message };
      }
  }





}
