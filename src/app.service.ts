import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Electronic Shop Api Docs ' + '<a href="#">here</a>';
  }
}
