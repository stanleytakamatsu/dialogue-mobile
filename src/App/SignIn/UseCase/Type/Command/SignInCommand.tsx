import { ISignInCommand } from './ISignInCommand';

class SignInCommand implements ISignInCommand {
  private username: string;

  private password: string;

  public get Username(): string {
    return this.username;
  }

  public get Password(): string {
    return this.password;
  }

  public static create(username: string, password: string): SignInCommand {
    const command = new SignInCommand();

    command.username = username;
    command.password = password;

    return command;
  }
}

export { SignInCommand };
