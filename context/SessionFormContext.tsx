import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from 'react';

export type Difficulty = 'Easy' | 'Med' | 'Hard' | 'Pro';

/*
 * Interface for typescript
 */
export interface ISessionFormContext {
  selectedTopic: string;
  setSelectedTopic: Dispatch<SetStateAction<string>>;
  selectedDifficulty: Difficulty | null;
  setSelectedDifficulty: Dispatch<SetStateAction<Difficulty | null>>;
}

/*
 * Create context and set default values
 */
export const SessionFormContext = createContext<ISessionFormContext>({
  selectedTopic: '',
  setSelectedTopic: () => { },
  selectedDifficulty: null,
  setSelectedDifficulty: () => { },
});

/*
 * Create context provider
 */
export const SessionFormContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);

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
