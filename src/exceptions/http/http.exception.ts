import Exceptions from '../exceptions';

class HTTPException extends Exceptions {
  public httpStatusCode: number;

  constructor(
    httpStatusCode: number,
    errorCode: string,
    errorMessage?: string,
    innerException?: Error,
  ) {
    super(errorCode, errorMessage, innerException);
    this.httpStatusCode = httpStatusCode;
  }
}
export default HTTPException;
