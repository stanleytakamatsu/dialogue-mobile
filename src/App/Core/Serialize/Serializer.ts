import { Deserialize, DeserializeKeysFrom, Serialize, SnakeCase } from 'cerialize';

import { ISerializer } from './ISerializer';

DeserializeKeysFrom(SnakeCase);

class Serializer implements ISerializer {
  public static deserialize<T>(data: any): T {
    return Deserialize(data, this);
  }

  public serialize(): any {
    return Serialize(this);
  }
}

export { Serializer };
