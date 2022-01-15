import { Injectable, NestMiddleware } from '@nestjs/common';
// import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('⚽⚽⚽⚽ ====>> 日志打印');
    // bodyParser.json()(req, res, next);
    next();
  }
}

// 纯函数写法
// export function logger(req, res, next) {
//   console.log('⚽⚽⚽⚽ ====>> 日志打印');
//   next();
// };
