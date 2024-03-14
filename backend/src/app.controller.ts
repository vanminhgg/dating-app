import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request, @Res() response: Response) {
    const res = {
      hello: this.appService.getHello()
    }
    res.status(HttpStatus.OK).json([]);
  }
}
