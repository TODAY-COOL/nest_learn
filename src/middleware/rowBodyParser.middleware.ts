import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RowBodyParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('rowBodyParser run ...');
    bodyParser.raw({ type: '*/*' })(req, res, next);
  }
}
