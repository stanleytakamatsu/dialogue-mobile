import { autoserializeAs, deserializeAs } from 'cerialize';
import moment from 'moment';

import { Serializer } from '../../../../Core/Serialize/Serializer';

class AuthorisationMapper extends Serializer {
  @autoserializeAs(String, 'account_id')
  private accountId: string;

  @autoserializeAs(String, 'token')
  private token: string;

  @deserializeAs(data => moment(data), 'expiration_date')
  private expirationDate: moment.Moment;

  public get AccountId(): string {
    return this.accountId;
  }

  public get Token(): string {
    return this.token;
  }

  public get ExpirationDate(): moment.Moment {
    return this.expirationDate;
  }
}

export { AuthorisationMapper };
