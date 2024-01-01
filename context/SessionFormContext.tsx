import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from 'react';
import { DifficultyTypes } from '../types/models/Stack';

/*
 * Interface for typescript
 */
export interface ISessionFormContext {
  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;
  selectedDifficulty: DifficultyTypes | null;
  setSelectedDifficulty: Dispatch<SetStateAction<DifficultyTypes | null>>;
}

/*
 * Create context and set default values
 */
export const SessionFormContext = createContext<ISessionFormContext>({
  selectedTopic: '',
  setSelectedTopic: () => {},
  selectedDifficulty: null,
  setSelectedDifficulty: () => {},
});

/*
 * Create context provider
 */
export const SessionFormContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyTypes | null>(null);

  return (
    <SessionFormContext.Provider
      value={{
        selectedTopic,
        setSelectedTopic,
        selectedDifficulty,
        setSelectedDifficulty,
      }}
    >
      {children}
    </SessionFormContext.Provider>
  );
};
