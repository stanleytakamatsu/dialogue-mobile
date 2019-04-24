import { IContainerService } from '../../../Core/Container/IContainerService';
import { IProvider } from '../../../Core/Provider/IProvider';
import { ISignInRepository } from '../../Repository/ISignInRepository';
import { ISignInService } from '../../../SignIn/Service/ISignInService';
import { SignInService } from '../../../SignIn/Service/SignInService';

class SignInServiceProvider implements IProvider {
  private readonly container: IContainerService;

  public constructor(container: IContainerService) {
    this.container = container;
  }

  public async register(): Promise<void> {
    await this.registerSignInService();
  }

  private async registerSignInService(): Promise<void> {
    this.container.register<ISignInService>(ISignInService, () => {
      return new Promise<ISignInService>(async resolve => {
        const repository = await this.container.get<ISignInRepository>(ISignInRepository);

        const service = new SignInService(repository);

        resolve(service);
      });
    });
  }
}

export { SignInServiceProvider };
