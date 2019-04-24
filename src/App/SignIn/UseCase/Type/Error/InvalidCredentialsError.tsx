class InvalidCredentialsError extends Error {
  public constructor() {
    super('Credential used is invalid.');
  }
}

export { InvalidCredentialsError };
