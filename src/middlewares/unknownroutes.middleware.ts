import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../exceptions';

const unknownRoutesMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(
    new HTTPException(
      404,
      'E404.routes.unknown.001',
      'route not found',
    ),
  );
};

export default unknownRoutesMiddleware;
