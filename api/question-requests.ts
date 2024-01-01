import { QuestionResponse } from '../types/models/Question';
import { requests } from './base';

export const Questions = {
  new: (userId: string) =>
    requests.get<QuestionResponse>(`/questions/current/new/${userId}`),
  current: (userId: string) =>
    requests.get<QuestionResponse>(`/questions/current/current/${userId}`),
  previous: (userId: string, sessionId: string) =>
    requests.get<QuestionResponse[]>(
      `/questions/previous/${userId}/${sessionId}`
    ),
};
