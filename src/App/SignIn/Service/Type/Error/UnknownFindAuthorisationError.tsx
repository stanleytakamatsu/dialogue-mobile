import { GenericError } from '../../../../Core/Error/Service/GenericError';

class UnknownFindAuthorisationError extends GenericError {
  public constructor(originalError: Error) {
    super('An error ocurrend while trying signin', originalError);
  }
}

export { UnknownFindAuthorisationError };
