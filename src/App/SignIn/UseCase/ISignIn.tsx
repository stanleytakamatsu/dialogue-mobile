import { Authorisation } from '../Entity/Autorisation';
import { ISignInCommand } from './Type/Command/ISignInCommand';

interface ISignIn {
  execute(command: ISignInCommand): Promise<Authorisation>;
}

const ISignIn = Symbol.for('ISignIn');

export { ISignIn };
