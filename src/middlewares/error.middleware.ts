import BadRequestException from '../exceptions/http/badRequest.exception';
import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../exceptions';

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(error);
  }
  console.log(error);
  const he = error as HTTPException;

  res.status(he.httpStatusCode || 500).json(he.message);
};

export default errorMiddleware;
