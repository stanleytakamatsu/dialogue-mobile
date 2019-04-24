import { ISignInService } from './ISignInService';
import { FindAuthorisationByCredencialsCommand } from './Type/Command/FindAuthorisationByCredencialsCommand';
import { IFindAuthorisationByCredencialsCommand } from './Type/Command/IFindAuthorisationByCredencialsCommand';
import { Authorisation } from '../Entity/Autorisation';
import { SignInServiceErrorFactory } from './Factory/SignInServiceErrorFactory';
import { ISignInRepository } from '../Repository/ISignInRepository';

class SignInService implements ISignInService {
  public constructor(private repository: ISignInRepository) {}

  public async findAuthorisationByCredentials(
    command: IFindAuthorisationByCredencialsCommand
  ): Promise<Authorisation> {
    try {
      const repositoryCommand = FindAuthorisationByCredencialsCommand.create(
        command.Username,
        command.Password
      );

      return await this.repository.findAuthorisationByCredentials(repositoryCommand);
    } catch (error) {
      throw SignInServiceErrorFactory.create(error);
    }
  }
}

export { SignInService };
