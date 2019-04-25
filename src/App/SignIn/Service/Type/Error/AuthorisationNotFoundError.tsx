import { ServiceError } from '../../../../Core/Error/Service/ServiceError';

class AuthorisationNotFoundError extends ServiceError {
  public constructor() {
    super('Could not find authorisation.');
  }
}

export { AuthorisationNotFoundError };
