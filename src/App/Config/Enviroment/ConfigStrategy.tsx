import { Environments } from './Environments';
import { IConfig } from './IConfig';

class ConfigStrategy {
  public static async get(env: Environments): Promise<IConfig> {
    switch (env) {
      case Environments.PRODUCTION:
        return (await import('./Config.Production'))['default']['Config'];
      default:
        return (await import('./Config.Development'))['default']['Config'];
    }
  }
}

export { ConfigStrategy };
