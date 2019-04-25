import { IApplicationConfiguration } from '../../../Config/IApplicationConfiguration';
import { IContainerService } from '../../../Core/Container/IContainerService';
import { AxiosHttp } from '../../../Core/Database/Driver/Http/Axios/AxiosHttpDriver';
import { IProvider } from '../../../Core/Provider/IProvider';
import { ISignInRepository } from '../../Repository/ISignInRepository';
import { SignInRepository } from '../../Repository/SignInRepository';

class SignInRepositoryProvider implements IProvider {
  private readonly container: IContainerService;

  public constructor(container: IContainerService) {
    this.container = container;
  }

  public async register(): Promise<void> {
    await this.registerSignInRepository();
  }

  private async registerSignInRepository(): Promise<void> {
    this.container.register<ISignInRepository>(ISignInRepository, () => {
      return new Promise<ISignInRepository>(async resolve => {
        const config = await this.container.get<IApplicationConfiguration>(
          IApplicationConfiguration
        );
        const timeout = 3600;
        const httpClient = new AxiosHttp({
          baseUrl: config.apiBaseUrl(),
          connectionTimeout: timeout
        });
        const repository = new SignInRepository(httpClient);

        resolve(repository);
      });
    });
  }
}

export { SignInRepositoryProvider };
