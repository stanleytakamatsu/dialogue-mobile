class UnknownSignInError extends Error {
  public constructor() {
    super('An error ocurrend while trying signin');
  }
}

export { UnknownSignInError };
