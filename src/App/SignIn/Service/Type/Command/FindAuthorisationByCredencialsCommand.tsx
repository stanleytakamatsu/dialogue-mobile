import { IFindAuthorisationByCredencialsCommand } from './IFindAuthorisationByCredencialsCommand';

class FindAuthorisationByCredencialsCommand implements IFindAuthorisationByCredencialsCommand {
  private username: string;

  private password: string;

  public get Username(): string {
    return this.username;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(username: string, password: string): FindAuthorisationByCredencialsCommand {
    const command = new FindAuthorisationByCredencialsCommand();

    command.username = username;
    command.password = password;

    return command;
  }
}

export { FindAuthorisationByCredencialsCommand };
