import moment from 'moment';

import { AuthorisationMapper } from '../Repository/Type/Mapper/AuthorisationMapper';

class Authorisation {
  private accountId: string;

  private token: string;

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

  public static fromMapper(mapper: AuthorisationMapper): Authorisation {
    const authorisation = new Authorisation();

    authorisation.accountId = mapper.AccountId;
    authorisation.token = mapper.Token;
    authorisation.expirationDate = mapper.ExpirationDate;

    return authorisation;
  }
}

export { Authorisation };
