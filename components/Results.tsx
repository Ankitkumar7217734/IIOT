import React from "react";
import { Question } from "../types";

interface ResultsProps {
  questions: Question[];
  userAnswers: Record<string, number>;
  score: number;
  onRestart: () => void;
}

const optionMap: { [key: string]: number } = { a: 0, b: 1, c: 2, d: 3 };

const Results: React.FC<ResultsProps> = ({
  questions,
  userAnswers,
  score,
  onRestart,
}) => {
  const totalQuestions = questions.length;
  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getOptionStyle = (question: Question, optionIndex: number) => {
    const correctAnswerLetter = question.answer.split(".")[0].toLowerCase();
    const correctAnswerIndex = optionMap[correctAnswerLetter];
    const userAnswerIndex = userAnswers[question.id];

    if (optionIndex === correctAnswerIndex) {
      return "border-black bg-blue-50";
    }
    if (
      optionIndex === userAnswerIndex &&
      userAnswerIndex !== correctAnswerIndex
    ) {
      return "border-black bg-white/70 opacity-80";
    }
    return "border-black bg-white opacity-60";
  };

  const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
    <pre className="bg-white border border-black p-4 rounded-md my-4 overflow-x-auto">
      <code className="text-sm font-mono text-blue-700">{code}</code>
    </pre>
  );

  return (
    <div className="animate-fade-in">
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8 text-center border border-black">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Quiz Results</h2>
        <p className="text-5xl font-extrabold text-blue-700 mb-2">
          {score} / {totalQuestions}
        </p>
        <p className="text-2xl font-semibold text-blue-700 mb-6">
          ({percentage}%)
        </p>
        <button
          onClick={onRestart}
          className="px-8 py-3 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-md hover:bg-blue-50 transition-all"
        >
          Try Again
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-700">
          Review Your Answers
        </h3>
        {questions.map((q, index) => (
          <div
            key={q.id}
            className="bg-white p-6 rounded-xl shadow-lg border border-black"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-700">
              <span className="opacity-60 mr-2 text-blue-700">
                {index + 1}.
              </span>
              {q.question}
            </h4>
            {q.image && (
              <div className="my-4 flex justify-center">
                <img
                  src={q.image}
                  alt="Question illustration"
                  className="rounded-lg max-w-full h-auto bg-white p-2 border border-black"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            )}
            {q.code && <CodeBlock code={q.code} />}
            <div className="space-y-3 mb-4">
              {q.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`p-4 border-2 rounded-lg text-blue-700 ${getOptionStyle(
                    q,
                    idx
                  )}`}
                >
                  <span>{option}</span>
                </div>
              ))}
            </div>
            <div className="bg-white border border-black p-4 rounded-lg">
              <p className="font-bold text-blue-700">
                Correct Answer: <span className="font-normal">{q.answer}</span>
              </p>
              <p className="font-bold text-blue-700 mt-2">
                Explanation:{" "}
                <span className="font-normal">{q.explanation}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
