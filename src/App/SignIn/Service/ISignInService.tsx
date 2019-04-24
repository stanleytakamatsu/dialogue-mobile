import { Authorisation } from '../Entity/Autorisation';
import { IFindAuthorisationByCredencialsCommand } from './Type/Command/IFindAuthorisationByCredencialsCommand';

interface ISignInService {
  findAuthorisationByCredentials(
    command: IFindAuthorisationByCredencialsCommand
  ): Promise<Authorisation>;
}

const ISignInService = Symbol.for('ISignInService');

export { ISignInService };
