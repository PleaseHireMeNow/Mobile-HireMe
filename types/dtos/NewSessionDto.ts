import { Topic } from "../models/Topic";

export interface NewSessionDto {
  topic: Topic;
  difficulty: "beginner" | "intermediate" | "advanced";
}
