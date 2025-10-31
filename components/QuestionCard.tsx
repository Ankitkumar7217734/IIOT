import React from "react";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer?: number;
  onAnswerSelect: (questionId: string, optionIndex: number) => void;
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
}) => {
  const optionsLetters = ["a", "b", "c", "d"];

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
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedAnswer === index
                ? "bg-blue-500 border-black text-white shadow-lg"
                : "bg-white border-black hover:bg-blue-50"
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              className="hidden"
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(question.id, index)}
            />
            <span
              className={`font-semibold mr-3 ${
                selectedAnswer === index ? "text-white" : "text-blue-700"
              }`}
            >
              {optionsLetters[index]}.
            </span>
            <span
              className={`${
                selectedAnswer === index ? "text-white" : "text-blue-700"
              }`}
            >
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
