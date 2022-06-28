import HTTPException from './http.exception';

class BadRequestException extends HTTPException {
  constructor(
    errorCode: string,
    errorMessage?: string,
    innerException?: Error,
  ) {
    super(400, errorCode, errorMessage, innerException);
  }
}

export default BadRequestException;
