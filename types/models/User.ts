import { Answer, CompletedQuestion, Question } from './Question';
import { Stack } from './Stack';

export interface User {
  userToken: string;
  userId: string;
  username: string;
  stack: Stack[];
  isGuest: boolean;
  history: CompletedQuestion[];
  userAnswer: CompletedQuestion;
}
