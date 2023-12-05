import { Account } from './account-requests';
import { Questions } from './question-requests';

// contains all request types
const agent = {
  Account,
  Questions,
};

export default agent;

/*
 * Example: const user = await agent.Account.current();
 */
