class ValidationError extends Error {
  httpStatusCode: number;
  date: Date;

  constructor(...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    this.name = 'ValidationError';
    this.httpStatusCode = 400;
    this.date = new Date();
  }
}

export default ValidationError;
