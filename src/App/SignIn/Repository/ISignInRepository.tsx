import { Authorisation } from '../Entity/Autorisation';
import { IFindAuthorisationByCredencialsCommand } from './Type/Command/IFindAuthorisationByCredencialsCommand';

interface ISignInRepository {
  findAuthorisationByCredentials(
    command: IFindAuthorisationByCredencialsCommand
  ): Promise<Authorisation>;
}

const ISignInRepository = Symbol.for('ISignInRepository');

export { ISignInRepository };
