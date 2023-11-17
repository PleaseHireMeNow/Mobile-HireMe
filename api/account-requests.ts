import { User } from '../types/models/User';
import { requests } from './base';

// interface for account request

export const Account = {
  // get current user
  current: () => requests.get<User>('/user'),
  /*
   * Fill in when we have more information
   */
};
