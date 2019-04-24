import { IContainerRegistry } from '../../App/Core/Container/IContainerRegistry';
import { IProvider } from '../../App/Core/Provider/IProvider';
import { INewable } from '../../App/Core/Interface/INewable';
import { IContainerService } from '../../App/Core/Container/IContainerService';
import { SignInRepositoryProvider } from '../SignIn/Provider/RepositoryProvider/SignInRepositoryProvider';
import { SignInServiceProvider } from '../SignIn/Provider/ServiceProvider/SignInServiceProvider';
import { SignInUseCaseProvider } from '../SignIn/Provider/UseCaseProvider/SignInUseCaseProvider';

class ContainerRegistry implements IContainerRegistry {
  private static readonly REGISTERED_PROVIDERS: INewable<IProvider>[] = [
    SignInServiceProvider,
    SignInUseCaseProvider,
    SignInRepositoryProvider
  ];

  private readonly container: IContainerService;

  public constructor(container: IContainerService) {
    this.container = container;
  }

  public async registerAll(): Promise<void> {
    const providersLength = ContainerRegistry.REGISTERED_PROVIDERS.length;

    for (let i = 0; i < providersLength; i += 1) {
      const newableProvider = ContainerRegistry.REGISTERED_PROVIDERS[i];

      await this.registerProvider(newableProvider);
    }
  }

  public async registerProvider(newableProvider: INewable<IProvider>): Promise<void> {
    const provider: IProvider = new newableProvider(this.container);

    await provider.register();
  }
}

export { ContainerRegistry };
