import * as React from 'react';

import { IView } from '../Core/Interface/IView';
import { ILogin } from './ILogin';
import { ILoginNavigationProps } from './ILoginNavigationProps';
import { RkLoginView } from './View/RkLoginView';
import { SignInCommand } from '../../SignIn/UseCase/Type/Command/SignInCommand';
import { ISignIn } from '../../SignIn/UseCase/ISignIn';

type State = { username: string; password: string; isLoading: boolean };

class Login extends React.Component<ILoginNavigationProps, State>
  implements ILogin<ILoginNavigationProps, State> {
  private signInUseCase: ISignIn;

  private view: IView;

  public constructor(props) {
    super(props);

    this.state = { ...this.state, isLoading: false };

    console.log(this.state);
    this.view = new RkLoginView();
    this.view.attach(this);
  }

  public async componentDidMount(): Promise<void> {
    const signInUseCase = await this.props.screenProps.container.get<ISignIn>(ISignIn);

    this.signInUseCase = signInUseCase;

    this.onChangePasswordInput = this.onChangePasswordInput.bind(this);
    this.onChangeUsernameInput = this.onChangeUsernameInput.bind(this);
    this.login = this.login.bind(this);
  }

  public onChangePasswordInput = value => {
    this.setState({
      password: value
    });
  };

  public onChangeUsernameInput = value => {
    this.setState({
      username: value
    });
  };

  public async login(): Promise<void> {
    this.setState({ isLoading: true });

    const { username, password } = this.state;
    const command = SignInCommand.create(username, password);

    try {
      const data = await this.signInUseCase.execute(command);

      console.log(data);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return this.view.render();
  }
}

export { Login };
