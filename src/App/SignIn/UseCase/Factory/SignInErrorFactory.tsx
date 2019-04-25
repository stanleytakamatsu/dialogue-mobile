import { RepositoryError } from '../../../Core/Error/Repository/RepositoryError';
import { UnknownSignInError } from '../Type/Error/UnknownSignInError';
import { InvalidCredentialsError } from '../Type/Error/InvalidCredentialsError';
import { AuthorisationNotFoundError } from '../../../SignIn/Service/Type/Error/AuthorisationNotFoundError';

class SignInErrorFactory {
  public static create(error: RepositoryError): Error {
    switch (error.constructor) {
      case AuthorisationNotFoundError:
        return new InvalidCredentialsError();
        return new UnknownSignInError();
      default:
        return new UnknownSignInError();
    }
  }
}

export { SignInErrorFactory };
