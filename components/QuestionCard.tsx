import React from "react";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer?: number;
  onAnswerSelect: (questionId: string, optionIndex: number) => void;
  showCorrect?: boolean;
  userAnswerIncorrect?: boolean;
}

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <pre className="bg-white border border-black p-4 rounded-md my-4 overflow-x-auto">
    <code className="text-sm font-mono text-blue-700">{code}</code>
  </pre>
);

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect,
  showCorrect = false,
  userAnswerIncorrect = false,
}) => {
  const optionsLetters = ["a", "b", "c", "d"];
  const correctIndex = question.answer
    ? ["a", "b", "c", "d"].indexOf(
        question.answer.split(".")[0].trim().toLowerCase()
      )
    : -1;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow hover:shadow-xl border border-black">
      <h3 className="text-lg font-semibold mb-4 text-blue-700">
        <span className="text-blue-700 mr-2">{questionNumber}.</span>
        {question.question}
      </h3>
      {question.image && (
        <div className="my-4 flex justify-center">
          <img
            src={question.image}
            alt="Question illustration"
            className="rounded-lg max-w-full h-auto bg-white p-2 border border-black"
            style={{ maxHeight: "300px" }}
          />
        </div>
      )}
      {question.code && <CodeBlock code={question.code} />}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = showCorrect && index === correctIndex;
          const isIncorrectSelection =
            userAnswerIncorrect && isSelected && !isCorrectOption;

          const baseClasses =
            "flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200";

          let labelClasses = `${baseClasses} bg-white border-black hover:bg-blue-50`;
          let letterClasses = "font-semibold mr-3 text-blue-700";
          let textClasses = "text-blue-700";

          if (isCorrectOption) {
            labelClasses = `${baseClasses} bg-green-500 border-green-700 text-white`;
            letterClasses = "font-semibold mr-3 text-white";
            textClasses = "text-white";
          } else if (isIncorrectSelection) {
            labelClasses = `${baseClasses} bg-red-500 border-red-700 text-white`;
            letterClasses = "font-semibold mr-3 text-white";
            textClasses = "text-white";
          } else if (isSelected) {
            labelClasses = `${baseClasses} bg-blue-500 border-black text-white shadow-lg`;
            letterClasses = "font-semibold mr-3 text-white";
            textClasses = "text-white";
          }

          return (
            <label key={index} className={labelClasses}>
            <input
              type="radio"
              name={`question-${question.id}`}
              className="hidden"
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(question.id, index)}
            />
              <span className={letterClasses}>{optionsLetters[index]}.</span>
              <span className={textClasses}>{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
