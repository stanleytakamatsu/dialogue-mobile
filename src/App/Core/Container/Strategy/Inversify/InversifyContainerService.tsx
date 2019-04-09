import * as Inversify from 'inversify';
import { IContainerStrategy } from '../IContainerStrategy';

class InversifyContainerService implements IContainerStrategy {
  private readonly container: Inversify.Container;

  public constructor() {
    this.container = new Inversify.Container();
  }

  public register<T>(identifier: symbol, service: Promise<T>): void {
    this.container.bind<Promise<T>>(identifier).toConstantValue(service);
  }

  public async get<T>(identifier: symbol): Promise<T> {
    return this.container.get<T>(identifier);
  }
}

export { InversifyContainerService };
