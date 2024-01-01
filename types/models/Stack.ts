export interface Topic {
  difficulty: Difficulty;
  topic: Stack;
}

export interface Stack {
  name: string;
  iconPath: string;
}

export interface Difficulty {
  name: DifficultyTypes;
  iconPath: string;
}

export type DifficultyTypes = 'entry-level' | 'mid-level' | 'expert-level';
