import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) {}
  sumTwoNumbers(data: { num1: number; num2: number }) {
    console.log('summing up numbers');
    let result = Object.values(data).reduce((a, b) => a + b, 0);
    console.log(`result is ${result} \npropagating to auth service`);
     this.client.send<number>('multiply', [result, 12]).subscribe((ret) => {
      console.log('getting the result from auth',ret)
     });
    return result;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
