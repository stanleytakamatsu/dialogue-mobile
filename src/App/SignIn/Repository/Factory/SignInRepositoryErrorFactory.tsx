import { HttpError } from '../../../Core/Error/Http/HttpError';
import { ServerError } from '../../../Core/Error/Http/ServerError';
import { FindRecordError } from '../../../Core/Error/Repository/FindRecordError';
import { RecordNotFoundError } from '../../../Core/Error/Repository/RecordNotFoundError';
import { RepositoryError } from '../../../Core/Error/Repository/RepositoryError';

class SignInRepositoryErrorFactory {
  public static create(error: HttpError): RepositoryError {
    switch (error.constructor) {
      case ServerError:
        return new FindRecordError(error.message, error);
      default:
        return new RecordNotFoundError('Could not find authorization.');
    }
  }
}

export { SignInRepositoryErrorFactory };
