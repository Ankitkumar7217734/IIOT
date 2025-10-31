import React, { useState, useMemo, useCallback, useEffect } from "react";
import { allQuestions } from "./data/quizData";
import WeekSelector from "./components/WeekSelector";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Header from "./components/Header";
import { Question } from "./types";

type QuizState = "selecting" | "in_progress" | "finished";

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>("selecting");
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timerOption, setTimerOption] = useState<number>(5);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const totalWeeks = useMemo(() => {
    const weeks = new Set(allQuestions.map((q) => q.week));
    return Array.from(weeks).sort((a, b) => a - b);
  }, []);

  const handleStartQuiz = useCallback(
    (selectedWeeks: number[], shuffle: boolean) => {
      const filteredQuestions = allQuestions.filter((q) =>
        selectedWeeks.includes(q.week)
      );
      setCurrentQuestions(
        shuffle ? shuffleArray(filteredQuestions) : filteredQuestions
      );
      setUserAnswers({});
      setScore(0);
      setCurrentQuestionIndex(0);
      setTimeRemaining(timerOption ? timerOption * 60 : null);
      setQuizState("in_progress");
    },
    [timerOption]
  );

  const handleAnswerSelect = useCallback(
    (questionId: string, optionIndex: number) => {
      setUserAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    },
    []
  );

  const handleTimerOptionChange = useCallback((minutes: number) => {
    setTimerOption(minutes);
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, currentQuestions.length]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex]);

  const handleSubmitQuiz = useCallback(() => {
    let correctAnswers = 0;
    const optionMap: { [key: string]: number } = { a: 0, b: 1, c: 2, d: 3 };

    currentQuestions.forEach((q) => {
      const correctAnswerLetter = q.answer.split(".")[0].toLowerCase();
      const correctAnswerIndex = optionMap[correctAnswerLetter];
      if (userAnswers[q.id] === correctAnswerIndex) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setTimeRemaining(null);
    setQuizState("finished");
  }, [currentQuestions, userAnswers]);

  const handleRestart = useCallback(() => {
    setQuizState("selecting");
    setCurrentQuestions([]);
    setUserAnswers({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeRemaining(null);
  }, []);

  useEffect(() => {
    if (
      quizState !== "in_progress" ||
      timeRemaining === null ||
      timeRemaining <= 0
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null) return prev;
        if (prev <= 1) {
          window.clearInterval(interval);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [quizState, timeRemaining, handleSubmitQuiz]);

  const renderContent = () => {
    switch (quizState) {
      case "in_progress":
        if (currentQuestions.length === 0) return null;
        return (
          <Quiz
            question={currentQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={currentQuestions.length}
            userAnswers={userAnswers}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            onSubmit={handleSubmitQuiz}
            onHome={handleRestart}
            timeRemaining={timeRemaining}
          />
        );
      case "finished":
        return (
          <Results
            questions={currentQuestions}
            userAnswers={userAnswers}
            score={score}
            onRestart={handleRestart}
          />
        );
      case "selecting":
      default:
        return (
          <WeekSelector
            weeks={totalWeeks}
            onStartQuiz={handleStartQuiz}
            timerOption={timerOption}
            onTimerOptionChange={handleTimerOptionChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-700 font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default App;
