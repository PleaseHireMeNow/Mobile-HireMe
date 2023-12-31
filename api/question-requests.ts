import { QuestionResponse } from '../types/models/Question';
import { requests } from './base';

export const Questions = {
  get: (userId: string) =>
    requests.get<QuestionResponse>(`/questions/${userId}/new`),
};
