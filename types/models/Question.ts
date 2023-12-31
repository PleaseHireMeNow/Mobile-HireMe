/* export interface AnswerContent {
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
} */

export interface QuestionResponse {
  sessionQuestionList: SessionQuestion[];
  needMoreQuestionsFlag: boolean;
  current_question: number;
}

export interface SessionQuestion {
  question_id: string;
  question_content: QuestionContent;
}

export interface QuestionContent {
  answers: Answer[];
  text: string;
}

export interface Answer {
  is_correct: boolean;
  answer_content: AnswerContent;
}

export interface AnswerContent {
  text: string;
}
