import React from "react";
import { Question } from "../types";
import QuestionCard from "./QuestionCard";

interface QuizProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  userAnswers: Record<string, number>;
  onAnswerSelect: (questionId: string, optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onHome: () => void;
  timeRemaining: number | null;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  questionNumber,
  totalQuestions,
  userAnswers,
  onAnswerSelect,
  onNext,
  onPrevious,
  onSubmit,
  onHome,
  timeRemaining,
}) => {
  const isLastQuestion = questionNumber === totalQuestions;
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        {timeRemaining !== null && (
          <span
            className={`font-semibold ${
              timeRemaining <= 60 ? "text-red-600" : "text-blue-700"
            }`}
          >
            Time left: {formatTime(timeRemaining)}
          </span>
        )}
        <button
          onClick={onHome}
          className="px-5 py-2 font-semibold text-blue-700 bg-white border-2 border-black rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
        >
          Home
        </button>
      </div>
      <div className="w-full bg-white border border-black rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
      <p className="text-center font-semibold text-blue-700">
        Question {questionNumber} of {totalQuestions}
      </p>

      <QuestionCard
        question={question}
        questionNumber={questionNumber}
        selectedAnswer={userAnswers[question.id]}
        onAnswerSelect={onAnswerSelect}
        showCorrect={false}
        userAnswerIncorrect={false}
      />

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={onPrevious}
          disabled={questionNumber === 1}
          className="px-6 py-3 font-semibold text-blue-700 bg-white border-2 border-black rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            className="px-10 py-4 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-lg hover:bg-blue-50 transition-all"
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-8 py-3 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-md hover:bg-blue-50 transition-all"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
