export interface Topic {
  difficulty: Difficulty;
  topic: Stack;
}

export interface Stack {
  name: string;
  iconPath: string;
}

export interface Difficulty {
  name: 'entry-level' | 'mid-level' | 'expert-level';
  iconPath: string;
}
