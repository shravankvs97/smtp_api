class Exceptions extends Error {
  public errorCode: string;
  public innerException?: Error;

  constructor(
    errorCode: string,
    errorMessage?: string,
    innerException?: Error,
  ) {
    super(errorMessage);
    this.errorCode = errorCode;
    this.innerException = innerException;
  }
}

export default Exceptions;
