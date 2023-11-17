import { User } from '../types/models/User';
import { requests } from './base';

// interface for account request

export const Account = {
  // get current user
  current: () => requests.get<User>('/user'), // specify the return type, here it is User
  /*
   * Fill in when we have more information
   */
};
