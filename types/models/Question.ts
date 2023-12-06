export interface AnswerContent {
  text: string;
}

export interface Answer {
  'answer-content': AnswerContent;
  'is-correct': boolean;
}

export interface Response {
  responseContent: {
    text: string;
  };
  isCorrect: boolean;
}

export interface QuestionContent {
  text: string;
  answers: Answer[];
}

export interface Question {
  'question-id': string;
  'question-content': QuestionContent;
}

export interface CompletedQuestion extends Question {
  responses: Response[];
}
