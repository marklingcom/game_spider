export class RetError extends Error {
  public readonly retCode: number;

  constructor(retCode: number) {
    super(`ret is ${retCode}`);
    this.name = 'RetError';
    this.retCode = retCode;
  }
}
