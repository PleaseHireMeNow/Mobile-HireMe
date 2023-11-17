// Example context
import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from 'react';
import { User } from '../types/models/User';
import agent from '../api/agent';

/*
 * Interface for typescript
 */
export interface IUserContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  getLoggedInUser: () => Promise<void>;
  exampleName: string;
}

/*
 * Create context and set default values
 */
export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  getLoggedInUser: () => Promise.resolve(),
  exampleName: 'BOBBY',
});

/*
 * Create context provider
 */
export const UserContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const exampleName = 'BOBBY';

  const getLoggedInUser = async () => {
    try {
      const userResponse = await agent.Account.current();
      setUser(userResponse);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, getLoggedInUser, exampleName }}
    >
      {children}
    </UserContext.Provider>
  );
};
