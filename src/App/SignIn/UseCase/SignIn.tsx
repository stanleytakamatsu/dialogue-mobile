import { ISignIn } from './ISignIn';
import { ISignInCommand } from './Type/Command/ISignInCommand';
import { Authorisation } from '../Entity/Autorisation';
import { ISignInService } from '../Service/ISignInService';
import { SignInErrorFactory } from './Factory/SignInErrorFactory';
import { FindAuthorisationByCredencialsCommand } from '../Service/Type/Command/FindAuthorisationByCredencialsCommand';

class SignIn implements ISignIn {
  public constructor(private service: ISignInService) {}

  public async execute(command: ISignInCommand): Promise<Authorisation> {
    try {
      const serviceCommand = FindAuthorisationByCredencialsCommand.create(
        command.Username,
        command.Password
      );

      return await this.service.findAuthorisationByCredentials(serviceCommand);
    } catch (error) {
      throw SignInErrorFactory.create(error);
    }
  }
}

export { SignIn };
