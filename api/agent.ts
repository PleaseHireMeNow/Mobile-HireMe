import { Account } from './account-requests';
import { Questions } from './question-requests';
import { StackSelect } from './stack-selection';

// contains all request types
const agent = {
  Account,
  Questions,
  StackSelect,
};

export default agent;

/*
 * Example: const user = await agent.Account.current();
 */
