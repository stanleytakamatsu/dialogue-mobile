import { IHttpDriver } from '../../Core/Database/Driver/Http/IHttpDriver';
import { Authorisation } from '../Entity/Autorisation';
import { ISignInRepository } from './ISignInRepository';
import { IFindAuthorisationByCredencialsCommand } from './Type/Command/IFindAuthorisationByCredencialsCommand';
import { SignInRepositoryErrorFactory } from './Factory/SignInRepositoryErrorFactory';
import { AuthorisationResponseMapper } from './Type/Mapper/AuthorisationResponseMapper';

class SignInRepository implements ISignInRepository {
  private httpClient: IHttpDriver;

  private uri = '/v1/accounts/logins';

  public constructor(httpClient: IHttpDriver) {
    this.httpClient = httpClient;
  }

  public async findAuthorisationByCredentials(
    command: IFindAuthorisationByCredencialsCommand
  ): Promise<Authorisation> {
    const params = {
      email: command.Username,
      password: command.Password
    };
    try {
      const response = await this.httpClient.post(this.uri, params);

      const autorisationResponse = AuthorisationResponseMapper.deserialize<
        AuthorisationResponseMapper
      >(response);

      return Authorisation.fromMapper(autorisationResponse.Data);
    } catch (error) {
      throw SignInRepositoryErrorFactory.create(error);
    }
  }
}

export { SignInRepository };
