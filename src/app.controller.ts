import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('add')
  sumTwoNumbers(data: {num1: number, num2: number}) {
    return this.appService.sumTwoNumbers(data);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
