import React, { useState } from "react";

interface WeekSelectorProps {
  weeks: number[];
  onStartQuiz: (selectedWeeks: number[], shuffle: boolean) => void;
  timerOption: number;
  onTimerOptionChange: (minutes: number) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({
  weeks,
  onStartQuiz,
  timerOption,
  onTimerOptionChange,
}) => {
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([]);
  const [shuffle, setShuffle] = useState(true);

  const handleWeekToggle = (week: number) => {
    setSelectedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  const handleSelectAll = () => {
    if (selectedWeeks.length === weeks.length) {
      setSelectedWeeks([]);
    } else {
      setSelectedWeeks(weeks);
    }
  };

  const startQuiz = () => {
    if (selectedWeeks.length > 0) {
      onStartQuiz(
        selectedWeeks.sort((a, b) => a - b),
        shuffle
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in border border-black">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Select Quiz Weeks
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {weeks.map((week) => (
          <label
            key={week}
            className={`flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedWeeks.includes(week)
                ? "bg-blue-200 border-black shadow-inner"
                : "bg-white border-black hover:bg-blue-50"
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={selectedWeeks.includes(week)}
              onChange={() => handleWeekToggle(week)}
            />
            <span
              className={`font-semibold ${
                selectedWeeks.includes(week) ? "text-blue-900" : "text-blue-700"
              }`}
            >
              Week {week}
            </span>
          </label>
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={shuffle}
            onChange={() => setShuffle((prev) => !prev)}
            className="h-5 w-5 text-blue-700 bg-white border-black rounded focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-blue-700 font-medium">Shuffle questions</span>
        </label>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-center text-blue-700 mb-3">
          Select Timer
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[5, 10, 30].map((minutes) => (
            <button
              key={minutes}
              type="button"
              onClick={() => onTimerOptionChange(minutes)}
              className={`px-5 py-2 font-semibold border-2 rounded-lg transition-colors ${
                timerOption === minutes
                  ? "bg-blue-500 text-white border-black shadow-md"
                  : "bg-white text-blue-700 border-black hover:bg-blue-50"
              }`}
            >
              {minutes} minutes
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleSelectAll}
          className="w-full sm:w-auto px-6 py-3 font-semibold text-blue-700 bg-white border-2 border-black rounded-lg hover:bg-blue-50 transition-colors"
        >
          {selectedWeeks.length === weeks.length
            ? "Deselect All"
            : "Select All"}
        </button>
        <button
          onClick={startQuiz}
          disabled={selectedWeeks.length === 0}
          className="w-full sm:w-auto px-8 py-3 font-bold text-blue-700 bg-white border-2 border-black rounded-lg shadow-md hover:bg-blue-50 disabled:bg-gray-200 disabled:text-blue-300 disabled:border-gray-400 disabled:cursor-not-allowed transition-all"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default WeekSelector;
