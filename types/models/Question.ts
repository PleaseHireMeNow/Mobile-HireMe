export interface AnswerContent {
  text: string;
}

export interface Answer {
  answerContent: AnswerContent;
  isCorrect: boolean;
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
  questionId: string;
  questionContent: QuestionContent;
}

export interface CompletedQuestion extends Question {
  responses: Response[];
}
