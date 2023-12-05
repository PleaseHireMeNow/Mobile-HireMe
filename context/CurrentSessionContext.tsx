import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from 'react';
import { Question } from '../types/models/Question';

/*
 * Interface for typescript
 */
export interface ICurrentSessionContext {
  questions: Question[] | null;
  setQuestions: Dispatch<SetStateAction<Question[] | null>>;
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

/*
 * Create context and set default values
 */
export const CurrentSessionContext = createContext<ICurrentSessionContext>({
  questions: null,
  setQuestions: () => {},
  currentQuestion: 0,
  setCurrentQuestion: () => {},
});

/*
 * Create context provider
 */
export const CurrentSessionContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  return (
    <CurrentSessionContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </CurrentSessionContext.Provider>
  );
};
