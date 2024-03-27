import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, timer]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const action = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      <h1>Stopwatch</h1>
      <p>Timer: {formatTime(timer)}</p>
      <button onClick={action}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
