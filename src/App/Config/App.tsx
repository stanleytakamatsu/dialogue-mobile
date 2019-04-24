import { AppLoading } from 'expo';
import * as React from 'react';

import { ContainerFactory } from '../Core/Container/Factory/ContainerFactory';
import { IContainerService } from '../Core/Container/IContainerService';
import { Strategies } from '../Core/Container/Strategies';
import { ApplicationConfiguration } from './ApplicationConfiguration';
import { ContainerRegistry } from './ContainerRegistry';
import { IApplicationConfiguration } from './IApplicationConfiguration';
import { RouterContainer } from './RouterContainer';

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

    this.container.register<IApplicationConfiguration>(IApplicationConfiguration, () => {
      return new Promise<IApplicationConfiguration>(async resolve => {
        let config = new ApplicationConfiguration();

        await config.loadConfig();

        resolve(config);
      });
    });

    const containerRegistry: ContainerRegistry = new ContainerRegistry(this.container);

    await containerRegistry.registerAll();
  }

  private finishLoading() {
    this.setState({ isLoadingComplete: true });
  }
}

export { App };
