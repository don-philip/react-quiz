import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 100) {
          clearInterval(intervalId);
          onTimeout(); // Trigger onTimeout when time runs out
          return 0;
        }
        return prev - 100; // Decrease time by 100ms
      });
    }, 100);

    // Clear the interval on unmount or when timeout changes
    return () => clearInterval(intervalId);
  }, [timeout, onTimeout]);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}

export default QuestionTimer;
