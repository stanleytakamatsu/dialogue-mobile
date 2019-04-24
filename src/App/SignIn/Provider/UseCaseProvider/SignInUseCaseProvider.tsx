import { IContainerService } from '../../../Core/Container/IContainerService';
import { IProvider } from '../../../Core/Provider/IProvider';
import { ISignInService } from '../../../SignIn/Service/ISignInService';
import { SignIn } from '../../../SignIn/UseCase/SignIn';
import { ISignIn } from '../../../SignIn/UseCase/ISignIn';

class SignInUseCaseProvider implements IProvider {
  private readonly container: IContainerService;

  public constructor(container: IContainerService) {
    this.container = container;
  }

  public async register(): Promise<void> {
    await this.registerSignInUseCase();
  }

  private async registerSignInUseCase(): Promise<void> {
    this.container.register<ISignIn>(ISignIn, () => {
      return new Promise<ISignIn>(async resolve => {
        const service = await this.container.get<ISignInService>(ISignInService);
        const useCase = new SignIn(service);

        resolve(useCase);
      });
    });
  }
}

export { SignInUseCaseProvider };
