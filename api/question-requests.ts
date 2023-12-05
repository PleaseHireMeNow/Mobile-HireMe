import { Question } from '../types/models/Question';
import { requests } from './base';

export const Questions = {
  get: (userId: string) => requests.get<Question>(`/questions/${userId}`),
};
