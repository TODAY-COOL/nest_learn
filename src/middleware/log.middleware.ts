import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('⚽⚽⚽⚽👉👉👉', {
      method: req.method,
      url: req.url,
      baseUrl: req.baseUrl,
    });
    next();
  }
}

// 纯函数写法
// export function logger(req, res, next) {
//   next();
// };
