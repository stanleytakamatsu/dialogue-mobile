import { Constants } from 'expo';

import { ConfigStrategy } from './Enviroment/ConfigStrategy';
import { Environments } from './Enviroment/Environments';
import { IConfig } from './Enviroment/IConfig';
import { IApplicationConfiguration } from './IApplicationConfiguration';

class ApplicationConfiguration implements IApplicationConfiguration {
  private config: IConfig;

  public async loadConfig(): Promise<void> {
    this.config = await ConfigStrategy.get(Constants.manifest.releaseChannel as Environments);
  }

  public apiBaseUrl(): string {
    return this.config.API_BASE_URL;
  }
}

export { ApplicationConfiguration };
