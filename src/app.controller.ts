import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): any {
    
    return [
      { id: 1, name: 'John', age: 30 }
    ];
    return this.appService.getHello();
  }
}
