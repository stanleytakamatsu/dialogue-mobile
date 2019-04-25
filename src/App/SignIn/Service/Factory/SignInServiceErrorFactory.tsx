import { FindRecordError } from '../../../Core/Error/Repository/FindRecordError';
import { RecordNotFoundError } from '../../../Core/Error/Repository/RecordNotFoundError';
import { RepositoryError } from '../../../Core/Error/Repository/RepositoryError';
import { ServiceError } from '../../../Core/Error/Service/ServiceError';
import { UnknownFindAuthorisationError } from '../Type/Error/UnknownFindAuthorisationError';
import { AuthorisationNotFoundError } from '../Type/Error/AuthorisationNotFoundError';

class SignInServiceErrorFactory {
  public static create(error: RepositoryError): ServiceError {
    switch (error.constructor) {
      case RecordNotFoundError:
        return new AuthorisationNotFoundError();
      case FindRecordError:
        const originalError = error as FindRecordError;
        return new UnknownFindAuthorisationError(originalError.OriginalError);
      default:
        return new UnknownFindAuthorisationError(error);
    }
  }
}

export { SignInServiceErrorFactory };
