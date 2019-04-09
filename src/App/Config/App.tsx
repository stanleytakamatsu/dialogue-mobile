import * as React from 'react';
import { RouterContainer } from './RouterContainer';
import { AppLoading } from 'expo';
import { IContainerService } from '../Core/Container/IContainerService';
import { ApplicationConfiguration } from './ApplicationConfiguration';
import { Strategies } from '../Core/Container/Strategies';
import { ContainerFactory } from '../Core/Container/Factory/ContainerFactory';
import { IApplicationConfiguration } from './IApplicationConfiguration';
import { ContainerRegistry } from './ContainerRegistry';

class App extends React.Component {
  public state = {
    isLoadingComplete: false
  };

  private container: IContainerService;

  public render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={async () => await this.configureContainer()}
          onFinish={() => this.finishLoading()}
        />
      );
    } else {
      return <RouterContainer screenProps={{ container: this.container }} />;
    }
  }

  private async configureContainer(): Promise<void> {
    this.container = await ContainerFactory.create(Strategies.INVERSIFY);

    const promisedConfig = new Promise<IApplicationConfiguration>(async resolve => {
      let config = new ApplicationConfiguration();

      await config.loadConfig();

      resolve(config);
    });

    await this.container.register<IApplicationConfiguration>(
      IApplicationConfiguration,
      promisedConfig
    );

    const containerRegistry: ContainerRegistry = new ContainerRegistry(this.container);

    await containerRegistry.registerAll();
  }

  private finishLoading() {
    this.setState({ isLoadingComplete: true });
  }
}

export { App };
