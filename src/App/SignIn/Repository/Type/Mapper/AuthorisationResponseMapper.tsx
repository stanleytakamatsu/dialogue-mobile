import { autoserializeAs } from 'cerialize';

import { Serializer } from '../../../../Core/Serialize/Serializer';
import { AuthorisationMapper } from './AuthorisationMapper';

class AuthorisationResponseMapper extends Serializer {
  @autoserializeAs(AuthorisationMapper, 'data')
  private data: AuthorisationMapper;

  public get Data(): AuthorisationMapper {
    return this.data;
  }
}

export { AuthorisationResponseMapper };
