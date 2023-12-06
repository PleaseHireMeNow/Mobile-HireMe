import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
} from 'react';
import { Question } from '../types/models/Question';

export type Score = { correct: number; incorrect: number };

/*
 * Interface for typescript
 */
export interface ICurrentSessionContext {
  questions: Question[] | null;
  setQuestions: Dispatch<SetStateAction<Question[] | null>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  currentScore: Score;
  setCurrentScore: Dispatch<SetStateAction<Score>>;
}

/*
 * Create context and set default values
 */
export const CurrentSessionContext = createContext<ICurrentSessionContext>({
  questions: null,
  setQuestions: () => {},
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
  currentScore: { correct: 0, incorrect: 0 },
  setCurrentScore: () => {},
});

/*
 * Create context provider
 */
export const CurrentSessionContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState({
    correct: 0,
    incorrect: 0,
  });

  return (
    <CurrentSessionContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        currentScore,
        setCurrentScore,
      }}
    >
      {children}
    </CurrentSessionContext.Provider>
  );
};
