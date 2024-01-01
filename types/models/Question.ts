export interface QuestionResponse {
  current_question: number;
  answered_correctly: number;
  timestamp: Timestamp;
  questions: QuestionObject[];
  topic_selection: TopicSelection;
  session_id: string;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface QuestionObject {
  question: Question;
}

export interface Question {
  question_content: QuestionContent;
  question_id: string;
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

export interface TopicSelection {
  topic: Topic;
  difficulty: Difficulty;
}

export interface Topic {
  iconPath: string;
  name: string;
}

export interface Difficulty {
  name: string;
  iconPath: string;
}
