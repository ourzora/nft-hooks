/**
 * Class for general hook errors for displaying
 */
export class RequestError extends Error {
  private originalError?: Error;
  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'RequestError';
    this.originalError = originalError;
  }
  getOriginalError(): Error | undefined {
    return this.originalError;
  }
}
