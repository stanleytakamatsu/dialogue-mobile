import { Constants } from 'expo';

import { IConfig } from './IConfig';

export const Config: IConfig = {
  API_BASE_URL: Constants.manifest.env.REACT_NATIVE_API_BASE_URL
};
