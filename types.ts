
export interface AnswerOption {
  text: string;
  isCorrect: boolean;
  imageUrl?: string; // Opcional: URL de la imagen para la opción de respuesta
}

export interface Question {
  id: number;
  category: string;
  questionText: string;
  options: AnswerOption[];
  imageUrl?: string; // Optional image for some questions
}

export enum QuizStatus {
  NotStarted = 'NOT_STARTED',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

// UserAnswers will store the index of the selected option for each questionId
export interface UserAnswers {
  [questionId: number]: number;
}
