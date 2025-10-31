
export interface Question {
  id: string;
  week: number;
  question: string;
  code?: string;
  image?: string;
  options: string[];
  answer: string;
  explanation: string;
}