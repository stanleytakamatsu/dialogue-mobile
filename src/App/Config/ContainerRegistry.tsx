import { IContainerRegistry } from '../../App/Core/Container/IContainerRegistry';
import { IProvider } from '../../App/Core/Provider/IProvider';
import { INewable } from '../../App/Core/Interface/INewable';
import { IContainerService } from '../../App/Core/Container/IContainerService';

class ContainerRegistry implements IContainerRegistry {
  private static readonly REGISTERED_PROVIDERS: INewable<IProvider>[] = [];

  public constructor(private readonly container: IContainerService) {}

  public async registerAll(): Promise<void> {
    const providersLength = ContainerRegistry.REGISTERED_PROVIDERS.length;

    for (let i = 0; i < providersLength; i += 1) {
      const newableProvider = ContainerRegistry.REGISTERED_PROVIDERS[i];

      await this.registerProvider(newableProvider);
    }
  }

  public async registerProvider(newableProvider: INewable<IProvider>): Promise<any> {
    const provider: IProvider = new newableProvider(this.container);

    await provider.register();
  }
}

export { ContainerRegistry };
