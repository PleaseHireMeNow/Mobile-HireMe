import { Difficulty } from '../context/SessionFormContext';
import { requests } from './base';

// /stackSelection

export interface StackSelection {
  stack: string;
  difficulty: Difficulty;
}

export const StackSelect = {
  get: (userId: string) => requests.get<string[]>(`/stackSelection/${userId}`),
  create: (userId: string, selections: StackSelection) =>
    requests.post(`/stackSelection/${userId}`, { selections }),
  edit: (userId: string, selections: StackSelection) =>
    requests.put(`/stackSelection/${userId}`, { selections }),
  delete: (userId: string) => requests.del(`/stackSelection/${userId}`),
};
