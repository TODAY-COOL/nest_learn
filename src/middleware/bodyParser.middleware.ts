import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BodyParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('中间件bodyParser对号🍕🍕🍕🍕🍕')
    bodyParser.json()(req, res, next);
  }
}
