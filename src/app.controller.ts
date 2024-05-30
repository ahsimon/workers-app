import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerService } from './worker.service';
import {v4 as uuidv4} from 'uuid';


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
            const myuuid = uuidv4();
            const start = Date.now();
             this.workerService.callApiAsync("https://jsonplaceholder.typicode.com/todos/1",numRequests,myuuid);
            const  end = (Date.now() - start);
            return {'id':myuuid, 'status':'ok' , 'delay in milliseconds'  : end};
      } catch (error) {
          return { error: error.message };
      }
  }



  @Get('fetch-simple')
  async fetch( @Query('count') count: number) {
      // Convert count to a number
      const numRequests = Number(count) || 10000;

      try {
            const myuuid = uuidv4();
            const start = Date.now();
            fetch("https://jsonplaceholder.typicode.com/todos/1");
            const  end = (Date.now() - start);
            return { 'status':'ok' , 'time in milliseconds'  : end};
      } catch (error) {
          return { error: error.message };
      }
  }





}
