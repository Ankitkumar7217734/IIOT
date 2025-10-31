import React from "react";
import { Question } from "../types";
import QuestionCard from "./QuestionCard";

interface ResultsProps {
  questions: Question[];
  userAnswers: Record<string, number>;
  score: number;
  onRestart: () => void;
  onHome: () => void;
}

const optionMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };

const getCorrectIndex = (question: Question) => {
  const letter = question.answer.split(".")[0].trim().toLowerCase();
  return optionMap[letter];
};

const getUserAnswerText = (question: Question, userAnswerIndex?: number) => {
  if (userAnswerIndex === undefined) {
    return "Not answered";
  }

  const optionLetter = ["a", "b", "c", "d"][userAnswerIndex];
  const optionText = question.options[userAnswerIndex];
  return `${optionLetter}. ${optionText}`;
};

const Results: React.FC<ResultsProps> = ({
  questions,
  userAnswers,
  score,
  onRestart,
  onHome,
}) => {
  const totalQuestions = questions.length;
  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-black">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Quiz Results</h2>
        <p className="text-5xl font-extrabold text-blue-700 mb-2">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-semibold text-blue-700 mb-6">
          ({percentage}%)
        </p>
        <div className="max-w-2xl mx-auto text-left bg-white border border-black rounded-lg p-4 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">Answer Summary</h3>
          <ul className="space-y-2">
            {questions.map((question, index) => {
              const userAnswerIndex = userAnswers[question.id];
              const correctIndex = getCorrectIndex(question);
              const userAnswerText = getUserAnswerText(
                question,
                userAnswerIndex
              );
              const isCorrect = userAnswerIndex === correctIndex;

              return (
                <li key={question.id} className="text-sm text-blue-700">
                  <span className="font-semibold">Q{index + 1}:</span>{" "}
                  <span
                    className={
                      isCorrect
                        ? "text-green-700 font-semibold"
                        : "text-red-700 font-semibold"
                    }
                  >
                    {userAnswerText}
                  </span>
                  <span className="ml-2">
                    Correct: {" "}
                    <span className="font-semibold text-blue-700">
                      {question.answer}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
          <button
            onClick={onRestart}
            className="px-8 py-3 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-md hover:bg-blue-50 transition-all"
          >
            Try Again
          </button>
          <button
            onClick={onHome}
            className="px-8 py-3 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-md hover:bg-blue-50 transition-all"
          >
            Return Home
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-700">
          Review Your Answers
        </h3>
        {questions.map((question, index) => {
          const selectedAnswer = userAnswers[question.id];
          const correctIndex = getCorrectIndex(question);
          const isIncorrect =
            selectedAnswer !== undefined && selectedAnswer !== correctIndex;

          return (
            <div key={question.id} className="space-y-4">
              <QuestionCard
                question={question}
                questionNumber={index + 1}
                selectedAnswer={selectedAnswer}
                onAnswerSelect={() => {}}
                showCorrect
                userAnswerIncorrect={isIncorrect}
              />
              <div className="bg-white border border-black p-4 rounded-lg">
                <p className="font-bold text-blue-700">
                  Correct Answer: {" "}
                  <span className="font-normal">{question.answer}</span>
                </p>
                <p className="font-bold text-blue-700 mt-2">
                  Explanation: {" "}
                  <span className="font-normal">{question.explanation}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
